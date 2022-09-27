import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Navigation = () => {
  //nav
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [display, setDisplay] = useState(false);
  const changeNav = () => {
    if (showMobileNav) {
      setDisplay(true);
      setTimeout(() => {
        setShowMobileNav((prev) => !prev);
      }, 4000);
    } else {
      setDisplay(false);
      setShowMobileNav((prev) => !prev);
    }
  };
  //scroll
  const [showScroll, setScroll] = useState(false);
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
  var show = typeof window !== "undefined" && window.pageYOffset;
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        //console.log("main", show);
        let data = window.pageYOffset;
        if (data > 30) {
          setScroll(true);
          //console.log("true", showScroll, show);
        }
        if (data < 30) {
          setScroll(false);
          //console.log(showScroll, show);
        }
      });
      return window.removeEventListener("scroll", () => {
        console.log("removed");
      });
    }
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="md:sticky top-0 z-[99999999] w-[100vw] ">
      <div
        data-aos="zoom-in-down"
        className="bg-orange-700   w-full py-[25px] justify-between md:px-[72px] px-4 flex "
      >
        <Link href="/">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" nav-header text-[30px] font-medium italic text-white cursor-pointer "
          >
            Learn Qiuckly
          </p>
        </Link>
        <img
          src="/logo.jpeg"
          alt="logo"
          className="logo-img hidden md:block w-[50px] h-[50px]"
        />
        <div className="hidden md:flex ">
          <a href="#home" rel="noreferrer">
            <p
              data-aos="fade-right"
              data-aos-delay="120"
              className="nav-text text-[15px] font-semibold italic m-4 cursor-pointer"
            >
              Home
            </p>
          </a>
          <a href="#about" rel="noreferrer">
            <p
              data-aos="fade-right"
              data-aos-delay="140"
              className=" nav-text text-[15px] font-semibold italic m-4 cursor-pointer"
            >
              About Us
            </p>
          </a>
          <a href="#register">
            <p
              data-aos="fade-left"
              data-aos-delay="160"
              className=" nav-text text-[15px] font-semibold italic m-4 cursor-pointer"
            >
              Register
            </p>
          </a>
          <a href="#recent">
            <p
              data-aos="fade-left"
              data-aos-delay="180"
              className=" nav-text text-[15px] font-semibold italic m-4 cursor-pointer"
            >
              Recent Events
            </p>
          </a>
        </div>
        {!showMobileNav && (
          <AiOutlineMenu
            onClick={changeNav}
            className="md:hidden w-[30px] mt-2 cursor-pointer h-[30px] text-white"
          />
        )}
        {showMobileNav && (
          <GiCancel
            onClick={changeNav}
            className="md:hidden w-[30px] mt-2 cursor-pointer h-[30px] text-white"
          />
        )}
      </div>
      {showMobileNav && (
        <div className="absolute right-0 z-50">
          <a href="#home" rel="noreferrer">
            <div
              onClick={changeNav}
              className={`w-full bg-orange-900 p-4 ${
                showMobileNav && "mobile-nav-home"
              }  ${display && "mobile-nav-home-"}`}
            >
              <p className="text-white font-extrabold italic text-center m-1 ">
                Home
              </p>
            </div>
          </a>
          <a href="#about" rel="noreferrer">
            <div
              onClick={changeNav}
              className={`w-full bg-orange-900 p-4 ${
                showMobileNav && "mobile-nav-about"
              }  ${display && "mobile-nav-about-"}`}
            >
              <p className="text-white font-extrabold italic text-center m-1">
                About Us
              </p>
            </div>
          </a>
          <a href="#register" rel="noreferrer">
            <div
              onClick={changeNav}
              className={`w-full bg-orange-900 p-4 
          ${showMobileNav && "mobile-nav-register"}  ${
                display && "mobile-nav-register-"
              }`}
            >
              <p className="text-white font-extrabold italic text-center m-1">
                Register
              </p>
            </div>
          </a>
          <a href="#recent" rel="noreferrer">
            <div
              onClick={changeNav}
              className={`w-full bg-orange-900 p-4 mobile-nav-recent 
          ${showMobileNav && "mobile-nav-recent"}  ${
                display && "mobile-nav-recent-"
              }
          `}
            >
              <p className="text-white font-extrabold italic text-center m-1">
                Recent Events
              </p>
            </div>
          </a>
        </div>
      )}
      {showScroll && (
        <div
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-10 right-10 z-10 opacity-80 bg-gray-500 rounded-full h-[50px] w-[50px]"
        >
          <FaArrowCircleUp className="z-20   overflow-hidden mt-[15px] text-black  ml-[10px] font-bold text-[20px] w-[30px]" />
        </div>
      )}
    </div>
  );
};

export default Navigation;
