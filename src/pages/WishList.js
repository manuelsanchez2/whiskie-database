import React from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";
import { useQuery } from "react-query";

const fetchMyWhiskey = async () => {
  const response = await fetch("http://localhost:3333/favourites");
  return response.json();
};

function WishList(props) {
  const {} = useQuery("whiskies", fetchMyWhiskey);
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
