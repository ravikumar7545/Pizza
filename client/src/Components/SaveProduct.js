import React from "react";
import "./SaveProduct.css";
import { useState } from "react";
function SaveProduct() {
  const [loc, setloc] = useState("");
  const [name, setname] = useState("");
  const [size, setsize] = useState("");
  const [price, setprice] = useState("");
  function saveData() {
    var data = { loc, name, size, price };
    fetch("http://localhost:3001/savePizza", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Data saved succeslsadjf");
      })
      .catch(() => {
        console.log("Error in saving");
      });
  }
  function getData() {
    console.log("fetching...");
    fetch("http://localhost:3001/getData").then((response) =>
      response.json().then((res) => {
        console.log(res);
      })
    );
  }
  return (
    <>
      <div id="laura">
        <input
          type="text"
          value={loc}
          onChange={(e) => {
            setloc(e.target.value);
          }}
          placeholder="Enter image adress"
        />

        <input
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
          value={name}
          placeholder="Enter pizza name"
        />

        <input
          type="text"
          onChange={(e) => {
            setsize(e.target.value);
          }}
          value={size}
          placeholder="Enter pizza size"
        />

        <input
          type="text"
          onChange={(e) => {
            setprice(e.target.value);
          }}
          value={price}
          placeholder="Enter pizza price"
        />

        <button onClick={saveData}>Save</button>
        <button onClick={getData}>GetData</button>
      </div>
    </>
  );
}

export default SaveProduct;
