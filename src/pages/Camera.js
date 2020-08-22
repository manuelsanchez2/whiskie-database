import React from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";
import StyledMain from "../components/StyledMain";

function Camera(props) {
  return (
    <>
      <StyledHeader>
        <HeaderTitle>Tell me the Whiskie</HeaderTitle>
        <HeaderImage />
      </StyledHeader>
      <StyledMain>
        <p>Camera functions in progress...</p>
      </StyledMain>
      <StyledFooter />
    </>
  );
}

export default Camera;
