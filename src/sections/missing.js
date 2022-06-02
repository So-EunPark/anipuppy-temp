import React from "react";
import iphone from "../resources/images/iphone.png";

const Missing = () => {
  {
    /* <img className="two_img" src={iphone} alt="목업" />
            <img className="two_img" src={iphone} alt="목업" />
            <img className="two_img" src={iphone} alt="목업" /> */
  }
  return (
    <section className="section section_1">
      <div className="contents ">
        <div className="text_part left_align">
          <h1>
            내새꾸 잃어버릴 걱정, <br />
            <strong className="line">애니퍼피가 덜어드릴게요!</strong>
          </h1>
        </div>
        <div className="img_container">
          <div className=" description">
            <div className="screenshot">image</div>
            <p className="subtitle">
              비문등록과 함께, 내 반려동물에 관한 정보들을 <br />
              상세하게 기록해서 유기 유실을 방지해요
            </p>
          </div>
          <div className=" description right_pic">
            <div className="screenshot">image</div>
            <p className="subtitle">
              기존의 동물 등록번호와 함께 연동이 가능해요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missing;
