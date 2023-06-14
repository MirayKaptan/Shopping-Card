import React from "react";
import { faker } from "@faker-js/faker";

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.dataUri(),
  }));

  console.log(productArray);

  return <div>Home</div>;
};

export default Home;
