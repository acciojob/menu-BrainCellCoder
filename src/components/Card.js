import React from "react";

const Card = ({ item, index }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "200px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "8px",
  };

  const titleStyle = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "4px",
  };

  const priceStyle = {
    color: "#2ecc71",
    display: "block",
    marginBottom: "8px",
  };

  const descStyle = {
    color: "#555",
    fontSize: "14px",
  };

  return (
    <div key={index} style={cardStyle}>
      <img src={item.img} alt={item.title} style={imgStyle} />
      <div className="text">
        <div>
          <span style={titleStyle}>{item.title}</span>
          <span style={priceStyle}>$ {item.price}</span>
        </div>
        <div style={descStyle}>{item.desc}</div>
      </div>
    </div>
  );
};

export default Card;
