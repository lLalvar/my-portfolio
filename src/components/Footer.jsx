import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { SiUpwork } from 'react-icons/si'
import styles from '../styles/Footer.module.css'
import FooterItem from './FooterItem'
import image from '../assets/map.jpg'
import FooterBg1 from '../assets/bg-images/FooterBg1'
import FooterBg2 from '../assets/bg-images/FooterBg2'

const Footer = ({ footerRef }) => {
  return (
    <footer ref={footerRef}>
      <div className={styles.container}>
        <FooterBg1 />
        <FooterBg2 />
        <div className={styles.wrapper}>
          <div className={styles.itemsWrapper}>
            <h4 className={styles.title}>Social Media</h4>
            <FooterItem
              title={'Github'}
              icon={<FaGithub />}
              link='https://github.com/lLalvar'
            />
            <FooterItem
              title={'Upwork'}
              icon={<SiUpwork />}
              link='https://www.upwork.com/freelancers/~01a6676fe3936df9cb?viewMode=1'
            />
            <FooterItem
              title={'LinkedIn'}
              icon={<FaLinkedinIn />}
              link='https://www.linkedin.com/in/lalvar/'
            />
            <FooterItem
              title={'Twitter'}
              icon={<FaTwitter />}
              link='https://twitter.com/ILalvar'
            />
            <FooterItem
              title={'Facebook'}
              icon={<FaFacebook />}
              link='https://www.facebook.com/mnacakanyan.lalvar'
            />
          </div>
          <div className={styles.locationContainer}>
            <h4 className={styles.title}>Location</h4>

            <div className={styles.locationWrapper}>
              <FooterItem
                title={'Armenia, Yerevan'}
                icon={<IoLocationSharp />}
                link='https://www.google.com/maps/place/Yerevan,+Armenia/@40.1733279,44.5233817,10.75z/data=!4m5!3m4!1s0x406aa2dab8fc8b5b:0x3d1479ae87da526a!8m2!3d40.1872023!4d44.515209'
              />
              <a
                href='https://www.google.com/maps/place/Yerevan,+Armenia/@40.1733279,44.5233817,10.75z/data=!4m5!3m4!1s0x406aa2dab8fc8b5b:0x3d1479ae87da526a!8m2!3d40.1872023!4d44.515209'
                target='_blank'
                rel='noreferrer'
              >
                <img className={styles.img} src={image} alt='Location on Map' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
