import React from "react";

function Product(props) {
  function orderOne(e) {
    console.log(e);
    fetch("http://localhost:3001/saveCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ e }),
    });
  }
  return (
    <>
      <div className="box">
        <img src={require(`../images/${props.data.loc}`)} alt="pizza" />
        <h4>{props.data.name}</h4>
        <div id="size">
          <p>{props.data.size}</p>
        </div>
        <div id="buy">
          <h3>₹ 600</h3>
          <button
            onClick={() => {
              orderOne(props.data._id);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
