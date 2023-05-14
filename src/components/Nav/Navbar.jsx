import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
          <Link style={{ textDecoration: "none", color: "black" }} to="/jacket">
            <li className="item">Jacket</li>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/jacket">
            <li className="item">Shoes</li>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="/shirts">
            <li className="item">Shirts</li>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="/jacket">
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
          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
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
