import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/pngAvatar/1.png'
import AVTR2 from '../../assets/pngAvatar/2.png'
import AVTR3 from '../../assets/pngAvatar/3.png'
import AVTR4 from '../../assets/pngAvatar/4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avater: AVTR1,
    name: "Peter Dimakos",
    review: "They did the job correctly and quickly. Very professional, very efficient and just an overall good business relationship. He responded to my job too fast and get it done as I need. Must, I will hire him again."
  },
  {
    avater: AVTR2,
    name: "Yau Tsim Mong",
    review: "Mahabubur found interesting leads for me. I was happy with the work done. Some minor issues that we had along the process were probably related to clear instructions. But quick and occurred."
  },
  {
    avater: AVTR3,
    name: "Samat Davletshin",
    review: "Mahabubur is an amazing team player and does his job excellently and very quickly! I will work with Mahabubur for future projects for sure! From our experience, we would highly recommend."
  },
  {
    avater: AVTR4,
    name: "Hilary Barr",
    review: "Great work. My heartfelt thanks to you for your support, fast communication and professionalism. Hope to see you around very soon. He was amazing he extremely experienced kind of work!"
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

        {
          data.map(({ avater, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">

                <div className="client_avatar">
                  <img src={avater} alt="" />
                </div>

                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>

              </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials