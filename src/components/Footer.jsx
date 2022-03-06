import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
import { ImMail4 } from 'react-icons/im'
import styles from '../styles/Footer.module.css'
import FooterItem from './FooterItem'
import { Colors } from '../helpers/Colors'

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
              fill-opacity='0.20'
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
              fill-opacity='0.10'
            />
          </svg>
        </div>
        <div className={styles.wrapper}>
          <div>
            <h4 className={styles.title}>Contact Information</h4>
            <FooterItem title={'mail@example.com'} icon={<ImMail4 />} />
            <FooterItem title={'(123) 533-343-344'} icon={<AiFillPhone />} />
            <FooterItem title={'Armenia, Yerevan'} icon={<IoLocationSharp />} />
          </div>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
