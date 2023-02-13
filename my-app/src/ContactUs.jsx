import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ContactImage from "../src/assets/asset 37.jpeg";
import Footer from "./Footer";

const ContactUs = () => {
  document.title = "Contact";
  return (
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
          <img src={ContactImage} alt="contact image" />
        </div>
        <div className="catalog_overlay">
          <div className="catalog_content about_text">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      

      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{color
      :"gray"}}>Feel Free to Contact Us</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-black  border-0 py-2 px-8 focus:outline-none rounded text-lg about-button">Send</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
         

     
      <Footer />
    </>
  );
};

export default ContactUs;
