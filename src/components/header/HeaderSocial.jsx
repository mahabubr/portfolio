import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaDribbbleSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
      <a style={{ fontSize: "4rem" }} href="https://www.youtube.com/channel/UC61RpzlxUDZva1HQOAiPr6Q"><ImYoutube2 /></a>
      <a href="https://www.linkedin.com/in/mahabuburr/" target="blank"><FaLinkedin /></a>
      <a href="https://dribbble.com/mahabub_r/" target="blank"><FaDribbbleSquare /></a>
      <a href="https://github.com/mahabubr/" target="blank"><FaGithubSquare /></a>
    </div>
  )
}

export default HeaderSocial