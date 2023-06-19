import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    await axios.delete(`http://localhost:8000/api/ecommerce/wishlists/${id}`);
    console.log("Product removed from wishlist");
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    popUp.textContent = "Product removed from wishlist";
    document.body.appendChild(popUp);

    // Set the pop-up to disappear after 2 seconds
    setTimeout(() => {
      popUp.remove();
    }, 2000);

    // Redirect the user to the wishlists page
    window.location.href = "/liked";
  } catch (error) {
    console.log("Error removing product from cart:", error);
  }
};
function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/ecommerce/carts"
        );
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="posts">
      {cartItems.map((post) => (
        <div key={post.id} className="post">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              className="product-image"
              src={`http://localhost:8000/media/${post.product.image_url}`}
              alt="No image found"
            />
            <div className="description">
              <h2>{post.product.name}</h2>
              <div className="button">
                <button
                  className="buy-now"
                  onClick={() => handleRemove(post.id)}
                >
                  Remove
                </button>
                <button
                  className="buy-now"
                  onClick={() => handlePayment(post.id, post.product.price)}

                  // onClick={() => handlePayment(id, productDetails.price)}
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

export default Cart;
