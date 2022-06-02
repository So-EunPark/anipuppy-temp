import React from "react";
// import apple_store from "../resources/images/apple-brands.svg";
// import google_play from "../resources/images/google-play-brands.svg";
import down_arrow from "../resources/images/down-arrow.png";

import apple_store from "../resources/images/applekorea.png";
import google_play from "../resources/images/googleplay.png";

const MainSection = (props) => {
  console.log(props.nowMediaQuery);
  const nowMediaQuery = props.nowMediaQuery;
  // if (nowMediaQuery == )

  return (
    <section className="page">
      <div className="main_section">
        <div className="slogan">
          <h3 className="slogan_h3">반려동물과 반려인의 종합 소셜 플랫폼</h3>
          <h2 className="slogan_h2">모든 반려동물 여기 모여라</h2>
          <h1 className="slogan_h1">애니퍼피</h1>
        </div>

        <div className="buttons">
          <button className="app_install">
            <img src={apple_store} alt="app-store-button" />
            App Store
          </button>
          <button className="app_install">
            <img src={google_play} alt="google-play-button" />
            Google Play
          </button>
        </div>
        <img className="arrow" src={down_arrow}></img>
      </div>
    </section>
  );
};

export default MainSection;
