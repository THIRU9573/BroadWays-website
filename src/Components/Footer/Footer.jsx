import React from 'react'
import './Footer.css'

import logo1 from '../../Images/logo1.png'

function Footer() {
  return (
      <footer>
        <div className="footer">
          <div className="footer-main">
            <div className="icons">
              <img src={logo1} alt="logo" />
              <div className="network">
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
            <div className="mostsearches">
              <h6>Most Searches</h6>
              <div className="sections">
                <div className="hacks">
                  <span>City Guides</span>
                  <span>Travel</span>
                  <span>Tech</span>
                  <span>Money</span>
                  <span>Life Hacks</span>
                  <span>Beauty & Body</span>
                  <span>Care</span>
                  <span>Videos</span>
                </div>
                <div className="hacks">
                  <span>Life Style</span>
                  <span>Food</span>
                  <span>Entertainment</span>
                  <span>Web Stores</span>
                </div>
              </div>
            </div>
            <div className="help">
              <h6>Help</h6>
              <span>Advertise</span>
              <span>Contact Us</span>
              <span>About Us</span>
              <span>Work with Us</span>
              <span>Privacy Palicy</span>
            </div>
            <div className="newsletter">
              <h6>NewsLetter</h6>
              <span>Subscribe to mailing list to receive daily updates to your inbox </span>
              <input type="text" placeholder='Your Email Address'/>
              <button className="subscribe" type='button'>Subscribe</button>
            </div>
          </div>
                               
        </div>
      </footer>
  )
}

export default Footer
