import React, { useState, useEffect } from "react";
import WhiskeyListItems from "./list/WhiskeyListItems";
import fetchWhiskeys from "../api/fetchWhiskeys";
import LoadingScreen from "./list/LoadingScreen";
import ExpandableInfo from "./list/ExpandableInfo";
import "./WhiskeyList.css";
import whiskeySrc from "../assets/whiskey.svg";
import styled from "@emotion/styled";
import WhiskeyListItemImage from "./list/WhiskeyListItemImage";
import WhiskeyListItemText from "./list/WhiskeyListItemText";
import WhiskeyListItemInfoButton from "./list/WhiskeyListItemInfoButton";
import WhiskeyListItemFavButton from "./list/WhiskeyListItemFavButton";

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

  function handleWhiskieListItemInfoButtonClick() {
    setOpen(!open);
    console.log(open);
  }

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
        <WhiskeyListItems key={whiskey.id}>
          <WhiskeyListItemImage
            src={whiskeySrc}
            alt={`Picture of ${whiskey.title}`}
          />
          <WhiskeyListItemText
            title={whiskey.title}
            description={whiskey.description}
          />
          <WhiskeyListItemInfoButton
            onClick={() => handleWhiskieListItemInfoButtonClick()}
          >
            More info
          </WhiskeyListItemInfoButton>
          {open && (
            <ExpandableInfo
              title={whiskey.title}
              price={whiskey.price}
              rating={whiskey.rating}
              region={whiskey.region}
            />
          )}
          <WhiskeyListItemFavButton>Add to favourite</WhiskeyListItemFavButton>
        </WhiskeyListItems>
      ))}
    </List>
  );
}
export default WhiskeyList;
