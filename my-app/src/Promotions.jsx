import React from "react";
import { NavLink } from "react-router-dom";

const Promotions = () => {
  return (
    <>
      <div className="container mb-4 promotion_container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-6 col-10 mx-auto">
                <div className="promotion_section">
                  <div className="promotion-body text-center">
                    <h1 className="promotion-text">Get promotions & updates!</h1>
                    <p className="promotion-para flex">
                      Seamlessly empower fully researched growth strategies and
                      interoperable internal or “organic” sources credibly
                      innovate granular internal .
                    </p>
                    <div class="input-group ">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Mail"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="subscribe-button">
                      <NavLink to="/">Subscribe</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Promotions;
