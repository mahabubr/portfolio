import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/PngMy.png'
import HeaderSocial from './HeaderSocial'
import TextAnimation from './TextAnimation'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        
        <h5>Hello! I'm</h5>
        <h1>Mahabubur Rahman</h1>
        <h5 className='text-light'>I"m</h5>
        <TextAnimation />
        <CTA />

        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Mahabubur Rahman" />
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header