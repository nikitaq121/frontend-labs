import React from "react";

const GoodsCard = ({ name, price, image }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}EUR</p>
    </div>
  );
};

export default GoodsCard;