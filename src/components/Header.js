import React from "react";
import Sociallink from "./socialLink";
import anipuppy_logo_img from "../resources/images/anipuppy_logo_img.png";

const Header = (props) => {
  const nowMediaQuery = props.nowMediaQuery;

  return (
    <div className="header">
      <div className="navbar_left anipuppy_logo" alt="애니퍼피">
        <img className="anipuppy_logo_img" src={anipuppy_logo_img}>
          {/* <a href="/"></a> */}
        </img>
        {/* <h1>애니퍼피</h1> */}
      </div>
      <div className="navbar_right">
        {nowMediaQuery != "pc" && (
          <button className="app_install" alt="앱 다운로드">
            앱 다운로드
          </button>
        )}
        <Sociallink />
        {/* {nowMediaQuery == "pc" && <Sociallink />} */}
      </div>
    </div>
  );
};

export default Header;
