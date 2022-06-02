import React from "react";
import Sociallink from "./socialLink";
import iscilab_logo_black from "../resources/images/iscilab_logo_black.png";

const Footer = (props) => {
  const nowMediaQuery = props.nowMediaQuery;
  console.log(nowMediaQuery);
  return (
    <div className={nowMediaQuery == "mobile" ? "mobile footer" : "footer"}>
      <div className="footer_title">
        <h1 className="slogan">모든 반려동물 여기모여라</h1>
        <h1 className="anipuppy_logo">애니퍼피</h1>
        <button className="app_install">앱 다운로드</button>
        <Sociallink />
      </div>

      <div className="company_info">
        <img className="iscilab_logo_img" src={iscilab_logo_black} alt="" />
        <br />
        <span>(주)아이싸이랩</span>
        <br />
        <span>서울특별시 관악구 관악로 122 101,502,602호</span>
        <br />
        <span>
          회사 홈페이지 <a href="https://www.iscilab.com">www.iscilab.com</a>
        </span>
        <br />
        <span>사업자 번호 119-81-81005</span>
        <br />
        <span>대표 최형인</span>
        <br />
        <span>TEL 02-875-3861 </span>
        <br />
        <span>FAX 02-875-3862 </span>
      </div>
    </div>
  );
};

export default Footer;
