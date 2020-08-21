import React from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";

function WishList(props) {
  return (
    <>
      <StyledHeader>
        <HeaderTitle>STARRED WHISKIES</HeaderTitle>
        <HeaderImage />
      </StyledHeader>
      <main>
        <p>Here you have your whiskies</p>
      </main>
      <StyledFooter />
    </>
  );
}

export default WishList;
