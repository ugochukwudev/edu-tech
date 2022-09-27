import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="about" className=" md:mt-0  mb-10">
      <p
        data-aos="fade-right"
        data-aos-delay="400"
        className="text-[18px] font-bold italic text-center"
      >
        About Us
      </p>
      {/* <img
        src="/logo.jpeg"
        alt="logo"
        className=" md:block w-3/12 rounded-full ml-auto mr-auto"
      /> */}
      <p
        data-aos="fade-left"
        data-aos-delay="450"
        className=" w-10/12 md:w-6/12 text-base font-medium mr-auto ml-auto "
      >
        Learn Quickly, is an online educational platform made for those with
        prior knowledge at heart. It's default goal is to make you see the fun
        in education while testing yourself with other people like you. Students
        all over the world are allowed to contest and learn from our amazing
        curriculum. thanks for joining us.
      </p>
    </div>
  );
};

export default About;
