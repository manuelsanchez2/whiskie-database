import React from "react";
import Whiskey from "../assets/whiskey.svg";
import WishList from "../assets/list.svg";
import Camera from "../assets/camera.svg";
import "./FooterList.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  display: grid;
  place-items: center;
  border-radius: 0 20px 5px 5px;
  background: var(--bg-gradient);
`;

function StyledFooter({ children, href, src, alt }) {
  return (
    <Footer>
      <Link className="footer__icon" to="/home">
        <img src={Whiskey} alt="Your Whiskeys" />
      </Link>
      <span className="footer__text">Your Whiskeys</span>
      <Link className="footer__icon" to="/wish-list">
        <img src={WishList} alt="Wish List" />
        <span className="footer__icon__badge">3</span>
      </Link>
      <span className="footer__text">Wish List</span>
      <Link className="footer__icon" to="/camera">
        <img src={Camera} alt="Camera" />
      </Link>
      <span className="footer__text">Scan</span>
    </Footer>
  );
}

export default StyledFooter;
