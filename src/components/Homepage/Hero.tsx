import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "/hero2.jpeg";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/bike-listing?filterBy=${filterBy}&searchTerm=${searchTerm}`);
  };

  return (
    <div className="relative w-full h-[100vh] bg-gradient text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background Image"
          className="object-cover object-bottom w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full">
        <div className="mt-auto mb-[25%] md:mb-[15%] w-full max-w-md mx-auto text-center ">
          <p className="text-xl text-gray-300 mb-4">
            Discover amazing rides that awaits you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-white/20 rounded-none overflow-hidden justify-between">
              <input
                className="text-base bg-transparent text-white/80 flex-grow outline-none px-2"
                type="text"
                placeholder="Search for your bike"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="ms:flex items-center rounded-none mx-auto">
                <select
                  id="Com"
                  className="text-sm text-gray-800 outline-none bg-white/50 border-2 border-white/10 px-6 py-2.5 rounded-none"
                  value={filterBy}
                  onChange={handleFilterChange}
                >
                  <option value="name">Name</option>
                  <option value="brand">Brand</option>
                  <option value="model">Model</option>
                </select>
                <button
                  type="submit"
                  className="bg-custom-green text-white text-base rounded-none px-4 py-2 border border-custom-green"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
