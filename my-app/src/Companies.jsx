import React from 'react'
import { NavLink } from 'react-router-dom';
import Company1 from "../src/assets/asset 39.jpeg";
import Company2 from "../src/assets/asset 40.jpeg";
import Company3 from "../src/assets/asset 41.jpeg";
import Company4 from "../src/assets/asset 42.jpeg";
import Company5 from "../src/assets/asset 43.jpeg";


const Companies = () => {
  return (
    <>
         <div className="container mb-5 company_container">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row ">
                       <div className="col-md-2 col-8 mx-auto">
                           <div className="company_logo">
                           <NavLink to="/">
                            <img src={Company1} alt="" />
                            </NavLink>
                           </div>
                       </div>
                       <div className="col-md-2 col-8 mx-auto">
                           <div className="company_logo">
                           <NavLink to="/">
                            <img src={Company2} alt="" />
                            </NavLink>
                           </div>
                       </div>
                       <div className="col-md-2 col-8 mx-auto">
                           <div className="company_logo">
                           <NavLink to="/">
                            <img src={Company3} alt="" />
                            </NavLink>
                           </div>
                       </div>
                       <div className="col-md-2 col-8 mx-auto">
                           <div className="company_logo">
                           <NavLink to="/">
                            <img src={Company4} alt="" />
                            </NavLink>
                           </div>
                       </div>
                       <div className="col-md-2 col-8 mx-auto">
                           <div className="company_logo">
                           <NavLink to="/">
                            <img src={Company5} alt="" />
                            </NavLink>
                           </div>
                       </div>
                       
                       
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default Companies
