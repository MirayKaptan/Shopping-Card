import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Context";

const Header = () => {
  const {card} = useContext(Card)
  return (
    <div className="flex items-center justify-between border h-24 w-full bg-slate-600 text-white font-normal p-8">
      <Link to="/"> My Shopping Page</Link>
      <Link to="/basket"> Basket ({card.length})</Link>
    </div>
  );
};

export default Header;
