import React from "react";
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
    font-size: 0.9em;
    color: black;
    opacity: 0.7;
    padding-top: 3px;
  }

  img {
    width: 2em;
    height: 2em;
    opacity: 0.7;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    text-decoration: none;
    padding-bottom: 4px;
  }
`;

function StyledFooter({ children, href, src, alt }) {
  return (
    <Footer>
      <Link to="/home">
        <img src={HomeSrc} alt="home" />
        <span>Tavern</span>
      </Link>
      <Link to="/my-whiskies">
        <img src={WhiskieSrc} alt="my whiskies" />
        {/* <span className="footer__icon__badge">3</span> */}
        <span>Your Whiskies</span>
      </Link>
      <Link to="/foto">
        <img src={CameraSrc} alt="Camera" />
        <span>Scan</span>
      </Link>
    </Footer>
  );
}

export default StyledFooter;
