import React from "react";
import ProductBox from "./Components/ProductBox";

function Home() {
  return (
    <>
      <div id="container">
        <div>
          <h1>Pizza App</h1>
          <h3>Lazeez app at your doorstep</h3>
        </div>
        <img src={require("./images/pizza.jpg")} alt="pizza" />
      </div>
      <ProductBox />
    </>
  );
}

export default Home;
