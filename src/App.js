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

  // useEffect(() => {
  //   Aos.init()
  // }, [])

  // window.addEventListener('load', Aos.refresh)
  window.addEventListener('load', Aos.init())

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
