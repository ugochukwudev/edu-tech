import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Register = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="register" className="mt-10 mb-10">
      <p
        data-aos="fade-right"
        data-aos-delay="400"
        className="text-[18px] font-bold italic text-center"
      >
        Register
      </p>
      <p
        data-aos="fade-right"
        data-aos-delay="450"
        className=" w-10/12 md:w-6/12 text-base font-medium mr-auto ml-auto "
      >
        At times, good things seems too good to be true and here, we present you
        with an opprtunity to become better at what you do by meeting new people
        who you can grow with daily and also give you an opportunity to make a
        difference .
      </p>
      <div className=" w-10/12 md:w-5/12 ml-auto mr-auto mt-4">
        <button
          data-aos="flip-right"
          data-aos-delay="500"
          className="w-full p-2 rounded-full border-2 border-orange-700 hover:bg-white hover:text-orange-700   bg-orange-700 hover:font-bold text-white text-[18px] font-semibold"
        >
          Join our community
        </button>
      </div>
    </div>
  );
};

export default Register;
