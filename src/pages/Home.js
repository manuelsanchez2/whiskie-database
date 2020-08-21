import React from "react";
import WhiskeyList from "../components/WhiskeyList";
import FooterList from "../components/StyledFooter";
import HeaderList from "../components/HeaderList";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";

function Home(props) {
  const [query, setQuery] = React.useState("");

  return (
    <>
      <StyledHeader>
        <HeaderList
          whiskyQuery={query}
          onWhiskyQueryChange={(whiskyQuery) => setQuery(whiskyQuery)}
        />
      </StyledHeader>
      <main>
        <WhiskeyList query={query} />
      </main>
      <StyledFooter />
    </>
  );
}

export default Home;
