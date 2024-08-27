import { FaMotorcycle } from "react-icons/fa";

const MyBikeListing = () => (
  <>
    <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400">
      <FaMotorcycle className="h-10 w-10" />
      <p className="ml-4 text-lg">View All Bikes</p>
    </div>
    <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400">
      <FaMotorcycle className="h-10 w-10" />
      <p className="ml-4 text-lg">Filter Bikes</p>
    </div>
  </>
);

export default MyBikeListing;
