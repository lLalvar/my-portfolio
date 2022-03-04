import 'aos/dist/aos.css'
import styles from '../styles/PortfolioCard.module.css'

const PortfolioCard = ({ img, title, url }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='1000' className={styles.card}>
      <a href={url} target='_blank'>
        <div className={styles.overlay}>
          <div className={styles.wave}></div>
          <div className={styles.title}>
            <h4>{title}</h4>
          </div>
        </div>

        <img src={img} alt='my work' />
      </a>
    </div>
  )
}

export default PortfolioCard
