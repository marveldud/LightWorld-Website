import React from 'react'
import TrendingC from './TrendingC'
import TrendingData from './TrendingData'


const TrendingNow = () => {
  return (
    <>
         <div className="my-5 ">
        <h1 className="text-center">Trending Now</h1>
      </div>
      <hr />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
               {
                TrendingData.map((val,index) =>{
                    return <TrendingC 
                       imgsrc={val.imgsrc}
                       title={val.title}
                       price={val.price}

                    />
                })
               }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendingNow
