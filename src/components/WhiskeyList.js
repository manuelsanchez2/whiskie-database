import React, { useState, useEffect } from "react";
import ListItems from "./list/ListItems";
import ListItemImage from "./list/ListItemImage";
import ListItemText from "./list/WhiskeyListItemText";
import fetchWhiskeys from "../api/fetchWhiskeys";
import LoadingScreen from "./list/LoadingScreen";
import ExpandableInfo from "./list/ExpandableInfo";
import "./WhiskeyList.css";
import whiskeySrc from "../assets/whiskey.svg";
import styled from "@emotion/styled";

const List = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function WhiskeyList({ query }) {
  const [isLoading, setIsLoading] = useState(false);
  const [whiskeys, setWhiskeys] = useState(null);
  const [open, setOpen] = React.useState(false);

  const showInfo = () => {
    setOpen(!open);
  };

  // function waitFor(time) {
  //   return new Promise((resolve) => setTimeout(resolve, time));
  // }

  useEffect(() => {
    async function showWhiskeys() {
      const newWhiskeys = await fetchWhiskeys(query);
      setWhiskeys(newWhiskeys);
      setIsLoading(false);
    }
    showWhiskeys();
  }, [query]);

  if (isLoading || whiskeys === null) {
    return <LoadingScreen />;
  }

  return (
    <List>
      {whiskeys?.map((whiskey) => (
        <ListItems key={whiskey.id}>
          <ListItemImage src={whiskeySrc} alt={`Picture of ${whiskey.title}`} />
          <ListItemText
            title={whiskey.title}
            description={whiskey.description}
          />
          <button className="infoButton" onClick={showInfo}>
            More info
          </button>
          {open && (
            <ExpandableInfo
              title={whiskey.title}
              price={whiskey.price}
              rating={whiskey.rating}
              region={whiskey.region}
            />
          )}
        </ListItems>
      ))}
    </List>
  );
}
export default WhiskeyList;
