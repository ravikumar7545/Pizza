const Router = require("express").Router();
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

// Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/pizza")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error in connecting with database", err);
  });

//User schema

const r1 = mongoose.model("details", {
  loc: { type: String },
  name: { type: String },
  size: { type: String },
  price: { type: String },
});

const cart = mongoose.model("cartValue", {
  val: { type: String },
  quantity: { type: "number" },
});

// Save pizza detail in database

Router.post("/savePizza", (req, res) => {
  var { loc, name, size, price } = req.body;
  console.log(loc, name, size, price);
  var r2 = r1({
    loc: loc,
    name: name,
    size: size,
    price: price,
  });
  r2.save();
  res.json("lsajkdf");
});

Router.get("/", (req, res) => {
  res.send("<h1>Hello bmlracfbdfzhs;</h1>");
});

// Fetch pizza data from database

Router.get("/getData", (req, res) => {
  console.log("Requested daata");
  r1.find().then((data) => {
    res.json(data);
  });
});

Router.post("/saveCart", (req, res) => {
  console.log("Sent value to databse:", req.body.e);
  const pizzaId = req.body.e;
  cart.find({ val: pizzaId }).then((val) => {
    if (val.length === 0) {
      var new_data = cart({
        val: pizzaId,
        quantity: 1,
      });
      new_data.save();
      console.log("Data saved");
    } else {
      let tempvalue = 0;
      cart.find({ val: pizzaId }).then((val) => {
        tempvalue = val[0].quantity;
        console.log(tempvalue);
        console.log("incrementing...");
        tempvalue += 1;
        console.log(tempvalue);
        cart.updateOne({ val: pizzaId }, { quantity: tempvalue }).then(() => {
          console.log("Updated sucessfully");
        });
      });
    }
  });
});

Router.get("/getCart", (req, res) => {
  var lsit = ["620abad7d85a8684f3d9bdc4", "620abaedd85a8684f3d9bdc6"];
  cart.find().then((val) => {
    res.json(val);
  });
});

Router.post("/getCartData", (req, res) => {
  console.log(req.body);
  r1.find({ _id: { $in: req.body.temp } }).then((data) => {
    res.json(data);
  });
});

module.exports = Router;
