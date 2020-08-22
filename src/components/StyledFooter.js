import React from "react";
import Whiskey from "../assets/whiskey.svg";
import WishList from "../assets/list.svg";
import Camera from "../assets/camera.svg";
import WhiskieSrc from "../assets/whiskie.png";
import HomeSrc from "../assets/home.png";
import CameraSrc from "../assets/foto.svg";

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  background: var(--bg-gradient);

  img:hover {
    opacity: 1;
    background: #794a08;
    border-radius: 50%;
  }

  a:visited {
    opacity: 1;
    background: #794a08;
    border-radius: 50%;
  }

  a span {
    color: black;
    opacity: 0.7;
  }

  img {
    width: 1.7em;
    height: 1.7em;
    opacity: 0.5;
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
        <img src={HomeSrc} alt="home" />
        <span>The Tavern</span>
      </Link>
      <Link to="/my-whiskies">
        <img src={WhiskieSrc} alt="my whiskies" />
        {/* <span className="footer__icon__badge">3</span> */}
        <span>Your Whiskies</span>
      </Link>
      <Link to="/camera">
        <img src={CameraSrc} alt="Camera" />
        <span>Scan</span>
      </Link>
    </Footer>
  );
}

export default StyledFooter;
