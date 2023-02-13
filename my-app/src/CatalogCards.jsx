import React from 'react'
import { NavLink } from 'react-router-dom'

const CatalogCards = (props) => {
  return (
    <>
          <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                  <img src={props.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="catalog-card-title">{props.title}</h3>
                    <p className="catalog-card-text">
                      {props.price}
                    </p>
                    <div className="d-grid">
                    <NavLink to='/' className="btn btn-primary">
                      Add to Cart
                    </NavLink>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default CatalogCards
