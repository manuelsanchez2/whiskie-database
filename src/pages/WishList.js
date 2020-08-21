import React from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";
import { useQuery } from "react-query";
import WhiskeyListItemInfoButton from "../components/list/WhiskeyListItemInfoButton";

const fetchMyWhiskie = async () => {
  const response = await fetch("http://localhost:3333/whiskie");
  return response.json();
};

function WishList(props) {
  const { data, status } = useQuery("whiskie", fetchMyWhiskie);
  console.log(data);

  // MY WHISKIES

  return (
    <>
      <StyledHeader>
        <HeaderTitle>STARRED WHISKIES</HeaderTitle>
        <HeaderImage />
      </StyledHeader>
      <main>
        {/* <p>{status}</p> */}
        {status === "loading" && <div>Your whiskies are being loaded...</div>}
        {status === "error" && <div>Error fetching data</div>}
        {status === "success" && (
          <div>
            {data.map((whiskie) => (
              <div>{whiskie.title}</div>
            ))}
          </div>
        )}
      </main>
      <StyledFooter />
    </>
  );
}

export default WishList;
