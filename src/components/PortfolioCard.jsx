import 'aos/dist/aos.css'
import styles from '../styles/PortfolioCard.module.css'

const PortfolioCard = ({ img, title, url, AOSDelay }) => {
  return (
    <div
      data-aos='zoom-in'
      data-aos-delay={AOSDelay}
      data-aos-offset={300}
      className={styles.card}
    >
      <a href={url} target='_blank'>
        <div className={styles.overlay}>
          <div className={styles.wave}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
              <path
                fillOpacity='1'
                d='M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
              ></path>
            </svg>
          </div>
          <div className={styles.title}>
            <h4>{title}</h4>
          </div>
        </div>
        <img src={img} alt='my work image' />
      </a>
    </div>
  )
}

export default PortfolioCard
