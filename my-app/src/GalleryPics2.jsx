import React from 'react'
import { NavLink } from 'react-router-dom'
import Pic1 from "./assets3/asset 7.jpeg"
import Pic2 from "./assets3/asset 8.jpeg"

const GalleryPics2 = () => {
  return (
    <>
      <div className="container-fluid mb-5 gallery_container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            <div className="col-md-6 col-10 mx-auto">
                <div className="gallery_card">
                <NavLink to="/" >
                  <img src={Pic1} className="card-img-top" alt="..." />
                  </NavLink>
                </div>
              </div>

              <div className="col-md-6 col-10 mx-auto">
                <div className="gallery_card">
                <NavLink to="/" >
                  <img src={Pic2} className="card-img-top" alt="..." />
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

export default GalleryPics2
