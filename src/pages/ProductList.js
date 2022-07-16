import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import ProductInfo from "./ProductInfo";

const ProductList = () => {
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleDelete = () => {
    const checkBoxes = document.getElementsByClassName("delete-checkbox");
    Array.from(checkBoxes).forEach((checkBox) => {
      if (checkBox.checked) {
        let SKU = checkBox.parentElement.children[1].children[0].innerHTML;
       axios.delete(`http://localhost:5000/api/remove/${SKU}`);
       loadData();
      }
    });
  };

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setProducts(response.data);
  };

  useEffect(() => {
    loadData();
  }, [products]);

  return (
    <div className="main">
      <div className="header">
        <div>
          <h2>Product List</h2>
        </div>
        <div className="buttons">
          <button className="addButton" onClick={() => navigate("/addproduct")}>
            ADD
          </button>
          <button id="delete-product-btn" onClick={handleDelete}>
            MASS DELETE
          </button>
        </div>
      </div>
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.SKU}>
              <input
                type="checkbox"
                name="checkbox"
                className="delete-checkbox"
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
              />
              <div className="productInfo">
                <h4>{product.SKU}</h4>
                <h4>{product.name}</h4>
                <h4>{product.price}</h4>
                <ProductInfo product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
