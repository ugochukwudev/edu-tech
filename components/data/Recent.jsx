import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Recent = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="recent" className="mt-10 mb-20">
      <p
        data-aos="fade-right"
        data-aos-delay="400"
        className="text-[18px] font-bold italic text-center"
      >
        Recent Events
      </p>
      <p
        data-aos="fade-right"
        data-aos-delay="450"
        className=" w-10/12 md:w-6/12 text-base font-medium mr-auto ml-auto "
      >
        {
          "Once in a while, we host Events to trigger that in built spirit of a winner in you . Our events don't just provide you with a present but also, shows you your weaknesses thereby, giving you an opportunity to reduce your Achilles heel. click the button below, to be updated  whenever we have an event."
        }
      </p>
      <div className=" w-10/12 md:w-5/12 ml-auto mr-auto mt-4">
        <button
          data-aos="flip-right"
          data-aos-delay="500"
          className="w-full p-2 rounded-full border-2 border-orange-700 hover:bg-white hover:text-orange-700   bg-orange-700 hover:font-bold text-white text-[18px] font-semibold"
        >
          join our community
        </button>
      </div>
    </div>
  );
};

export default Recent;
