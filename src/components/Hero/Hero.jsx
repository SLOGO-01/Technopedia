import React from 'react'
import "./Hero.css"
import menu from "../../assets/icons8-menu-50.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Lorem ipsum, dolor sit amet distinctio </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut earum tenetur neque autem quas, nesciunt distinctio.</p>
        <button className='btn'>Explore more <img src={menu} alt="" /></button>

      
      </div>
    </div>
  )
}

export default Hero
