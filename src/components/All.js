import React from "react";
import Card from "./Card";

const All = ({ list }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
      id="main"
    >
      {list.map((item, index) => {
        return <Card item={item} index={index} />;
      })}
    </div>
  );
};

export default All;
