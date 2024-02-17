import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import MainBg from '../components/MainBg'
import styles from '../styles/Main.module.css'
import HeroImg from './../assets/hero.png'

const Main = () => {
  return (
    <main className={styles.container}>
      <MainBg />
      <div className={styles.text}>
        <h1 className={styles.title}>
          Hi! I Am <br /> <span>Lalvar</span>
        </h1>
        <p className={styles.desc}>I am a Web Developer.</p>
      </div>
      <div className={styles.hero}>
        <div className={styles.img}>
          <img src={HeroImg} alt='hero' />
        </div>
        <a href='https://twitter.com/ILalvar' target='_blank' rel='noreferrer'>
          <div className={`${styles.twitterWrapper}`}>
            <FaXTwitter className={`${styles.twitter} ${styles.icon}`} />
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
