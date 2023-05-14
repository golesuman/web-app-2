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
        <h2>G-Store</h2>
      </div>
      <div className="center">
        <ul className="list">
          <li className="item">Jacket</li>
          <li className="item">Shoes</li>
          <li className="item">Shirts</li>
          <li className="item">Pants</li>
          <li className="item">All Products</li>
        </ul>
      </div>
      <div className="right">
        <div className="search">
          {/* <SearchOutlinedIcon /> */}

          <input id="search-id" type="search" placeholder={"Search"} />
          {/* <SearchOutlinedIcon /> */}
        </div>
        <div className="icons">
          <ShoppingBagOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <PersonOutlineOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
