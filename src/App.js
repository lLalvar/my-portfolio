import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  const portfolioRef = useRef()
  const footerRef = useRef()

  useEffect(() => {
    Aos.init()
  }, [])

  // {
  //     duration: 1500,
  //     once: true,
  //   }

  const throttle = (func, limit) => {
    let inThrottle
    return function () {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  function handleScroll() {
    Aos.init({
      duration: 1500,
      once: true,
    })
  }

  handleScroll = throttle(handleScroll, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  window.addEventListener('load', Aos.refresh)

  return (
    <div className='App'>
      <Header portfolioRef={portfolioRef} footerRef={footerRef} />
      <Main />
      <Portfolio portfolioRef={portfolioRef} />
      <Footer footerRef={footerRef} />
    </div>
  )
}

export default App
