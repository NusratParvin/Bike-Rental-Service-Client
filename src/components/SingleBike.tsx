import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const imageUrl = "https://via.placeholder.com/150"; // Replace with actual bike image URL if available

const SingleBike = ({ bike }) => {
  return (
    <div className="mx-auto mt-0 w-[270px] transform overflow-hidden bg-white dark:bg-black/80 shadow-md duration-300 hover:shadow-lg">
      <img
        className="h-44 w-full  hover:scale-110 transition-transform duration-500 object-cover object-center"
        src={imageUrl}
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
        {/* <p className="mb-2 text-sm dark:text-gray-100 text-gray-700">
          {bike.description}
        </p> */}
        <div className="flex justify-between items-center">
          <p className="mr-2 text-lg font-semibold text-white/80 ">
            ${bike.pricePerHour.toFixed(2)}
          </p>

          <button className="relative px-4 py-1 text-sm rounded-none bg-white isolation-auto z-10 border before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-custom-green before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBike;
