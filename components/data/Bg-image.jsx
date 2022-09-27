import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Bgimage = () => {
  const mapper = ["bg", "student", "student-2", "student-3", "student-4"];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#00000080",
          height: "50px",
          width: "50px",
          borderRadius: "50px",
          marginRight: "15%",
          padding: "15px 15px",
          zIndex: "100",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#00000080",
          height: "50px",
          width: "50px",
          borderRadius: "50px",
          marginLeft: "15%",
          padding: "15px 15px",
          zIndex: "100",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" mb-10">
      <Slider {...settings} className="z-10   ">
        <div
          data-aos="fade-down-right"
          data-aos-delay="300"
          className={`bg-[url(/bg.jpeg)] flex flex-col justify-center bg`}
        ></div>
        <div
          className={`bg-[url(/student.jpeg)] flex flex-col justify-center bg`}
        ></div>
        <div
          className={`bg-[url(/student-2.jpeg)] flex flex-col justify-center bg`}
        ></div>
        <div
          className={`bg-[url(/student-3.jpeg)] flex flex-col justify-center bg`}
        ></div>
        <div
          className={`bg-[url(/student-4.jpeg)] flex flex-col justify-center bg`}
        ></div>
      </Slider>
    </div>
  );
};

export default Bgimage;
