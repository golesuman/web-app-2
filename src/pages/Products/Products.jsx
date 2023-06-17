import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

function Products() {
  // const data
  const url = "http://localhost:8000/api/ecommerce/products";
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(posts);
  if (!posts) return null;
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/product/${post.id}`}
          >
            {/* <h2>G-Store</h2> */}
            <img
              className="product-image"
              src={`http://localhost:8000/media/${post.image_url}`}
              alt="No image found"
            />
            <div className="description">
              <h2>{post.name}</h2>
              <p>{post.price}</p>
              <p>{post.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
