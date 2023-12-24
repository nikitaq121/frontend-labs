import GoodsCard from "./GoodsCard";

import apple from "./images/apple.png";
import cherry from "./images/cherry.png";
import grapes from "./images/grapes.png";
import melon from "./images/melon.png";
import watermelon from "./images/watermelon.png";
import banana from "./images/banana.png";

const Goods = () => {
  const GOODS = [
    {
      name: "Apple",
      price: 1.50,
      image: apple,
    },
    {
      name: "Cherry",
      price: 2.15,
      image: cherry,
    },
    {
      name: "Grapes",
      price: 1.30,
      image: grapes,
    },
    {
      name: "Melon",
      price: 3.20,
      image: melon,
    },
    {
        name: "Banana",
        price: 1.75,
        image: banana,
    },
    {
      name: "Watermelon",
      price: 4.50,
      image: watermelon,
    },
  ];

  return (
    <div className="goods">
      {GOODS.map((el) => (
        <GoodsCard
          name={el.name}
          price={el.price}
          image={el.image}
          key={el.name}
        />
      ))}
    </div>
  );
};

export default Goods;