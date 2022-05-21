import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {SiTwitter} from 'react-icons/si'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MAHABUB</a>

    <ul className="parmalink">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://www.facebook.com/mahabubrahman444"><BsFacebook /></a>
      <a href="https://www.instagram.com/md_mahabub_r/"><AiFillInstagram /></a>
      <a href="https://twitter.com/mahabub_level"><SiTwitter /></a>
      <a href="https://www.youtube.com/channel/UC61RpzlxUDZva1HQOAiPr6Q"><BsYoutube /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Mahabubur Rahman. All Right Reserved</small>
    </div>

    </footer>
  )
}

export default Footer