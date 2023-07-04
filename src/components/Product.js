import React, { useContext } from "react";
import { Card } from "../Context";

const Product = ({ prod }) => {
  const {card, setCard} = useContext(Card)
  return (
    <div className="flex flex-col m-3 w-[25%] p-3 border border-sky-500 ">
      <img src={prod.image} alt={prod.name} />
      <div className="flex truncate">{prod.name}</div>
      <div>{prod.price} TL </div>

      {card.includes(prod) ? (
        <button
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCard(card.filter((c) => c.id !== prod.id));
          }}
        >
          Remove the Card
        </button>
      ) : (
        <button
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCard([...card, prod]);
          }}
        >
          Add to Card
        </button>
      )}
    </div>
  );
};

export default Product;
