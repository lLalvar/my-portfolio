import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { useRef } from 'react'

function App() {
  const portfolioRef = useRef()
  const footerRef = useRef()

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
