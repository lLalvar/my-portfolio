import HeroImg from './../assets/hero.png'
import { FaFacebook } from 'react-icons/fa'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillTwitterCircle } from 'react-icons/ai'
import styles from '../styles/Main.module.css'
import AOS from 'aos'
import MainBg from '../components/MainBg'

AOS.init()

const Main = () => {
  return (
    <main className={styles.container}>
      <MainBg />
      <div
        data-aos='fade-down'
        data-aos-duration='1500'
        className={styles.text}
      >
        <h1 className={styles.title}>
          Hi! I Am <br /> <span>Lalvar</span>
        </h1>
        <p className={styles.desc}>I am a Front-end React developer.</p>
      </div>
      <div className={styles.hero} data-aos='fade-up' data-aos-duration='1500'>
        <div className={styles.img}>
          <img src={HeroImg} alt='hero' />
        </div>
        <a href='https://twitter.com/ILalvar' target='_blank' rel='noreferrer'>
          <AiFillTwitterCircle className={`${styles.twitter} ${styles.icon}`} />
        </a>
        <a
          href='https://www.linkedin.com/in/lalvar/'
          target='_blank'
          rel='noreferrer'
        >
          <TiSocialLinkedinCircular
            className={`${styles.linkedin} ${styles.icon}`}
          />
        </a>
        <a
          href='https://www.facebook.com/mnacakanyan.lalvar'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook className={`${styles.facebook} ${styles.icon}`} />
        </a>
      </div>
    </main>
  )
}

export default Main
