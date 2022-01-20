import 'aos/dist/aos.css'

const PortfolioCard = ({ img, title, url }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='1000' className='card'>
      <a href={url} target='_blank'>
        <div className='card__overlay'>
          <div className='card__wave'></div>
          <div className='card__title'>
            <h4>{title}</h4>
          </div>
        </div>

        <img src={img} alt='my work' />
      </a>
    </div>
  )
}

export default PortfolioCard
