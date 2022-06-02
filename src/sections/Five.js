import React from "react";
import iphone from "../resources/images/iphone.png";

const Five = () => {
  return (
    <section className="section section_4">
      <div className="contents">
        <div className="right_align">
          <h1>
            우리가족 모두! <br />
            <strong className="line">강아지 육아일기를 기록해요</strong>
          </h1>
        </div>
        <div className=" description">
          <div className="screenshot">image</div>
          <p className="subtitle">
            울 막내 관리는 엄마만? No! <br />
            가족 구성원들과 연동해 <br />
            육아일기를 함께 작성할 수 있어요
          </p>
        </div>

        {/* <div class="images"></div> */}
      </div>
    </section>
  );
};

export default Five;
