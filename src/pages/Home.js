import React from "react";
import WhiskeyList from "../components/WhiskeyList";
import FooterList from "../components/StyledFooter";
import HeaderList from "../components/HeaderList";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";

function Home(props) {
  const [query, setQuery] = React.useState("");

  return (
    <div>
      <StyledHeader>
        <HeaderList
          whiskyQuery={query}
          onWhiskyQueryChange={(whiskyQuery) => setQuery(whiskyQuery)}
        />
      </StyledHeader>
      <main className="app__borders">
        <WhiskeyList query={query} />
      </main>
      <StyledFooter />
    </div>
  );
}

export default Home;
