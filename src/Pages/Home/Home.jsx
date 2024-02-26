import React from 'react'
import home_image from '../../Images/home_image.png'
import './Home.css'

function Home() {
  return (
    <section>
      <img src={home_image} alt="home_image"  className='home_image'/> 

      <div className=" row guides">
        <div className="city-guides">
          <h3><i class="fa-regular fa-file-magnifying-glass"></i>City Guides</h3>
        </div>
        <div className="life-style"></div>
      </div>   
    </section>
      
    
  )
}

export default Home
