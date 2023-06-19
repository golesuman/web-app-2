import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Productdetail.scss";
// const params = useParams<RouteParam>();
// console.log(params.id);
// const handleClick = () => {};

function handlePayment(id, price) {
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
}

function addToCart(productId) {
  axios
    .post(`http://localhost:8000/api/ecommerce/cart/${productId}`)
    .then((response) => {
      console.log("Product added to cart:", response.data);
      // Add any additional logic or UI updates after successful API call
      alert("Product added to cart");
      window.location.href = "/products";
    })
    .catch((error) => {
      console.log("Error adding product to cart:", error);
      // Handle error scenarios
    });
}

function addToWishlist(productId) {
  axios
    .post(`http://localhost:8000/api/ecommerce/wishlist/${productId}`)
    .then((response) => {
      console.log("Product added to wishlist:", response.data);
      // Add any additional logic or UI updates after successful API call
      window.location.href = "/products";
    })
    .catch((error) => {
      console.log("Error adding product to wishlist:", error);
      // Handle error scenarios
    });
}

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState("");
  const url = `http://localhost:8000/api/ecommerce/product/${id}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProductDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return (
    <div>
      <div className="post-details">
        {/* <div className="detail"> */}
        <img
          src={`http://localhost:8000/media/${productDetails.image_url}`}
          alt=""
        />
        <div className="description">
          <h1>{productDetails.name}</h1>
          <p>{productDetails.description}</p>
          <p>{productDetails.price}</p>
          <div className="icons">
            <button className="favorite" onClick={() => addToWishlist(id)}>
              <FavoriteBorderOutlinedIcon />
            </button>

            <button className="shopping-bag" onClick={() => addToCart(id)}>
              <ShoppingBagOutlinedIcon />
            </button>
            <button
              className="buy-now"
              onClick={() => handlePayment(id, productDetails.price)}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
