import React from "react";
import "./CartBox.css";
function CartBox(props) {
  console.log(props.quantity);
  return (
    <>
      <div id="cartBox">
        <div id="imagecontent">
          <img src={require(`../images/${props.val.loc}`)} alt="img" />
          <p>{props.val.name}</p>
        </div>
        <div id="increment">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button>Delete</button>
      </div>
    </>
  );
}

export default CartBox;
