import React from 'react'
import './footer.css';

const Footer = () => {
    
  return (
    <>
        <div className="footer">
           <p><a className='link' href='#home'>Back To Top</a><span class="material-symbols-outlined up-arrow">
arrow_upward
              </span>   </p>
              
              <div className="footer-divs">
                  <div className="footer-div1">
                      <h3 className='footer-div1-h3'>
                      Company
                      </h3>
                      <p className='footer-div1-p'> <a href=""> About Us </a> </p>
                      <p className='footer-div1-p'> <a href=""> Sell on Ecoyaan </a> </p>
                      <p className='footer-div1-p'> <a href=""> Careers </a> </p>
                  </div>

                  <div className="footer-div2">
                       <h3 className='footer-div1-h3'>
                       Links
                 </h3>
                      
                      <p className='footer-div1-p'><a href="">Privacy Policy</a></p>
                      
                      
                      <p className='footer-div1-p'>
                          <a href="">Terms of use</a>
                      </p>
                  </div>

                  <div className="footer-div3">
                      <h3 className='footer-div1-h3'>
                          Follow Us
                      </h3>
                      <div className="footer-icons">
                      <i className="fa-brands fa-instagram icons"></i>
                      <i class="fa-brands fa-linkedin icons"></i>
                      <i class="fa-brands fa-facebook icons"></i>
                      </div>
                      
                  </div>

                  <div className="footer-div4">
                      <h5>
                      Subscribe to receive updates on blogs, future launches and more !
                      </h5>
                      <input type="email" name="email" placeholder='Your Email Address' />
                      <p>
                      By subscribing, you agree to receive notifications
                      </p>
                      <p><a href="">Privacy Policy</a></p>
                      <button>Subscribe</button>
                  </div>

                  <div className='footer-divs-2'>
                      <div className="footer-div2-1">
                      <h3>Registered Address:</h3>
        <p>1-N-12T-781/1, Sri Krishna Vilasa,</p>
        <p>Urvastores, Ashoknagar(MR),</p>
        <p>Mangalore, Dakshina Kannada- 575006, Karnataka, India</p>
                      </div>
        
                  </div>
                  
      <div className="footer-div2-2">
        <h3>Legal Business Name:</h3>
        <p>Kindkarma E-Retail Private Limited</p>
        <p>CIN: U47912KA2023PTC182592</p>
        <p>Telephone: <a href="tel:+919980490777">+91 9980490777</a></p>
      </div>

              </div>
              <div className="copyrights">
              © 2023 - 2024, Ecoyaan TM
              </div>
      </div>
    </>
  )
}

export default Footer
