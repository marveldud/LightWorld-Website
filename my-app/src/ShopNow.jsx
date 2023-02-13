import React from 'react'
import { NavLink } from 'react-router-dom'
import Shop1 from "../src/assets/asset 33.jpeg"
import Shop2 from "../src/assets/asset 34.jpeg"


const ShopNow = () => {
  return (
    <>
       <div className="container-fluid mb-5 shop">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="shop-card">
                        <NavLink to='/'>
                            <img src={Shop1} alt=""  className='shop-img'/>
                            </NavLink>
                        <div className="card-body card-heading">
                            <h1>Modern Wall Light</h1>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="shop-card">
                        <NavLink to='/'>
                            <img src={Shop2} alt=""  className='shop-img'/>
                            </NavLink>

                        

                        <div className="card-body card-heading">
                            <h1>Modern Celling light</h1>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div> 
    </>
  )
}

export default ShopNow
