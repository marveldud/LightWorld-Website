import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import GalleryPic from "./assets3/asset 3.jpeg"
import GalleryPics from './GalleryPics'
import GalleryPics2 from './GalleryPics2'
import GalleryPic3 from './GalleryPic3'
import Footer from './Footer'
const Gallery = () => {
  document.title="Gallery"
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
                <img src={GalleryPic} alt="" />
                </div>
                <div className="catalog_overlay">
                  <div className="catalog_content">
                    <h1>GALLERY</h1>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
          

          <GalleryPics/>
          <GalleryPics2/>
          <GalleryPic3/>
          <Footer/>
    </>
  )
}

export default Gallery
