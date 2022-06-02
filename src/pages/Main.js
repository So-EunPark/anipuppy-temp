import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import { useMediaQuery } from "react-responsive";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../resources/styles/swiper.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

// import components
import Footer from "../components/Footer";
import Header from "../components/Header";

import MainSection from "../sections/mainSection";
import Missing from "../sections/missing";
import Three from "../sections/three";
import Four from "../sections/four";
import Five from "../sections/Five";
import Pic from "../sections/pic";

const Main = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const nowMediaQuery = isPc
    ? "pc"
    : isTablet
    ? "tablet"
    : isMobile
    ? "mobile"
    : "";

  return (
    <>
      <Header nowMediaQuery={nowMediaQuery} />
      {/* <div>
        {isPc && <p>HI PC</p>}
        {isTablet && <p>HI Tablet</p>}
        {isMobile && <p>HI Mobile</p>}
      </div> */}
      <MainSection nowMediaQuery={nowMediaQuery} />
      <Missing nowMediaQuery={nowMediaQuery} />
      <Three nowMediaQuery={nowMediaQuery} />
      <Four nowMediaQuery={nowMediaQuery} />
      <Five nowMediaQuery={nowMediaQuery} />
      {/* <Pic nowMediaQuery={nowMediaQuery} /> */}
      <Footer nowMediaQuery={nowMediaQuery} />

      <div className="body"></div>
    </>
  );
};

export default Main;
