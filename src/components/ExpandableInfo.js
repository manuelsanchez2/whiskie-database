import React from "react";

function ExpandableInfo({ title, region, price, rating }) {
  return (
    <div>
      <h3>What to know about {title}</h3>
      <p>
        This whiskey has an average price of {price} and a rating of {rating}.{" "}
        {title} comes from {region}
      </p>
    </div>
  );
}

export default ExpandableInfo;
