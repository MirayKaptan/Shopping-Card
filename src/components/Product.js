import React from "react";

const Product = ({ prod }) => {
  return (
    <div className="flex flex-col m-3 w-[25%]">
      <img src={prod.image} alt={prod.name} />
      <div className="flex truncate">{prod.name}</div>
      <div>{prod.price} TL </div>
      <button class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
        Add to Card
      </button>
    </div>
  );
};

export default Product;
