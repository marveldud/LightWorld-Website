import React from 'react'
import { NavLink } from 'react-router-dom';


const TrendingC = (props) => {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto flex">
                <div className="trending-card ">
                 <div className="card-image">
                  <NavLink to='/'>
                  <img src={props.imgsrc} className="card-img-top" alt="..." />
                  </NavLink>
                  <div className="overylay" >
                  <NavLink to="/"><span>View Details</span></NavLink>
                  </div>
                  </div>
                  <div className="trending-card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-center">{props.price}</p>
                     <div className="d-grid trending-buttun">
                     <NavLink to='/' className="btn btn-primary"> 
                      Add To Cart
                    </NavLink>
                     </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default TrendingC
