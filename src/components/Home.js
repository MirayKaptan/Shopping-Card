import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Product from "./Product";
faker.seed(100)
const Home = ({card, setCard}) => {
  const productArray = [...Array(50)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlPicsumPhotos(),
  }));

  console.log(productArray);

  const [products] = useState(productArray);
  return (
    <div className="flex p-5 flex-wrap justify-evenly">
      {products.map((prod) => (
        <Product prod={prod} card={card} setCard={setCard} key= {prod.id} />
      ))}
    </div>
  );
};

export default Home;
