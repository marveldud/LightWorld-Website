import React from 'react'
import { NavLink } from 'react-router-dom'
import Advertise from './Advertise'
import Carousels from './CarouselsP'
import Companies from './Companies'
import ExclusiveDesign from './ExclusiveDesign'
import Extra from './Extra'
import Footer from './Footer'
import Navbar from './Navbar'
import ParentCateg from './ParentCateg'
import PaymentMethod from './PaymentMethod'
import Promotions from './Promotions'
import Rooms from './Rooms'
import ShopNow from './ShopNow'
import SpotLight from './SpotLight'
import TrendingNow from './TrendingNow'



const Home = () => {
  document.title="Home" 
  return (
    <>
     
     <div className="top-banner">
        <div className="container text flex">
            <div className="banner-text">
               <h5>Free shipping for standard order over $100</h5>
            </div>
               <div className="hover-links banner_link flex">
                <NavLink to="/">Help & FAQs</NavLink>
                <NavLink to="/">My Account</NavLink>
                <NavLink to="/">EN</NavLink>
                <NavLink to="/">USD</NavLink>
            </div>
        </div>
          <div className="toggle-button">
            <NavLink to="/"><i class="fa-solid fa-bars fa-2x"></i></NavLink>
          </div>
      </div>
           
               
       <Navbar />
       <Carousels />
       <ParentCateg />
       <Extra />
       <TrendingNow />
       <Rooms/>
       <ExclusiveDesign />
       <ShopNow />
       <Advertise />
       <SpotLight/>
       <Companies />
       <PaymentMethod />
       <Promotions />
       <Footer/>
      
    </>
  )
}

export default Home
