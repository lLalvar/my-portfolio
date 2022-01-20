import PortfolioCard from './PortfolioCard'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import image from './assets/cardImages/image.jpg'
import image1 from './assets/cardImages/image1.jpg'
import image2 from './assets/cardImages/image2.jpg'
import image3 from './assets/cardImages/image3.jpg'
import image4 from './assets/cardImages/image4.jpg'
import image5 from './assets/cardImages/image5.jpg'
import image6 from './assets/cardImages/image6.jpg'
import image7 from './assets/cardImages/image7.jpg'

const cards = [
  {
    id: 1,
    path: image,
    title: 'Random User API',
    url: 'https://react-random-user-api.netlify.app/',
  },
  {
    id: 2,
    path: image1,
    title: 'Form Input',
    url: 'https://react-form-no-framewoek.netlify.app/',
  },
  {
    id: 3,
    path: image2,
    title: 'Calculator App',
    url: 'https://llalvar.github.io/Calculator_App/',
  },
  {
    id: 4,
    path: image3,
    title: 'ToDo App',
    url: 'https://llalvar.github.io/Frontend-Mentor_Todo-app/',
  },
  {
    id: 5,
    path: image4,
    title: 'Splitter',
    url: 'https://llalvar.github.io/Ftontend-Mentor_tip-calculator-app/',
  },
  {
    id: 6,
    path: image5,
    title: 'HTML, CSS Website',
    url: 'https://llalvar.github.io/htmlCss/',
  },
  {
    id: 7,
    path: image6,
    title: 'Portfolio',
    url: 'https://llalvar.github.io/Portfolio/',
  },
  {
    id: 8,
    path: image7,
    title: 'GPT-3',
    url: 'https://gpt3-react-mastery.netlify.app/',
  },
]

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 })
  }, [])
  return (
    <div className='portfolio' id='portfolio'>
      <div className='wave1'></div>
      <div className='portfolio__bg'>
        <div className='portfolio__title'>
          <h3 data-aos='fade-down' data-aos-duration='1500'>
            Portfolio
          </h3>
        </div>
        <div className='cards'>
          {cards.map((card) => (
            <PortfolioCard
              key={card.id}
              img={card.path}
              title={card.title}
              url={card.url}
            />
          ))}
        </div>
      </div>
      <div className='wave2'></div>
    </div>
  )
}

export default Portfolio
