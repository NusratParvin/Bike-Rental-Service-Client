import { FaCalendarCheck, FaMoneyBillWave } from "react-icons/fa";

const MyRentals = () => (
  <>
    <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400">
      <FaCalendarCheck className="h-10 w-10" />
      <p className="ml-4 text-lg">View Paid Rentals</p>
    </div>
    <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400">
      <FaMoneyBillWave className="h-10 w-10" />
      <p className="ml-4 text-lg">Pay for Unpaid Rentals</p>
    </div>
  </>
);

export default MyRentals;
