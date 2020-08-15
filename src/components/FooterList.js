import React from "react";
import Whiskey from "../assets/whiskey.svg";
import WishList from "../assets/list.svg";
import Camera from "../assets/camera.svg";
import "./FooterList.css";

function FooterList({ children, href, src, alt }) {
  return (
    <div className="footer">
      <a className="footer__icon" href={href}>
        <img src={Whiskey} alt="Your Whiskeys" />
      </a>
      <span className="footer__text">Your Whiskeys</span>
      <a className="footer__icon" href={href}>
        <img src={WishList} alt="Wish List" />
        <span className="footer__icon__badge"></span>
      </a>
      <span className="footer__text">Wish List</span>
      <a className="footer__icon" href={href}>
        <img src={Camera} alt="Camera" />
      </a>
      <span className="footer__text">Scan</span>
    </div>
  );
}

export default FooterList;
