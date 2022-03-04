import { useEffect, useState } from 'react'
import styles from '../styles/ScrollTopBtn.module.css'
import { RiArrowUpSLine } from 'react-icons/ri'

const ScrollTopBtn = () => {
  const [active, setActive] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const debounce = (fn, ms) => {
    let timeout
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments)
      }
      clearTimeout(timeout)
      timeout = setTimeout(fnCall, ms)
    }
  }

  function handleScroll() {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  handleScroll = debounce(handleScroll, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${
        scrollPosition > 400
          ? `${styles.returnBtn}`
          : `${styles.returnBtn} ${styles.hidden}`
      }`}
    >
      <a href='#'>
        <button
          className={styles.returnBtn}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <div
            className={`${
              active
                ? `${styles.returnBtn1} ${styles.active}`
                : `${styles.returnBtn1}`
            }`}
          >
            <RiArrowUpSLine />
          </div>
          <div
            className={`${
              active
                ? `${styles.returnBtn2} ${styles.active}`
                : `${styles.returnBtn2}`
            }`}
          >
            <RiArrowUpSLine />
          </div>
        </button>
      </a>
    </div>
  )
}

export default ScrollTopBtn
