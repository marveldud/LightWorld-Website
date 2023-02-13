import React from 'react'
import { NavLink } from 'react-router-dom'
import Exclusive from "../src/assets/asset 31.jpeg"
import Exclusive2 from "../src/assets/asset 32.jpeg"



const ExclusiveDesign = () => {
  return (
    <>
         <div className="container design-section flex">
             <div className="left">
              <img src={Exclusive} alt="exclusive design"/>
             </div>
             <div className="right">
              <h1>Exclusive Designs</h1>
              <p>Lighting's exclusive designs from the brands our customers love truly represent the best in modern lighting, not available anywhere else.</p>
               <NavLink to='/' className="hover-links secondary-button">
                 Shop Now
               </NavLink>
             </div>
         </div>
         <div className="container second-design-section flex">
             <div className="left">
              <img src={Exclusive2} alt="exclusive design"/>
             </div>
             <div className="right">
              <h1>The Artisans</h1>
              <p>Lighting's exclusive designs from the brands our customers love truly represent the best in modern lighting, not available anywhere else.</p>
               <NavLink to='/' className="hover-links secondary-button">
                 Shop Now
               </NavLink>
             </div>
         </div>
        
    </>
  )
}

export default ExclusiveDesign
