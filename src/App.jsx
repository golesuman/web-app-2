import Footer from "./components/Footer/Footer";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Outlet,
// }
import ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Nav/Navbar";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart";
import LoginLogout from "./pages/Account/Auth";
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
          <Route path="/shirts" element={<Home />} />
          <Route path="/likes" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginLogout />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
