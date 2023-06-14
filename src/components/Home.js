import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Product from "./Product";

const Home = () => {
  const productArray = [...Array(50)].map(() => ({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.dataUri(),
  }));

  console.log(productArray);
  const [products] = useState(productArray);
  return (
    <div className="flex p-5 flex-wrap justify-evenly">
      {products.map((prod) => (
        <Product prod={prod} />
      ))}
    </div>
  );
};

export default Home;
