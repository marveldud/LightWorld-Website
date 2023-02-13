import React from 'react'
import { NavLink } from 'react-router-dom';
import light1 from "../src/assets/asset 36.jpeg";
import light2 from "../src/assets/asset 37.jpeg";
import light3 from "../src/assets/asset 38.jpeg";

const SpotLight = () => {
  return (
    <>
    
                 <div className="my-5">
                    <h1 className='text-center'>SPOT LIGHT</h1>
                 </div>
                 <div className="container-fluid mb-5 ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="spot-card spot_container ">
                                     <NavLink to="/gallery">
                                        <img src={light1} alt="" className='spot-image' />
                                        <div className="spot_overlay">
                                            <h2 className='spot-text'>Shop Now</h2>
                                        </div>
                                        </NavLink>
                                    </div>
                                </div>

                                  <div className="col-md-4 col-10 mx-auto">
                                    <div className="spot-card spot_container ">
                                    <NavLink to="/">
                                        <img src={light2} alt="" className='spot-image' />
                                        <div className="spot_overlay">
                                            <h2 className='spot-text'>Shop Now</h2>
                                        </div>
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="spot-card spot_container">
                                    <NavLink to="/">
                                        <img src={light3} alt="" className='spot-image' />
                                        <div className="spot_overlay">
                                            <h2 className='spot-text'>Shop Now</h2>
                                        </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>


            {/* <div className="container spot_container ">
                <img src={light1} alt="" className='spot-image' />
                <div className="spot_overlay">
                        <h3>Shop Now</h3>
                </div>
            </div> */}
    </>
  )
}

export default SpotLight
