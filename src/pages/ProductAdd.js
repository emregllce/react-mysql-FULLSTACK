import React, { useEffect, useState } from "react";
import "./ProductAdd.css";
import axios from "axios";
import TypeSwitcher from "./TypeSwitcher";
import { useLocation, useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [SKU, setSKU] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const navigate = useNavigate();
  const location = useLocation()
  const products = location.state.products

  const handleType = (e) => setType(e.target.value);


const handleBack = () => {
  navigate("/")
  // console.log(products);
}

  const handleSubmit = (e) => {
    e.preventDefault();
       axios.post("http://localhost:5000/api/post", {
          SKU,
          name,
          price,
          size,
          weight,
          height,
          width,
          length
        }).then(() => {
          console.log("did it");
        }).catch((err)=>console.log(err));
        navigate("/"); 
  };

  return (
    <div>
      <form id="product_form" onSubmit={handleSubmit}>
        <header>
          <div className="title">
            <h1>Product Add</h1>
          </div>
          <div className="buttons">
            <div><button type="submit" className="addButton">
              Save
            </button></div>
           <div><button type="button" onClick={handleBack} className="cancelButton">CANCEL</button></div>
          </div>
        </header>
        <div className="inputs">
          <div className="inputStyle">
            <label>SKU </label>
            <input
              type="text"
              name="SKU"
              id="sku"
              required
              onChange={(e) => {
                setSKU(e.target.value);
              }}
              value={SKU}
            />
          </div>
          <div className="inputStyle">
            <label>Name </label>
            <input
              type="text"
              name="Name"
              id="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="inputStyle">
            <label>Price ($) </label>
            <input
              type="number"
              name="Price"
              id="price"
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="inputStyle">
            <label>Type Switcher </label>
            <select name="type" id="productType" required onChange={handleType}>
              <option value="">Type Switcher</option>
              <option id="DVD" value="DVD">
                DVD
              </option>
              <option id="Book" value="Book">
              NameTest000
              </option>
              <option id="Furniture" value="Furniture">
                Furniture
              </option>
            </select>
          </div>

          <div>
            <TypeSwitcher
              type={type}
              setSize={setSize}
              setWeight={setWeight}
              setLength={setLength}
              setHeight={setHeight}
              setWidth={setWidth}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
