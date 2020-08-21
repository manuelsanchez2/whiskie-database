import React from "react";
import WhiskeyList from "../components/WhiskeyList";
import FooterList from "../components/FooterList";
import HeaderList from "../components/HeaderList";
import StyledHeader from "../components/StyledHeader";

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
      <footer>
        <FooterList />
      </footer>
    </div>
  );
}

export default Home;
