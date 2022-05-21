import React from 'react'
import './about.css'
import ME from '../../assets/myJpg.png'
import { MdWork } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {GoProject} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Mahabubur Rahman" />
          </div>
        </div>

        <div className="about_contant">
          <div className="about_cards">
            <article className='about_card'>
              <MdWork className='about_icon' />
              <h5>Exprience</h5>
              <small>6+ Yeard Working</small>
            </article>
            <article className='about_card'>
              <FaUsers className='about_icon' />
              <h5>Clients</h5>
              <small>160+ Worldwide</small>
            </article>
            <article className='about_card'>
              <GoProject className='about_icon' />
              <h5>Projects</h5>
              <small>200+ Completed</small>
            </article>
          </div>

        <p>
        Hello, I am Mahabubur Rahman. I Have Solid Knowledge In Programming And My Works Are Not Only Enchanting But Also Integrated with Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Audition, Adobe XD, Virtual Assistant, Social Media Marketing. I have Developed Various Websites, Branding Package, Admin Support, Digital Marketing. I Am Also Skillful In Programming Languages like HTML, HTML 5, CSS, CSS 3, JavaScript, Bootstrap, Bootstrap 5, React, NodeJS, MongoDB, Git, and GitHub, Front-End Development, Back-End languages, Database storage, design skills, Node Package Manager, Soft skills.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About