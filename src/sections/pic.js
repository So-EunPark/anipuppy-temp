import React from "react";
import pic5 from "../resources/images/pic5.jpg";
import pic2 from "../resources/images/pic2.jpg";

const pic = () => {
  return (
    <div className="section section_pic">
      <div className="upside">
        <img src={pic5} alt="반려동물과 반려인" />
        <h1>가족모두 함께 강아지 육아일기를 기록해요</h1>
      </div>
      <div className="downside">
        <img className="pic2" src={pic2} alt="반려동물과 반려인" />
      </div>
    </div>
  );
};

export default pic;
