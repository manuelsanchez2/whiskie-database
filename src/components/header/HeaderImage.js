import React from "react";
import styled from "@emotion/styled";
import logoSrc from "../../assets/logo.png";

const Image = styled.img`
  width: 5em;
  height: 5em;
  object-fit: contain;
`;

function HeaderImage({ src, alt }) {
  return <Image src={logoSrc} alt="logo" />;
}

export default HeaderImage;
