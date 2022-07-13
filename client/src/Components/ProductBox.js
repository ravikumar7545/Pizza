import Product from "./Product";
import "./ProductBox.css";
import { useEffect, useState } from "react";
function ProductBox() {
  const [data, setdata] = useState([]);
  let cartvalue = [];
  useEffect(() => {
    fetch("http://localhost:3001/getData").then((response) =>
      response.json().then((res) => {
        setdata(res);
      })
    );
  }, []);

  function getCart(val) {
    console.log("val:", val);
    cartvalue.push(val);
    console.log(cartvalue.length);
  }

  return (
    <>
      <div id="productbox">
        {data.map((ele) => (
          <Product key={ele._id} data={ele} getCartValue={getCart} />
        ))}
      </div>
    </>
  );
}

export default ProductBox;
