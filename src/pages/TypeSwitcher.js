import React from "react";

const TypeSwitcher = ({ type, setSize, setWeight, setLength, setHeight, setWidth }) => {


  return (
    <div>
      {type == "DVD" && (
        <div>
          <div className="inputStyle">
            <label>SIZE (MB)</label>
            <input
              id="size"
              type="number"
              required
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </div>
          <h4>Please, provide size in MB</h4>
        </div>
      )}
      {type == "Book" && (
        <div>
          <div className="inputStyle">
            <label>Weight (KG)</label>
            <input
              id="weight"
              type="number"
              required
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <h4>Please, provide weight in KG</h4>
        </div>
      )}
      {type == "Furniture" && (
        <div className="furniture">
          <div className="inputStyle">
            <label>Height (CM)</label>
            <input
              id="height"
              type="number"
              required
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div className="inputStyle">
            <label>Width (CM)</label>
            <input
              id="width"
              type="number"
              required
              onChange={(e) => {
                setWidth(e.target.value);
              }}
            />
          </div>
          <div className="inputStyle">
            <label>Length (CM)</label>
            <input
              id="length"
              type="number"
              required
              onChange={(e) => {
                setLength(e.target.value);
                
              }}
            />
          </div>
          <h4>Please, provide dimensions in HxWxL</h4>
        </div>
      )}
    </div>
  );
};

export default TypeSwitcher;
