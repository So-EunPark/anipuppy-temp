import React from "react";
import facebook from "../resources/images/facebook-square-brands.svg";
import instagram from "../resources/images/instagram-brands.svg";
import youtube from "../resources/images/youtube-brands.svg";

const Sociallink = () => {
  return (
    <ul className="social_link">
      <li>
        <img src={facebook} alt="facebook" className="social_icon" />
      </li>
      <li>
        <img src={instagram} alt="facebook" className="social_icon" />
      </li>
      <li>
        <img src={youtube} alt="facebook" className="social_icon" />
      </li>
      {/* <li>
        <img src={facebook} alt="facebook" className="social_icon" />
      </li> */}
    </ul>
  );
};

export default Sociallink;
