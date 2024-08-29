import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import {
  useCreatePaymentIntentMutation,
  useSavePaymentDataMutation,
} from "../../redux/features/payment/paymentApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toast } from "sonner";

interface CheckoutFormProps {
  amount: number;
  bikeId: string;
  startTime: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  amount,
  bikeId,
  startTime,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [savePaymentData] = useSavePaymentDataMutation();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState<string>("");
  const [cardError, setCardError] = useState<string>("");

  const { user } = useSelector((state: RootState) => state.auth);

  const userId = user?.id || "";
  const email = user?.email || "";

  useEffect(() => {
    if (amount > 0) {
      createPaymentIntent(amount)
        .unwrap()
        .then((data) => {
          setClientSecret(data.data);
          console.log("Client Secret:", data.data);
        })
        .catch((error) => {
          console.error("Failed to create payment intent:", error);
          setCardError("Failed to create payment intent");
        });
    }
  }, [amount, createPaymentIntent]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    setProcessing(true);

    // Create Payment Method
    const { error: paymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (paymentMethodError) {
      setCardError(paymentMethodError.message || "An error occurred");
      setProcessing(false);
      return;
    }

    // Confirm Payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret as string, {
        payment_method: paymentMethod.id,
      });

    console.log(paymentIntent);
    if (confirmError) {
      setCardError(confirmError.message || "Payment confirmation failed");
      setProcessing(false);
      return;
    }
    const paymentData = {
      transactionId: paymentIntent?.id,
      amount,
      bikeId,
      userId,
      startTime,
      email,
    };
    console.log(paymentData);
    // Save Payment Data
    try {
      const result = await savePaymentData(paymentData).unwrap();
      console.log("Payment saved successfully:", result);
      setTransactionId(paymentIntent.id);
      toast.success(`Payment successful!`);
      // toast.success(`Payment successful! Transaction ID: ${paymentIntent.id}`);
    } catch (error) {
      console.error("Error saving payment:", error);
      setCardError("Failed to save payment data");
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <CardElement
        className="bg-gray-100/90 w-1/2 mx-auto px-8 py-12 mt-12 rounded-lg"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#333", // Dark text color for readability
              letterSpacing: "0.025em", // Slight spacing between letters
              fontFamily: "Roboto, Helvetica, Arial, sans-serif", // Common font for inputs
              "::placeholder": {
                color: "#aab7c4", // Lighter placeholder text color
              },
              padding: "10px",
              backgroundColor: "#fff", // White background
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Processing..." : "Pay"}
      </button>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">Transaction Completed: {transactionId}</p>
      )} */}

      {transactionId ? (
        <div className="w-1/2 flex justify-center items-center my-16 bg-gray-100/90 text-white py-12 px-8">
          <p>Transaction Completed: {transactionId}</p>
        </div>
      ) : (
        <>
          <CardElement
            className="bg-gray-100/90 w-1/2 mx-auto px-8 py-12 mt-12 rounded-lg"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#333",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="flex justify-center mt-16">
            <button
              type="submit"
              disabled={!stripe || processing}
              className=" rounded-none hover:outline-none w-1/6 text-white text-xl font-semibold "
            >
              {processing ? "Processing..." : "Pay Now"}
            </button>
          </div>

          {cardError && <p className="text-red-600 mt-6">{cardError}</p>}
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
