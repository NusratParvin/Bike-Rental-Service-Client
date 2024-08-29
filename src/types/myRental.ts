export type TMyRental = {
  _id: string;
  bikeId: {
    _id: string;
    name: string;
    image: string;
  };
  startTime: string;
  returnTime?: string | null;
  totalCost: number;
  isReturned: boolean;
  paymentStatus: "paid" | "advanced";
  transactionId: string;
};
