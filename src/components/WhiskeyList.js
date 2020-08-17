import React, { useState, useEffect } from "react";
import List from "./List";
import ListItems from "./ListItems";
import ListItemImage from "./ListItemImage";
import ListItemText from "./ListItemText";
import fetchWhiskeys from "../api/fetchWhiskeys";
import LoadingScreen from "./LoadingScreen";
import ExpandableInfo from "./ExpandableInfo";
import "./WhiskeyList.css";
import whiskeySrc from "../assets/whiskey.svg";

function WhiskeyList({ search }) {
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
      const newWhiskeys = await fetchWhiskeys(search);
      setWhiskeys(newWhiskeys);
      setIsLoading(false);
    }
    showWhiskeys();
  }, [search]);

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
