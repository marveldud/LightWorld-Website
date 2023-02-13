import React from 'react'
const ChildCateg = (props) => {
  return (
    <>
       <div className="col-md-3 col-12 mx-auto card-section">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1 className="card-title">{props.title}</h1>
                  </div>
                </div>
              </div>
    </>
  )
}

export default ChildCateg
