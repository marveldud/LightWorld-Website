import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import AboutHeader from "../src/assets/asset 4.jpeg"
import AboutCard from "./AboutCard";
import Promotions from "./Promotions";
import Footer from "./Footer";



const AboutUs = () =>{
  document.title="About"
  return(
    <>
             <div className="top-banner">
        <div className="container text flex">
            <div className="banner-text">
               <h5>Free shipping for standard order over $100</h5>
            </div>
               <div className="hover-links flex">
                <NavLink to="/">Help & FAQs</NavLink>
                <NavLink to="/">My Account</NavLink>
                <NavLink to="/">EN</NavLink>
                <NavLink to="/">USD</NavLink>
            </div>
        </div>
      </div>
      <Navbar />
                 
      <div className="header_container">
                 <div className="header_image">
                <img src={AboutHeader} alt="" />
                </div>
                <div className="catalog_overlay">
                  <div className="catalog_content about_text">
                    <h1>About Us</h1>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />

              <AboutCard/>
              <Promotions />
       <Footer/>
    </>
  )
}

export default AboutUs