import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import  BrightLight from "../src/assets/asset 3.jpeg";
import  HangingLinghts from "../src/assets/asset 5.jpeg";
import  ModernLight from "../src/assets/asset 4.jpeg";
import AOS from "aos"





function Carousels() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HangingLinghts} 
          alt="hanging lights"
        />
        <Carousel.Caption>
          <div className="carousel-caption carousel_text">
          <h1 data-aos="zoom-in-up" style={{color:"#fff"}}>HANGING LIGHTS</h1>
          <h3 data-aos="slide-down" style={{color:"#fff"}}>BRILLIANT AND BEAUTIFULLY POLISHED</h3>
          </div>
           <div className="carousel-button" data-aos="zoom-out-down">
           <NavLink to="/" className=''>Shop now</NavLink>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BrightLight} 
          alt="Modern Lights"
        />
        <Carousel.Caption>
          <div className="carousel-caption carousel_text"  >
          <h1 data-aos="zoom-in-up" style={{color:"#fff"}}>MAKE THE WORLD BRIGHT WITH LIGHTS</h1>
          <h3 data-aos="slide-down" style={{fontSize:"1.5rem"}}>Get 30% OFF</h3>
          </div>
           <div className="carousel-button" data-aos="zoom-out-down">
           <NavLink to="/" className=''>Shop now</NavLink>
           </div>
           
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ModernLight} 
          alt="Modern Lights"
        />
        <Carousel.Caption>
          <div className="carousel-caption carousel_text"  >
          <h1 data-aos="zoom-in-up">MODERN DESIGNER LIGHTING</h1>
          <h3 data-aos="slide-down">Commerical Light</h3>
          </div>
           <div className="carousel-button" data-aos="zoom-out-down">
           <NavLink to="/" className=''>Shop now</NavLink>
           </div>
           
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;