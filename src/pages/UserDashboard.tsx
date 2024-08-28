import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaMotorcycle, FaCalendarCheck } from "react-icons/fa";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const menuItems = [
  { name: "Profile", path: "profile", icon: <FaUser className="w-6 h-6" /> },
  {
    name: "Bike Listing",
    path: "bike-listing",
    icon: <FaMotorcycle className="w-6 h-6" />,
  },
  {
    name: "My Rentals",
    path: "my-rentals",
    icon: <FaCalendarCheck className="w-6 h-6" />,
  },
];
// const location = useLocation();

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <section className="relative max-w-screen bg-black/10 mx-4 md:mx-12">
        <nav className="z-20 absolute top-0 left-0 right-0 flex justify-around items-center gap-8 py-4 shadow-lg backdrop-blur-lg bg-gray-700/20">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={`/user/dashboard/${item.path}`}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 cursor-pointer ${
                  isActive
                    ? "text-custom-green border-transparent"
                    : "text-gray-400 hover:text-custom-green border-transparent"
                } border-b-2`
              }
            >
              {item.icon}
              <small className="text-center text-xs md:text-sm font-medium">
                {item.name}
              </small>
            </NavLink>
          ))}
        </nav>

        <main className="pt-28 md:pt-20 lg:pt-24 py-8 md:p-8 h-screen">
          <Outlet />
        </main>
      </section>

      <Footer />
    </>
  );
};

export default UserDashboard;
