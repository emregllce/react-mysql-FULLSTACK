import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppRouter.css"
import Footer from "../component/Footer";
import ProductAdd from "../pages/ProductAdd";
import ProductList from "../pages/ProductList";

const AppRouter = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/addproduct" element={<ProductAdd />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
