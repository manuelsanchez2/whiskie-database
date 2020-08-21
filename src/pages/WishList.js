import React from "react";
import StyledHeader from "../components/StyledHeader";

function WishList(props) {
  return (
    <div>
      <StyledHeader>
        <h2>STARRED WHISKIES</h2>
      </StyledHeader>
      <main>
        <p>Here you have your wines</p>
      </main>
    </div>
  );
}

export default WishList;
