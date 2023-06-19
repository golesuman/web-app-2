import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const url = "http://localhost:8000/api/ecommerce/wishlists";

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(url);
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, [url]);

  return (
    <div className="posts">
      {cartItems.map((post) => (
        <div key={post.id} className="post">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/product/${post.id}`}
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
                  className="buy-now"
                  // onClick={() => handlePayment(id, productDetails.price)}
                >
                  Remove
                </button>
                <button
                  className="buy-now"
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
