import React from "react";
import iphone from "../resources/images/iphone.png";

const Three = () => {
  return (
    <section className="section section_2">
      <div className="contents">
        <div className="right_align">
          <h1>
            혹시나 강아지를 잃어버렸나요?
            <br />
            <strong className="line">걱정하지 마세요!</strong>
          </h1>
        </div>
        <div className="description">
          <div className="screenshot">image</div>
          <p className="subtitle">
            비문이 등록된 강아지라면?
            <br />
            비문으로 잃어버린 강아지를 찾을 수 있어요
          </p>
        </div>
        <div className=" description right_pic">
          <div className="screenshot">image</div>
          <p className="subtitle">
            비문이 등록되지 않았다 하더라도,
            <br />
            입력된 강아지에 대한 정보로 강아지를 찾아줘요!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Three;
