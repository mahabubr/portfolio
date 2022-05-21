import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/prtfolio-img/pic1.svg'
import IMG2 from '../../assets/prtfolio-img/pic2.svg'
import IMG3 from '../../assets/prtfolio-img/pic3.svg'
import IMG4 from '../../assets/prtfolio-img/pic4.svg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Banking Lead List In Hong Kong",
    github: "https://github.com/mahabubr",
    demo: "https://docs.google.com/spreadsheets/d/1Z-iFUNnXSrqXGOMRTZvqd_AV5rkfzhHnqfsFYQm1GY8/edit?usp=sharing"
  },
  {
    id: 2,
    image: IMG2,
    title: "Logo Design for a Pet Shob",
    github: "https://github.com/mahabubr",
    demo: "https://dribbble.com/shots/18122673-Logo-Design-for-a-Pet-Shob?utm_source=Clipboard_Shot&utm_campaign=mahabub_r&utm_content=Logo%20Design%20for%20a%20Pet%20Shob&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=mahabub_r&utm_content=Logo%20Design%20for%20a%20Pet%20Shob&utm_medium=Social_Share"
  },
  {
    id: 3,
    image: IMG3,
    title: "Calcular UI / UX Design",
    github: "https://github.com/mahabubr",
    demo: "https://www.behance.net/gallery/143725615/Calcular-UI-UX-Design"
  },
  {
    id: 4,
    image: IMG4,
    title: "Release Soon",
    github: "https://github.com/mahabubr",
    demo: "https://dribbble.com/mahabub_r"
  },
  {
    id: 5,
    image: IMG4,
    title: "Release Soon",
    github: "https://github.com/mahabubr",
    demo: "https://dribbble.com/mahabub_r"
  },
  {
    id: 6,
    image: IMG4,
    title: "Release Soon",
    github: "https://github.com/mahabubr",
    demo: "https://dribbble.com/mahabub_r"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {
          data.map(({id, image, title, github,demo}, index) => {
            return(
              <article key={id} className="portfolio_item">

          <div className="portfolio_item-image">
            <img src={image} alt="Mahabub Work" />
          </div>

          <h3>{title}</h3>

          <div className='portfolio_item-cta'>
            <a href={github} className='btn' target="_blank" >Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>

        </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio