import React from "react";
import Card from "./Card";

const Lunch = ({ list }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {list?.map((item, index) => {
        return <Card item={item} index={index} />;
      })}
    </div>
  );
};

export default Lunch;
