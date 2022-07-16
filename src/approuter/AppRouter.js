import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppRouter.css"
import Footer from "../component/Footer";
import NotFound from "../pages/NotFound";
import ProductAdd from "../pages/ProductAdd";
import ProductList from "../pages/ProductList";
import ProductStyle from "../pages/ProductStyle";

const AppRouter = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/addproduct" element={<ProductAdd />} />
            <Route path="/style" element={<ProductStyle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
