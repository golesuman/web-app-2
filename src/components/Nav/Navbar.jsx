import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h2>G-Store</h2>
        </Link>
      </div>
      <div className="center">
        <ul className="list">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products?q=jacket"
          >
            <li className="item">Jacket</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products?q=shoe"
          >
            <li className="item">Shoes</li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products?q=shirt"
          >
            <li className="item">Shirts</li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products?q=pants"
          >
            <li className="item">Pants</li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products"
          >
            <li className="item">All Products</li>
          </Link>
        </ul>
      </div>
      <div className="right">
        <div className="search">
          {/* <SearchOutlinedIcon /> */}

          <input id="search-id" type="search" placeholder={"Search"} />
          {/* <SearchOutlinedIcon /> */}
        </div>
        <div className="icons">
          <Link style={{ textDecoration: "none", color: "black" }} to="/carts">
            <ShoppingBagOutlinedIcon />
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/liked">
            <FavoriteBorderOutlinedIcon />
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            <PersonOutlineOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
