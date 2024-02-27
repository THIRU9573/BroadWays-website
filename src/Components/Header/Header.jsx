import React, { useState } from 'react'
import './Header.css'

import logo from '../../Images/logo.png';



function Header() {
  const [clicked, setClicked] = useState(false);
  const [show, setHide] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const showMenu = () => {
      setHide(!show)
    }
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
                    <i className="fa-solid fa-bars" onClick={showMenu}></i>
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="col-4 search-bar" >
                    <input type="text" placeholder='Search ...'/>
                    <i className="fas fa-search"></i>
                  </div>
                  <div id='social-media' className="col-4 social-media">
                    <div className="network-icons">
                      <i class="fa-brands fa-whatsapp"></i>
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-x-twitter"></i>
                      <i class="fa-brands fa-linkedin-in"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-youtube"></i>
                      <a href="#"><i class="fa-regular fa-circle-user" onClick={handleClick}></i></a>
                    </div>  
                  </div>
                </div>  
              </div>
              <div id='header-bottom' className="header-bottom">
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

      {clicked && (
        <div id='welcome-broadways' className="welcome-broadways">
            <div className="broadways">
              <h3>Welcome to broadways</h3>
              <i class="fa-solid fa-xmark" onClick={handleClick}></i>
            </div>
            <div className="menu">
              <a href="#">My Dashboard</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
            <div className="icons">
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
      )}
      {show && (
        <div id='main-menu' className="main-menu">
          <div className="broadways">
            <h3>Welcome to broadways</h3>
            <i class="fa-solid fa-xmark" onClick={showMenu}></i>
          </div>
          <div className="menu-names">
            <a href="#">City Guides</a>
            <a href="#">Life Styles<i class="fa-solid fa-angle-down"></i></a>
            <a href="#">Entertaiment<i class="fa-solid fa-angle-down"></i></a>
            <a href="#">Travel</a>
            <a href="#">Food</a>
            <a href="#">Tech<i class="fa-solid fa-angle-down"></i></a>
            <a href="#">Entertainment<i class="fa-solid fa-angle-down"></i></a>
            <a href="#">Money</a>
            <a href="#">Health</a>
            <a href="#">Videos<i class="fa-solid fa-angle-down"></i></a>
            <a href="#">Advertise</a>
            <a href="#">Work with Us</a>
            <a href="#">About Us</a>
          </div>
          <div className="icons">
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      )} 
    </div>
  )
}

export default Header
