import PortfolioCard from './PortfolioCard'
import styles from '../styles/Portfolio.module.css'
import image1 from '../assets/card-images/image1.png'
import image2 from '../assets/card-images/image2.png'
import image3 from '../assets/card-images/image3.png'
import image4 from '../assets/card-images/image4.png'
import image5 from '../assets/card-images/image5.png'
import image6 from '../assets/card-images/image6.png'
import image7 from '../assets/card-images/image7.png'
import image8 from '../assets/card-images/image8.png'
import image9 from '../assets/card-images/image9.png'
import image10 from '../assets/card-images/image10.png'
import image11 from '../assets/card-images/image11.png'
import image12 from '../assets/card-images/image12.png'
import PortfolioBg from './PortfolioBg'

const cards = [
  {
    path: image12,
    AOSDelay: 0,
    title: 'Electronics Store',
    url: 'https://lalvar-electronics-store.netlify.app',
    githubUrl: 'https://github.com/lLalvar/Electronics-store',
  },
  {
    path: image11,
    AOSDelay: 200,
    title: 'Cryptoverse',
    url: 'https://lalvar-cryptoverse.netlify.app',
    githubUrl: 'https://github.com/lLalvar/cryptoverse',
  },
  {
    path: image10,
    AOSDelay: 400,
    title: 'React Recipe App',
    url: 'https://lalvar-react-recipe-app.netlify.app',
    githubUrl: 'https://github.com/lLalvar/React-Recip-App',
  },
  {
    AOSDelay: 0,
    path: image5,
    title: 'React Dashboard',
    url: 'https://lalvar-react-admin-dashboard.netlify.app/',
    githubUrl: 'https://github.com/lLalvar/react-admin-dashboard',
  },
  {
    AOSDelay: 200,
    path: image9,
    title: 'Pizza Ordering App',
    url: 'https://nextjs-pizza-ordering-app.netlify.app',
    githubUrl: 'https://github.com/lLalvar/Pizza-Ordering-App',
  },
  {
    AOSDelay: 400,
    path: image1,
    title: 'Random User API',
    url: 'https://react-random-user-api.netlify.app',
    githubUrl: 'https://github.com/lLalvar/React-random-user-api',
  },
  {
    AOSDelay: 0,
    path: image2,
    title: 'Form Input',
    url: 'https://react-form-no-framewoek.netlify.app',
    githubUrl: 'https://github.com/lLalvar/React-form_no-framework',
  },
  {
    AOSDelay: 200,
    path: image3,
    title: 'Calculator App',
    url: 'https://llalvar.github.io/Calculator_App',
    githubUrl: 'https://github.com/lLalvar/Calculator_App',
  },
  {
    AOSDelay: 400,
    path: image4,
    title: 'ToDo App',
    url: 'https://llalvar.github.io/Frontend-Mentor_Todo-app',
    githubUrl: 'https://github.com/lLalvar/Frontend-Mentor_Todo-app',
  },
  {
    AOSDelay: 0,
    path: image7,
    title: 'Bootstrap Website',
    url: 'https://lalvar-bootstrap-website.netlify.app',
    githubUrl: 'https://github.com/lLalvar/bootstrap-website',
  },
  {
    AOSDelay: 200,
    path: image6,
    title: 'Cocktail Website',
    url: 'https://lalvar-vuejs-cocktial.netlify.app',
    githubUrl: 'https://github.com/lLalvar/Vue.js-Cocktail-website',
  },
  {
    AOSDelay: 400,
    path: image8,
    title: 'GPT-3',
    url: 'https://gpt3-react-mastery.netlify.app',
    githubUrl: 'https://github.com/lLalvar/gpt3',
  },
]

const Portfolio = ({ portfolioRef }) => {
  return (
    <div className={styles.container} ref={portfolioRef}>
      <div className={styles.wave}>
        <svg
          width='300'
          height='35'
          viewBox='0 0 300 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 34.7884C60 34.7884 40.5 -11.7774 95 6.0902C136 23.5 140.324 -0.589757 160 0.155429C195.5 1.49991 172 13.0387 223 6.09015C257.48 1.39244 247 34.7884 300 34.7884C200 34.7884 100 34.7884 0 34.7884Z'
            fill='#fff'
          />
        </svg>
      </div>
      <div className={styles.cardsWrapper}>
        <div className={styles.title}>
          <h3
            className={styles.cardsTitle}
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            Portfolio
          </h3>
        </div>
        <PortfolioBg />
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <PortfolioCard
              key={index}
              img={card.path}
              title={card.title}
              url={card.url}
              githubUrl={card.githubUrl}
              AOSDelay={card.AOSDelay}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
