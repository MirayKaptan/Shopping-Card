import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { Card } from "../Context";

const Basket = () => {
  const [total, setTotal] = useState();
  const {card, setCard} = useContext(Card)
  useEffect(()=>{
    setTotal(card.reduce((acc, curr)=> acc  + Number(curr.price),0))
  },[card])
  return <div>
    <span>My Card</span>
    <br/>
    <span>Total: {total}</span>
    <div> {
      card.map(prod => (

        <Product prod={prod} key={prod.id} card={card} setCard={setCard} />
      ))
      
      
      } </div>
  </div>;
};

export default Basket;
