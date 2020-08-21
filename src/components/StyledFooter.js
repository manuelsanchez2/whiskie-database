import React from "react";
import Whiskey from "../assets/whiskey.svg";
import WishList from "../assets/list.svg";
import Camera from "../assets/camera.svg";
// import "./FooterList.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 20px 5px 5px;
  background: var(--bg-gradient);

  span {
    color: black;
  }

  img {
    width: 1.7em;
    height: 1.7em;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    text-decoration: none;
  }
`;

function StyledFooter({ children, href, src, alt }) {
  return (
    <Footer>
      <Link to="/home">
        <img src={Whiskey} alt="Your Whiskeys" />
        <span>Whiskeys</span>
      </Link>
      <Link to="/wish-list">
        <img src={WishList} alt="Wish List" />
        {/* <span className="footer__icon__badge">3</span> */}
        <span>Wish List</span>
      </Link>
      <Link to="/camera">
        <img src={Camera} alt="Camera" />
        <span>Scan</span>
      </Link>
    </Footer>
  );
}

export default StyledFooter;
