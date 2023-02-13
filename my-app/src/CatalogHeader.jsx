import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../src/assets/asset 18.webp";

const CatalogHeader = () => {
  return (
    <>
      <div className="header_container">
        <div className="header_image">
          <img src={Header} alt="" />
        </div>
        <div className="catalog_overlay">
          <div className="catalog_content">
            <h1>CATALOG</h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      
    </>
  );
};

export default CatalogHeader;
