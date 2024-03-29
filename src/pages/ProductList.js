import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import ProductInfo from "./ProductInfo";

const ProductList = () => {
  const [checked, setChecked] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    loadData();
  }, [products]);

  const handleDelete = () => {
   const checkBoxes = document.getElementsByClassName("delete-checkbox");
    // Array.from(checkBoxes).forEach((checkBox) => {
    //   if (checkBox.checked) {
    //    let SKU = checkBox.parentElement.children[1].children[0].innerHTML;
    //    axios.delete(`http://localhost:5000/api/remove/${SKU}`);
    //    loadData();
    //    console.log("emre5");
    //   }
    // });
    for (let i = 0; i < checkBoxes.length; i++) {
     if  (checkBoxes[i].checked){
      let SKU = checkBoxes[i].parentElement.children[1].children[0].innerHTML;
      axios.delete(`https://scandiwebjrdevtest.herokuapp.com/api/remove/${SKU}`);
      loadData();
     }
      
    }
  };

  const loadData = async () => {
    const response = await axios.get("https://scandiwebjrdevtest.herokuapp.com/api/get");
    setProducts(response.data);
  };


  return (
    <div className="main">
      <div className="header">
        <div>
          <h2>Product List</h2>
        </div>
        <div className="buttons">
          <button className="addButton" onClick={() => navigate("/addproduct", {state: {products}})}>
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
                <h4>{product.price} $</h4>
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
