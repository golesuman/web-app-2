import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WishList.scss";

const handlePayment = (id, price) => {
  const form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute("action", "https://uat.esewa.com.np/epay/main");
  const tAmtInput = document.createElement("input");
  tAmtInput.setAttribute("type", "hidden");
  tAmtInput.setAttribute("name", "tAmt");
  tAmtInput.setAttribute("value", `${price}`);
  form.appendChild(tAmtInput);

  const amtInput = document.createElement("input");
  amtInput.setAttribute("type", "hidden");
  amtInput.setAttribute("name", "amt");
  amtInput.setAttribute("value", `${price}`);
  form.appendChild(amtInput);

  const txAmtInput = document.createElement("input");
  txAmtInput.setAttribute("type", "hidden");
  txAmtInput.setAttribute("name", "txAmt");
  txAmtInput.setAttribute("value", "0");
  form.appendChild(txAmtInput);

  const pscInput = document.createElement("input");
  pscInput.setAttribute("type", "hidden");
  pscInput.setAttribute("name", "psc");
  pscInput.setAttribute("value", "0");
  form.appendChild(pscInput);

  const pdcInput = document.createElement("input");
  pdcInput.setAttribute("type", "hidden");
  pdcInput.setAttribute("name", "pdc");
  pdcInput.setAttribute("value", "0");
  form.appendChild(pdcInput);

  const scdInput = document.createElement("input");
  scdInput.setAttribute("type", "hidden");
  scdInput.setAttribute("name", "scd");
  scdInput.setAttribute("value", "EPAYTEST");
  form.appendChild(scdInput);

  const pidInput = document.createElement("input");
  pidInput.setAttribute("type", "hidden");
  pidInput.setAttribute("name", "pid");
  pidInput.setAttribute("value", `${id}-${Date.now()}`);
  form.appendChild(pidInput);

  const suInput = document.createElement("input");
  suInput.setAttribute("type", "hidden");
  suInput.setAttribute("name", "su");
  suInput.setAttribute("value", `http://localhost:5173/products?q=su`);
  form.appendChild(suInput);

  const fuInput = document.createElement("input");
  fuInput.setAttribute("type", "hidden");
  fuInput.setAttribute("name", "fu");
  fuInput.setAttribute("value", `http://localhost:5137/products?bid=${id}`);
  form.appendChild(fuInput);

  document.body.appendChild(form);
  form.submit();
};

const handleRemove = async (id) => {
  try {
    await axios.delete(`ecommerce/wishlists/${id}`);
    console.log("Product removed from wishlist");
    // Redirect the user to the wishlists page
    window.location.href = "/liked";
  } catch (error) {
    console.log("Error removing product from cart:", error);
  }
};

function WishList() {
  // const history = useHistory();
  const [wishListItems, setWishListItems] = useState([]);
  const url = "ecommerce/wishlists";

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(url);
        setWishListItems(response.data);
      } catch (error) {
        // window.location.href = "/products";
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);
  if (wishListItems != undefined) {
    return (
      <div className="posts">
        {wishListItems.map((post) => (
          <div key={post.id} className="post">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              // to={`/product/${post.id}`}
            >
              <img
                className="product-image"
                src={`http://localhost:8000/media/${post.product.image_url}`}
                alt="No image found"
              />
              <div className="description">
                <h2>{post.product.name}</h2>
                <div className="button">
                  <button
                    className="remove"
                    onClick={() => handleRemove(post.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="buy-now"
                    onClick={() => handlePayment(post.id, post.product.price)}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default WishList;
