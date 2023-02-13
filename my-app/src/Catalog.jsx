import React from 'react'
import { NavLink } from 'react-router-dom'
import CatalogHeader from './CatalogHeader'
import Navbar from './Navbar'
import CatalogData from './CatalogData'
import CatalogCards from './CatalogCards'
import Companies from './Companies'
import Footer from './Footer'

const Catalog = () => {
  document.title="Catalog"
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
       <CatalogHeader/>
          
            {/*Catalog Cards  */}
            
            <div className="my-5">
              <h1 className='text-center'>Lighting Collections</h1>
            </div>
            <hr />
       <div className="container mb-5 catalog-cards">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                  CatalogData.map((Cur,index,array)=>{
                      return <CatalogCards
                        key={index}
                        img={Cur.img}
                        title={Cur.title}
                        price={Cur.price}
                       />
                  })
              }
            </div>
          </div>
        </div>
      </div>
      <Companies/>
      <Footer/>
    </>
  )
}

export default Catalog
