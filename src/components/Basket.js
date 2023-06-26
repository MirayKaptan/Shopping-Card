import React, { useEffect, useState } from "react";
import Product from "./Product";

const Basket = ({card, setCard}) => {
  const [total, setTotal] = useState();
  useEffect(()=>{
    setTotal(card.reduce((acc, curr)=> acc  + Number(curr.price),0))
  },[card])
  return <div>
    <span>My Card</span>
    <br/>
    <span>Total: {total}</span>
    <div> {
      card.map(prod => (

        <Product prod={prod} key={prod.id} card={card} setCard={setCard}/>
      ))
      
      
      } </div>
  </div>;
};

export default Basket;
