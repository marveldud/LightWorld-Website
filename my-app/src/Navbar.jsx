import React from 'react';
import logo from "./assets/asset 0.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
       
  return (
    <>  
       
       
         <nav>
        <div className="container-fluid main-nav flex">
            <NavLink to="/" className="logo">
                <img src={logo} alt="Logo" /> 
            </NavLink>
            <div className="nav-links menu-links" id="nav-links">
                <ul className="flex">
                    <li><NavLink to="/" className="hover-links">Home</NavLink></li>
                    <li><NavLink to="/catalog" className="hover-links ">Catalog</NavLink></li>
                    <li><NavLink to="/gallery" className="hover-links ">Gallery</NavLink></li>
                    <li><NavLink to="/aboutus" className="hover-links ">About</NavLink></li>
                    <li><NavLink to="/contactus" className="hover-links ">Contact</NavLink></li>
                </ul>
            </div>  
            <div className="navbar_btn flex" >
             <NavLink to="/"><i class="fa-regular fa-heart"></i></NavLink>
             <NavLink to="/"><i class="fa fa-cart-shopping "></i></NavLink>
              
              <NavLink to="/" className="hover-links secondary-button">SignIn</NavLink>
            </div>
            
        </div>
         
       </nav>
    </>
  )
}

export default Navbar
