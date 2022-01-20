import './App.css'
import Header from './Header'
import Main from './Main'
import Portfolio from './Portfolio'
import Footer from './Footer'

function App() {
  return (
    <div className='App'>
      <div className='bg-svg1'>
        <svg
          width='768'
          height='671'
          viewBox='0 0 768 671'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M607.095 591.492C394.593 761.838 48.9641 627.455 11.3958 469.802C-28.8445 300.935 56.1776 86.2639 70.1202 220.775L79.8385 282.809L88.9245 358.258C131.548 663.274 341.223 576.015 385.048 578.774C587.048 591.492 504.782 514.043 607.096 443.274C709.409 372.506 710.048 229.774 657.548 130.774C605.048 31.7742 624.451 50.2709 597.472 54.9301L519.137 1.6962C747.048 -24.2256 898.048 358.258 607.095 591.492Z'
            fill='#FF7A00'
            fill-opacity='0.24'
          />
        </svg>
      </div>
      <div className='bg-svg2'>
        <svg
          width='1241'
          height='1019'
          viewBox='0 0 1241 1019'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M320.66 929.211C690.528 1160.27 1209.43 898.088 1237.09 647.78C1266.71 379.669 1089.28 60.0329 1094.29 270.778L1091.41 368.482L1092.22 486.888C1086.19 966.486 737.484 863.822 668.818 874.923C352.324 926.09 466.695 793.189 290.875 699.382C115.055 605.576 85.363 384.354 148.39 222.67C211.418 60.9864 184.488 92.6881 228.038 95.7127L341.066 0.972818C-24.1177 -3.74169 -185.755 612.849 320.66 929.211Z'
            fill='#FF7A00'
            fill-opacity='0.15'
          />
        </svg>
      </div>
      <Header />

      <Main />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
