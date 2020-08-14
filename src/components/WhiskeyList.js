import React, { useState, useEffect } from "react";
import List from "./List";
import ListItems from "./ListItems";
import ListItemImage from "./ListItemImage";
import ListItemText from "./ListItemText";
import fetchWhiskeys from "../api/fetchWhiskeys";

function WhiskeyList({ children }) {
  const [whiskeys, setWhiskeys] = useState(null);

  useEffect(() => {
    async function showWhiskeys() {
      const newWhiskeys = await fetchWhiskeys();

      setWhiskeys(newWhiskeys);
    }
    showWhiskeys();
  }, []);

  return (
    <List>
      {whiskeys?.map((whiskey) => (
        <ListItems key={whiskey.id}>
          <ListItemImage
            src={whiskey.img_url}
            alt={`Picture of ${whiskey.title}`}
          />
          <ListItemText
            title={whiskey.title}
            description={whiskey.description}
          />
        </ListItems>
      ))}
    </List>
  );
}
export default WhiskeyList;
