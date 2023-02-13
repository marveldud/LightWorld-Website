import React from 'react'
import Payment1 from "../src/assets/asset 44.png"
import Payment2 from "../src/assets/asset 45.png"
import Payment3 from "../src/assets/asset 46.png"
import Payment4 from "../src/assets/asset 47.png"


const PaymentMethod = () => {
  return (
    <>
        <div className="my-5 main-div">
        <h1 className="text-center">Payment Method</h1>
          </div>
          <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className="col-md-3 col-10 mx-auto">
                            <div className="payment-method text-center">
                                <img src={Payment1} alt="" className='payment_image text-center'/>
                                <div className="payment-body">
                                    <h6>Credit Support</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-10 mx-auto">
                            <div className="payment-method text-center">
                                <img src={Payment2} alt="" className='payment_image text-center'/>
                                <div className="payment-body">
                                    <h6>Online Order</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-10 mx-auto">
                            <div className="payment-method text-center">
                                <img src={Payment3} alt="" className='payment_image text-center'/>
                                <div className="payment-body">
                                    <h6>Free Delivery</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-10 mx-auto">
                            <div className="payment-method text-center">
                                <img src={Payment4} alt="" className='payment_image text-center'/>
                                <div className="payment-body">
                                    <h6>Product with Gift</h6>
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

export default PaymentMethod
