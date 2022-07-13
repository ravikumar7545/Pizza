import React from "react";
import { useEffect, useState } from "react";
import CartBox from "./CartBox";
import "./Cart.css";
function Cart() {
  const [cart, setcart] = useState([]);
  const [cartData, setcartData] = useState([]);
  // const [temp, settemp] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/getCart").then((response) =>
      response.json().then((res) => {
        setcart(res);
        var temp = [];
        res.map((data) => temp.push(data.val));

        fetch("http://localhost:3001/getCartData", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ temp }),
        })
          .then((res) =>
            res.json().then((data) => {
              setcartData(data);
            })
          )
          .catch((err) => {
            console.log("Error");
          });
      })
    );
  }, []);

  return (
    <>
      <div id="main">
        {cartData.map((ele) => (
          <CartBox key={ele._id} val={ele} />
        ))}
      </div>
    </>
  );
}

export default Cart;
