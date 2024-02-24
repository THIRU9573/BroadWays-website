import React from 'react'
import './Header.css'

import logo from '../../Images/logo.png';



function Header() {
  return (
    <div>
      <header>
          <div className="header">
              <div className="header-top">
                <a href="#">Advertise</a>
                <a href="#">Work With Us</a>
                <a href="#">About Us</a>
              </div>
              <div className="header-two">
                <div className=" row header-content">
                  <div className="col-4 logo">
                    <i className="fa-solid fa-bars"></i>
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="col-4 search-bar" >
                    <input type="text" placeholder='Search ...'/>
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="col-4 social-media">
                    <div className="network-icons">
                      <i class="fa-brands fa-whatsapp"></i>
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-x-twitter"></i>
                      <i class="fa-brands fa-linkedin-in"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-youtube"></i>
                      <a href="#"><i class="fa-regular fa-circle-user"></i></a>
                    </div>  
                  </div>
                </div>  
              </div>
              <div className="header-bottom">
                <a href="#">City Guides</a>
                <a href="#">Life Styles<i class="fa-solid fa-angle-down"></i></a>
                <a href="#">Entertainment<i class="fa-solid fa-angle-down"></i></a>
                <a href="#">Travel</a>
                <a href="#">Food</a>
                <a href="#">Tech<i class="fa-solid fa-angle-down"></i></a>
                <a href="#">Entertainment<i class="fa-solid fa-angle-down"></i></a>
                <a href="#">Money</a>
                <a href="#">Health</a>
                <a href="#">Web Stories</a>
                <a href="#">Videos<i class="fa-solid fa-angle-down"></i></a>
              </div>
          </div>
      </header>          
    </div>
  )
}

export default Header
