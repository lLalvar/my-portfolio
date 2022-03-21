import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import styles from '../styles/Footer.module.css'
import FooterItem from './FooterItem'
import { Colors } from '../helpers/Colors'
import image from '../assets/map.jpg'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className={styles.container}>
        <div className={styles.svg}>
          <svg
            width='207'
            height='194'
            viewBox='0 0 207 194'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M29.4038 37.1477C77.114 -20.1493 177.17 -2.96291 195.854 37.2803C215.866 80.3857 204.774 142.616 193.692 107.292L187.699 91.1802L181.143 71.4356C153.061 -8.06461 101.574 26.7884 89.6664 28.4402C34.7818 36.0535 61.0784 52.3408 37.4934 76.9101C13.9084 101.479 11.5214 140.059 29.1376 149.682C46.7539 159.305 44.8145 175.373 58.6102 180.702C72.4059 186.031 76.4019 174.289 81.0109 168.462C85.6198 162.635 128.638 163.627 75.9809 189.74C23.3235 215.853 -35.92 115.598 29.4038 37.1477Z'
              fill={Colors.primary}
              fillOpacity='0.20'
            />
          </svg>
        </div>
        <div className={styles.svg1}>
          <svg
            width='207'
            height='194'
            viewBox='0 0 207 194'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M29.4038 37.1477C77.114 -20.1493 177.17 -2.96291 195.854 37.2803C215.866 80.3857 204.774 142.616 193.692 107.292L187.699 91.1802L181.143 71.4356C153.061 -8.06461 101.574 26.7884 89.6664 28.4402C34.7818 36.0535 61.0784 52.3408 37.4934 76.9101C13.9084 101.479 11.5214 140.059 29.1376 149.682C46.7539 159.305 44.8145 175.373 58.6102 180.702C72.4059 186.031 76.4019 174.289 81.0109 168.462C85.6198 162.635 128.638 163.627 75.9809 189.74C23.3235 215.853 -35.92 115.598 29.4038 37.1477Z'
              fill={Colors.primary}
              fillOpacity='0.10'
            />
          </svg>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.itemsWrapper}>
            <h4 className={styles.title}>Social Media</h4>
            <a href='https://www.linkedin.com/in/lalvar/' target='_blank'>
              <FooterItem title={'LinkedIn'} icon={<FaLinkedinIn />} />
            </a>
            <a href='https://twitter.com/ILalvar' target='_blank'>
              <FooterItem title={'Twitter'} icon={<FaTwitter />} />
            </a>
            <a
              href='https://www.facebook.com/mnacakanyan.lalvar'
              target='_blank'
            >
              <FooterItem title={'Facebook'} icon={<FaFacebook />} />
            </a>
            <a href='https://github.com/lLalvar' target='_blank'>
              <FooterItem title={'Github'} icon={<FaGithub />} />
            </a>
          </div>
          <div className={styles.locationContainer}>
            <h4 className={styles.title}>Location</h4>
            <a
              href='https://www.google.com/maps/place/Yerevan,+Armenia/@40.1733279,44.5233817,10.75z/data=!4m5!3m4!1s0x406aa2dab8fc8b5b:0x3d1479ae87da526a!8m2!3d40.1872023!4d44.515209'
              target='_blank'
            >
              <div className={styles.locationWrapper}>
                <FooterItem
                  title={'Armenia, Yerevan'}
                  icon={<IoLocationSharp />}
                />
                <img className={styles.img} src={image} alt='Location on Map' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
