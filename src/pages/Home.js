import React from "react";
import WhiskeyList from "../components/WhiskeyList";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderInput from "../components/header/HeaderInput";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";
import StyledMain from "../components/StyledMain";

function Home(props) {
  const [query, setQuery] = React.useState("");

  return (
    <>
      <StyledHeader>
        <HeaderTitle>WhiskeyManiacs</HeaderTitle>
        <HeaderImage />
        <HeaderInput
          whiskyQuery={query}
          onWhiskyQueryChange={(whiskyQuery) => setQuery(whiskyQuery)}
        />
      </StyledHeader>
      <StyledMain>
        <WhiskeyList query={query} />
      </StyledMain>
      <StyledFooter />
    </>
  );
}

export default Home;
