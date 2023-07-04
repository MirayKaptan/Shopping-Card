import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import Product from "./Product";
import { Card } from "../Context";
faker.seed(100)

const Home = () => {
  const {card, setCard} = useContext(Card)
  console.log(useContext(Card))
const [products, setProducts] = useState([])

  React.useEffect(() => {
    const productArray = [...Array(50)].map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
    }));
    setProducts(productArray)
  },[])

  return (
    <div className="flex p-5 flex-wrap justify-evenly">
      {products.map((prod) => (
        <Product prod={prod} key= {prod.id} card={card} setCard={setCard} />
      ))}
    </div>
  );
};

export default Home;
