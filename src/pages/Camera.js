import React from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";

function Camera(props) {
  return (
    <>
      <StyledHeader>
        <HeaderTitle>Tell me the Whiskie</HeaderTitle>
        <HeaderImage />
      </StyledHeader>
      <main>
        <p>Camera functions in progress...</p>
      </main>
      <StyledFooter />
    </>
  );
}

export default Camera;
