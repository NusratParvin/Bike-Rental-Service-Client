import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const location = useLocation();
  const { state } = location;

  // Extract booking data from location state
  const amount = state?.amount || 100;
  const bikeId = state?.bikeId || "";
  const startTime = state?.startTime || "";

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} bikeId={bikeId} startTime={startTime} />
    </Elements>
  );
};

export default Payment;
