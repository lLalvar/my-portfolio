import HeroImg from './../assets/hero.png'
import { FaFacebook } from 'react-icons/fa'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillTwitterCircle } from 'react-icons/ai'
import styles from '../styles/Main.module.css'
import MainBg from '../components/MainBg'

const Main = () => {
  return (
    <main className={styles.container}>
      <MainBg />
      <div className={styles.text} data-aos='fade-up' data-aos-duration='2000'>
        <h1 className={styles.title}>
          Hi! I Am <br /> <span>Lalvar</span>
        </h1>
        <p className={styles.desc}>I am a Front-end React developer.</p>
      </div>
      <div className={styles.hero} data-aos='zoom-in' data-aos-duration='2000'>
        <div className={styles.img}>
          <img src={HeroImg} alt='hero image' />
        </div>
        <a href='https://twitter.com/ILalvar' target='_blank' rel='noreferrer'>
          <div className={`${styles.twitterWrapper} ${styles.iconWrapper}`}>
            <AiFillTwitterCircle
              className={`${styles.twitter} ${styles.icon}`}
            />
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/lalvar/'
          target='_blank'
          rel='noreferrer'
        >
          <div className={`${styles.linkedinWrapper} ${styles.iconWrapper}`}>
            <TiSocialLinkedinCircular
              className={`${styles.linkedin} ${styles.icon}`}
            />
          </div>
        </a>
        <a
          href='https://www.facebook.com/mnacakanyan.lalvar'
          target='_blank'
          rel='noreferrer'
        >
          <div className={`${styles.facebookWrapper} ${styles.iconWrapper}`}>
            <FaFacebook className={`${styles.facebook} ${styles.icon}`} />
          </div>
        </a>
      </div>
    </main>
  )
}

export default Main
