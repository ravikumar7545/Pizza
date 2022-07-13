import Navbar from "./Components/Navbar";
import Home from "./Home";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaveProduct from "./Components/SaveProduct";
import ProductBox from "./Components/ProductBox";
import Cart from "./Components/Cart";
import Account from "./Components/Account";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/product" element={<ProductBox />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/save" element={<SaveProduct />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
