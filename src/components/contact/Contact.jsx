import React from 'react'
import './contact.css'
import {HiMail} from 'react-icons/hi'
import {SiSkype} from 'react-icons/si'
import {AiFillBehanceCircle} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ye897ri', 'template_nq4wdqm', form.current, 'i2Zth3LZ-2PigzZDc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">

        <div className="contact_options">

          <article className="contact_option">
          <HiMail className='contact_options-icon' />
            <h4>Email</h4>
            <a href="mailto:message@mahabubr.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
          <SiSkype className='contact_options-icon' />
            <h4>Messanger</h4>
            <a href="https://m.me/mahabubrahman444" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
          <AiFillBehanceCircle className='contact_options-icon' />
            <h4>Behance</h4>
            <a href="https://www.behance.net/mahabub_r" target="_blank">Send a Message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Type Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        <a href="#about" className='scroll_top'>Scroll Top</a>

      </div>

    </section>
  )
}

export default Contact