import { Link } from "react-router-dom";
import { TBike } from "../types/bike";

// const imageUrl =
//   "https://images.unsplash.com/photo-1525013066836-c6090f0ad9d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww";

type Props = {
  bike: TBike;
};

const SingleBike: React.FC<Props> = ({ bike }) => {
  return (
    <div className="mx-auto mt-0 w-[270px] transform overflow-hidden bg-white dark:bg-black/80 shadow-md duration-300 hover:shadow-lg">
      <img
        className="h-44 w-full  hover:scale-110 transition-transform duration-500 object-cover object-center"
        src={bike.image}
        alt={bike.name}
      />
      <div className=" px-2 flex justify-between items-baseline border-b border-custom-green/60">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {bike.name}
        </h2>
        <div className="flex items-center mt-4 space-x-2">
          <span className="px-2 py-1 bg-custom-green text-white text-xs rounded-full ml-auto">
            {bike.brand}
          </span>
          <span className="px-2 py-1 bg-custom-green text-white text-xs rounded-full ml-auto">
            {bike.model}
          </span>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex justify-between items-center">
          <p className="mr-2 text-lg font-semibold text-white/80 ">
            ${bike.pricePerHour.toFixed(2)}
          </p>

          <Link
            to={`../bike-details/${bike._id}`}
            className="relative px-4 py-1 text-sm rounded-none bg-white isolation-auto z-10 border border-gray-900 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-custom-green before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBike;
