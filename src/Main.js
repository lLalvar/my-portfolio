import HeroImg from './assets/hero.png'
import { FaFacebook } from 'react-icons/fa'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillTwitterCircle } from 'react-icons/ai'
import 'aos/dist/aos.css'

const Main = () => {
  return (
    <main className='container'>
      <div data-aos='fade-down' data-aos-duration='1500' className='main__text'>
        <h1>
          Hi! I Am <br /> <span>Lalvar</span>
        </h1>
        <p>I am an artist, designer, and self-taught Front-End developer.</p>
      </div>
      <div className='hero' data-aos='fade-up' data-aos-duration='1500'>
        <div className='hero-img'>
          <img src={HeroImg} alt='hero' />
        </div>
        <a href='https://twitter.com/ILalvar' target='_blank'>
          <AiFillTwitterCircle className='twitter social-media-icon' />
        </a>
        <a href='https://www.linkedin.com/in/lalvar/' target='_blank'>
          <TiSocialLinkedinCircular className='linkedin social-media-icon' />
        </a>
        <a href='https://www.facebook.com/mnacakanyan.lalvar' target='_blank'>
          <FaFacebook className='facebook social-media-icon' />
        </a>
      </div>
    </main>
  )
}

export default Main
