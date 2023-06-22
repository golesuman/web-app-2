import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="home-image">
        <img className="img1" src="images/shackets.jpg" alt="No image" />
        <h2>
          <u>Our featured Products</u>
        </h2>
        <div className="featured">
          <div className="img-description">
            <img className="featured-img" src="images/hoodies.jpg" alt="" />
            <h5>Hoodies for men</h5>
            {/* <p>1000</p> */}
          </div>
          <div className="img-description">
            <img className="featured-img" src="images/sportswear.jpg" alt="" />
            <h5> Sports wear</h5>
            {/* <p>1200</p> */}
          </div>
          <div className="img-description">
            <img className="featured-img" src="images/jacket.jpg" alt="" />
            <h5> Nike Jacket</h5>
            {/* <p>1300</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
