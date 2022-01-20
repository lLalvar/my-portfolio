import { FaFacebook, FaGithub, FaGithubSquare } from 'react-icons/fa'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillTwitterCircle, AiFillPhone } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
import { ImMail4 } from 'react-icons/im'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <div className='footer__content-wrapper'>
            <h4>Contact Information</h4>
            <div className='footer__info'>
              <div className='footer__info-wrapper'>
                <div className='footer__icon'>
                  <ImMail4 />
                </div>
                <p>mail@example.com</p>
              </div>
              <div className='footer__info-wrapper'>
                <div className='footer__icon icon-bg'>
                  <AiFillPhone />
                </div>
                <p>(123) 533-343-344</p>
              </div>
              <div className='footer__info-wrapper'>
                <div className='footer__icon icon-bg'>
                  <IoLocationSharp />
                </div>
                <p>Armenia, Yerevan</p>
              </div>
            </div>
          </div>
          <div className='footer__content-wrapper'>
            <h4>Social Media</h4>
            <div className='footer__info'>
              <a href='https://www.linkedin.com/in/lalvar/' target='_blank'>
                <div className='footer__info-wrapper'>
                  <div className='footer__icon footer__linkedin-icon'>
                    <TiSocialLinkedinCircular />
                  </div>
                  <p>Linkedin</p>
                </div>
              </a>
              <a href='https://twitter.com/ILalvar' target='_blank'>
                <div className='footer__info-wrapper'>
                  <div className='footer__icon footer__twitter-icon'>
                    <AiFillTwitterCircle />
                  </div>
                  <p>Twitter</p>
                </div>
              </a>
              <a
                href='https://www.facebook.com/mnacakanyan.lalvar'
                target='_blank'
              >
                <div className='footer__info-wrapper'>
                  <div className='footer__icon'>
                    <FaFacebook />
                  </div>
                  <p>Facebook</p>
                </div>
              </a>

              <a href='https://github.com/lLalvar' target='_blank'>
                <div className='footer__info-wrapper'>
                  <div className='footer__icon'>
                    <FaGithub />
                  </div>
                  <p>Github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
