import { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaChevronDown,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { LuBike } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout, useCurrentUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { FlipLink } from "../utils/flipLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUser = useAppSelector(useCurrentUser);
  // console.log(isUser);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className=" pt-4  pb-2">
      <div className="hidden md:block">
        <div className="grid grid-cols-4 items-center py-2 px-6 border-b border-gray-700">
          {/* Left side (logo) */}
          <div className="flex items-center text-white tracking-wide font-teko">
            <LuBike className="w-7 h-7 mr-2 animate-slide-in" />
            <div className="text-3xl text-custom-green">RideON</div>
          </div>

          {/* Center (menu) */}
          <div className="flex col-span-2 justify-between items-center text-sm px-6">
            <ul className="flex space-x-1 list-none">
              <li className="relative group text-white hover:text-custom-green duration-300 px-4">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-custom-green" : ""
                  }
                >
                  HOME
                </NavLink>
                <span className="absolute left-1/2 -top-5 w-0 h-1 bg-custom-green group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </li>

              <li className="relative group hover:text-custom-green duration-300 px-4">
                <Link
                  to="/services"
                  className="flex items-center justify-between cursor-pointer"
                >
                  SERVICES
                  <span className="absolute left-1/2 -top-5 w-0 h-1 bg-custom-green group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  <FaChevronDown className="ml-2 w-3 h-3" />
                </Link>
                <ul className="absolute z-50 left-0 top-full mt-2 w-40 bg-gray-800 text-white opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-in-out">
                  <li className="px-4 py-2 hover:bg-gray-700 hover:text-custom-green">
                    <Link
                      to="/services/web-development"
                      className="cursor-pointer"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 hover:text-custom-green">
                    <Link
                      to="/services/app-development"
                      className="cursor-pointer"
                    >
                      App Development
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 hover:text-custom-green">
                    <Link
                      to="/services/seo-optimization"
                      className="cursor-pointer"
                    >
                      SEO Optimization
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group hover:text-custom-green duration-300 px-4">
                <Link to="/my-rentals" className="cursor-pointer">
                  MY RENTALS
                </Link>
                <span className="absolute left-1/2 -top-5 w-0 h-1 bg-custom-green group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </li>
              <li className="relative group text-white hover:text-custom-green duration-300 px-4">
                <NavLink
                  to={`/${isUser?.role}/dashboard`}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-custom-green" : ""
                  }
                >
                  DASHBOARD
                </NavLink>
                <span className="absolute left-1/2 -top-5 w-0 h-1 bg-custom-green group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </li>

              <li className="relative group hover:text-custom-green duration-300 px-4">
                <Link to="/contacts" className="cursor-pointer">
                  CONTACTS
                </Link>
                <span className="absolute left-1/2 -top-5 w-0 h-1 bg-custom-green group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </li>
            </ul>
          </div>

          {/* Right side (Icons) */}
          <div className="flex justify-end items-end text-white">
            <FaShoppingCart className="w-4 h-4 mx-3" />
            <AnimatePresence>
              {isUser ? (
                <motion.div
                  key="logout"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onClick={() => dispatch(logout())}
                  className="bg-transparent text-white px-1 py-0 hover:opacity-90 border-transparent hover:border-b hover:border-custom-green text-sm cursor-pointer transition-opacity"
                >
                  LOGOUT
                </motion.div>
              ) : (
                <motion.div
                  key="auth-options"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex items-end  "
                >
                  <FlipLink href="/login">login</FlipLink>
                  <FlipLink href="/signup">signup</FlipLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation Links */}
      </div>

      {/* Responsive Navbar for Medium and Smaller Devices */}
      <div className="md:hidden  grid grid-cols-3 items-center px-2 ">
        {/* Left side (User and Cart Icons) */}
        <div className="flex items-center space-x-1 text-white">
          <FaUser className="w-5 h-5" />
          <FaShoppingCart className="w-5 h-5" />
        </div>

        {/* Center (Logo) */}
        <div className="flex justify-center items-center text-white tracking-wide font-teko ">
          <LuBike className="w-7 h-7 mr-2" />
          <div className="text-3xl">RideON</div>
        </div>

        {/* Right side (Hamburger Menu) */}
        <div
          className="flex justify-end text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes
              className="w-6 h-6 
           transform   
           transition-transform duration-500 ease-in-out opacity-100"
            />
          ) : (
            <FaBars
              className="w-6 h-6 
           transform  
           transition-transform duration-500 ease-in-out opacity-100"
            />
          )}
        </div>
      </div>

      {/* Slide-out Menu responsive */}
      <div
        className={`md:hidden fixed top-12 right-0 w-64 h-full bg-teal-950/40 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <ul className="flex flex-col space-y-4 mt-16 px-6 ">
          <li className="relative group text-white hover:text-custom-green duration-300 px-4">
            <Link to="/" className="cursor-pointer">
              HOME
            </Link>
          </li>

          <li className="relative group hover:text-custom-green duration-300 px-4   ">
            <span className="flex items-center  ">
              <Link to="/services" className="cursor-pointer">
                SERVICES{" "}
              </Link>

              <FaChevronDown className="ml-2" onClick={toggleSubmenu} />
            </span>
            <ul
              className={` pl-4 space-y-2 text-white overflow-hidden ${
                isSubmenuOpen
                  ? " py-4 max-h-60 opacity-100"
                  : "max-h-0 opacity-0"
              } transform origin-top transition-all duration-700 ease-in-out`}
            >
              <li className="hover:bg-gray-800 hover:text-custom-green px-2 py-1">
                <Link to="/services/web-development" className="cursor-pointer">
                  Web Development
                </Link>
              </li>

              <li className="hover:bg-gray-800 hover:text-custom-green px-2 py-1">
                <Link to="/services/app-development" className="cursor-pointer">
                  App Development
                </Link>
              </li>
              <li className="hover:bg-gray-800 hover:text-custom-green px-2 py-1">
                <Link
                  to="/services/seo-optimization"
                  className="cursor-pointer"
                >
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group hover:text-custom-green duration-300 px-4  ">
            <Link to="/my-rentals" className="cursor-pointer">
              MY RENTALS
            </Link>
          </li>

          <li className="relative group hover:text-custom-green duration-300 px-4">
            <Link to="/gallery" className="cursor-pointer">
              GALLERY
            </Link>
          </li>

          <li className="relative group hover:text-custom-green duration-300 px-4">
            <Link to="/contacts" className="cursor-pointer">
              CONTACTS
            </Link>
          </li>

          {/* Conditional Rendering for Auth Options */}
          {isUser ? (
            <li className="relative group hover:text-custom-green duration-300 px-4 cursor-pointer">
              <span onClick={handleLogout}>LOGOUT</span>
            </li>
          ) : (
            <>
              <li className="relative group hover:text-custom-green duration-300 px-4">
                <Link to="/login" className="cursor-pointer">
                  LOGIN
                </Link>
              </li>
              <li className="relative group hover:text-custom-green duration-300 px-4">
                <Link to="/signup" className="cursor-pointer">
                  SIGNUP
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
