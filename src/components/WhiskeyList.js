import React from "react";
import List from "./List";
import ListItems from "./ListItems";
import ListItemImage from "./ListItemImage";
import ListItemText from "./ListItemText";
import logoSrc from "../assets/logo.png";

function WhiskeyList({ children }) {
  return (
    <List>
      <ListItems>
        <ListItemImage src={logoSrc} alt="Whiskeymaniacs logo" />
        <ListItemText
          title={"Hola"}
          description={"GeilerWhisky"}
        ></ListItemText>
      </ListItems>
    </List>
  );
}
export default WhiskeyList;
