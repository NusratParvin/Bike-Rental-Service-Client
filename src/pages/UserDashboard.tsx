import { useState } from "react";

import { FaUser, FaMotorcycle, FaCalendarCheck } from "react-icons/fa";
import MyProfile from "../components/MyProfile";
import MyRentals from "../components/MyRentals";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import BikeListing from "../components/BikeListing";

const tabs = [
  {
    name: "Profile",
    icon: <FaUser className="mr-2" />,
    component: <MyProfile />,
  },
  {
    name: "Bike Listing",
    icon: <FaMotorcycle className="mr-2" />,
    component: <BikeListing />,
  },
  {
    name: "My Rentals",
    icon: <FaCalendarCheck className="mr-2" />,
    component: <MyRentals />,
  },
];

const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Profile");

  return (
    <>
      <Navbar />
      <section>
        {/* Header */}
        <header className="relative px-10 md:px-20 flex items-center justify-center ">
          <ul className="flex flex-wrap justify-center items-center gap-8">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className="py-1 px-3 relative cursor-pointer uppercase text-sm flex items-center"
                onClick={() => setSelectedTab(tab.name)}
              >
                {tab.icon}
                {tab.name}
                <div
                  className={`absolute w-full h-[2px] bg-custom-green left-0 -bottom-1 ${
                    selectedTab === tab.name ? "block" : "hidden"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </header>

        {/* Main Content */}
        <main className="mx-auto p-8 lg:py-6 lg:px-20 ">
          {tabs.find((tab) => tab.name === selectedTab)?.component}
        </main>
      </section>
      <Footer />
    </>
  );
};

export default UserDashboard;
