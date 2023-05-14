import Footer from "./components/Footer/Footer";
import { useState } from "react";
import React from "react";
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

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
