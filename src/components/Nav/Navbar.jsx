import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const handleProfile = async () => {
  const url = "ecommerce/user-profile";
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
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
          <div className="dropdown-container">
            <PersonOutlineOutlinedIcon
              id="dropdown-basic"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <div onClick={handleProfile}>My Profile</div>
                <div>My Orders</div>
                <div>Log In</div>
              </div>
            )}
          </div>
          {/* <Link style={{ textDecoration: "none", color: "black" }} to="/login"> */}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
