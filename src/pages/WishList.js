import React from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";
import { useQuery } from "react-query";
import LoadingScreen from "../components/list/LoadingScreen";
import WhiskeyListItemText from "../components/list/WhiskeyListItemText";
import WhiskeyListItems from "../components/list/WhiskeyListItems";
import WhiskeyListItemImage from "../components/list/WhiskeyListItemImage";
import whiskeySrc from "../assets/whiskey.svg";

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
      {status === "loading" && <LoadingScreen />}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <StyledHeader>
            <HeaderTitle>Your whiskies</HeaderTitle>
            <HeaderImage />
          </StyledHeader>
          <main>
            {data.map((whiskie) => (
              <>
                <WhiskeyListItems key={whiskie.title}>
                  <WhiskeyListItemImage
                    src={whiskeySrc}
                    alt={`Picture of ${whiskie.title}`}
                  />
                  <WhiskeyListItemText
                    title={whiskie.title}
                    description={whiskie.description}
                    region={whiskie.region}
                  />
                </WhiskeyListItems>
              </>
            ))}
          </main>
          <StyledFooter />
        </>
      )}
    </>
  );
}

export default WishList;
