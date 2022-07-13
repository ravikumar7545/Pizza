import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div id="navbar">
      <img src={require("../images/pizza_logo.jpg")} alt="logo" />
      <div id="features">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/account">
          Account
        </Link>
        <Link className="link" to="/product">
          Product
        </Link>
        <Link to="/cart">
          <button id="btn">
            <img
              src={require("../images/shopping-cart.png")}
              alt="shoppingcart"
            />
            Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
