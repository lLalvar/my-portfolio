import styles from '../styles/Header.module.css'
import ScrollTopBtn from './ScrollTopBtn'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'

import 'aos/dist/aos.css'

const Header = ({ portfolioRef, footerRef }) => {
  const scrollToElement = (e) => {
    const id = e.target.id
    if (id === 'portfolioBtn') {
      portfolioRef.current.scrollIntoView()
    } else if (id === 'footerBtn') {
      footerRef.current.scrollIntoView()
    }
  }

  return (
    <header className={styles.container}>
      <Logo />
      <nav>
        <ScrollTopBtn />
        <HamburgerMenu portfolioRef={portfolioRef} footerRef={footerRef} />
        <div className={styles.navContainer}>
          <div className={`${styles.navItem} ${styles.active}`}>
            <h3 className={styles.title}>Home</h3>
            <div className={`${styles.underline} ${styles.active}`}></div>
          </div>
          <div
            onClick={(e) => scrollToElement(e)}
            id='portfolioBtn'
            className={styles.navItem}
          >
            <h3 className={styles.title}>Portfolio</h3>
            <div className={styles.underline}></div>
          </div>
          <div
            onClick={(e) => scrollToElement(e)}
            id='footerBtn'
            className={styles.navItem}
          >
            <h3 className={styles.title}>Contact</h3>
            <div className={styles.underline}></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
