import Footer from "./components/Footer/Footer";

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Outlet,
// }
import Navbar from "./components/Nav/Navbar";
import Login from "./pages/Account/Login";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Productdetails/Productdetail";
import Products from "./pages/Products/Products";
import WishList from "./pages/WishList/WishList";
// import
// import LoginLogou

export function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products?q=jacket" element={<Products />} />
          <Route path="/products?q=pants" element={<Products />} />
          <Route path="/products?q=shoes" element={<Products />} />
          <Route path="/liked" element={<WishList />} />
          <Route path="/carts" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>

      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
