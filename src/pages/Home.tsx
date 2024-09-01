// import { Navbar } from "../components/Navbar";

import Featured from "../components/Homepage/Featured";
import Hero from "../components/Homepage/Hero";
import Testimonial from "../components/Homepage/Testimonial";
import WhyChooseUs from "../components/Homepage/WhyChooseUs";

export const Home = () => {
  return (
    <div className=" w-full mx-auto">
      <Hero />
      <div className="lg:w-11/12 w-full mx-auto">
        <Featured />
        <WhyChooseUs />
        <Testimonial />
      </div>
    </div>
  );
};
