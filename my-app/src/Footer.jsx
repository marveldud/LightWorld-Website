import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>    
        
    <div className="footer-section">
        <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
                
            <div className="social_icons text-center">
                <NavLink to="/"><i class="fa-brands fa-facebook"></i></NavLink>
                <NavLink to="/"><i class="fa-brands fa-twitter"></i></NavLink>
                <NavLink to="/"><i class="fa-brands fa-linkedin-in"></i></NavLink>
                <NavLink to="/"><i class="fa-brands fa-instagram"></i></NavLink>

                </div>
  
            <div className="col-md-3 col-10 mx-auto footer_links flex">
            <div className="f-about">
              <h3>BRIGHT WORLD.</h3>
              <p>You can get quality of LED light . Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
              </div>
              <div className="col-md-3 col-10 mx-auto footer_links flex">
              <div className="f-product">
               <h3>PRODUCTS</h3>
                <ul> 
                  <li><NavLink to="/">Wall Light</NavLink></li>
                  <li><NavLink to="/">LED Light</NavLink></li>
                  <li><NavLink to="/">Smart Light</NavLink></li>
                  <li><NavLink to="/">LED Strip</NavLink></li>
                </ul>
             </div>
              </div>
              <div className="col-md-3 col-10 mx-auto footer_links flex">
              <div className="f-usefulllinks">
               <h3>USEFULL LINKS</h3>
                <ul> 
                  <li><NavLink to="/">Your Acount</NavLink></li>
                  <li><NavLink to="/">Become an Affiliate</NavLink></li>
                  <li><NavLink to="/">Shipping Rates</NavLink></li>
                  <li><NavLink to="/">Help</NavLink></li>
                </ul>
             </div>
              </div>     
              <div className="col-md-3 col-10 mx-auto footer_links">
              <div className="f-Contact">
               <h3>CONTACTS</h3>
                <ul> 
                  <li><NavLink to="/">New York, NY 10012, US</NavLink></li>
                  <li><NavLink to="/">info@gmail.com</NavLink></li>
                  <li><NavLink to="/">+ 01 234 567 88</NavLink></li>
                  <li><NavLink to="/">+ 01 234 567 89</NavLink></li>
                </ul>
             </div>
              </div>     
               <hr style={{color:"white"}}    />
                       <div className="sub_footer">
                         <NavLink to="/" >
                         <p>© 2023 Copyright: <strong style={{color:"#00b1ff"}}>DEVELOPED BY TEXAS</strong></p>
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

export default Footer
