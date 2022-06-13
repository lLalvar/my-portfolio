import styles from '../styles/Header.module.css'
import { Colors } from '../helpers/Colors'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h2 className={styles.logoTitle}>Lalvar</h2>
      <svg
        className={styles.logoBg}
        width='283'
        height='182'
        viewBox='0 0 283 182'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_145_12)'>
          <path
            d='M230.936 83.6491C227.049 106.671 193.609 103.039 181.344 110.295C169.278 117.333 169.051 121.742 154.34 124.692C139.587 127.487 130.346 115.501 118.058 113.996C106.053 112.582 90.9611 121.495 79.5341 116.453C68.3894 111.5 55.5917 106.163 56.6236 98.4435C57.6141 90.5698 72.4342 80.3136 75.807 67.832C79.4209 55.2858 71.5875 40.5142 78.0465 31.8368C84.3058 23.3783 105.539 33.027 121.648 34.3339C137.999 35.5762 148.366 27.5324 159.138 31.0964C175.052 40.7188 179.244 38.2967 194.955 40.0414C210.665 41.7861 232.933 42.9317 239.222 50.0126C245.752 57.0289 230.936 66.2549 230.936 83.6491Z'
            fill='url(#paint0_linear_145_12)'
          />
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_145_12'
            x1='41.1653'
            y1='35.639'
            x2='181.383'
            y2='171.652'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#b86038' />
            <stop offset='1' stopColor={Colors.primary} />
          </linearGradient>
          <clipPath id='clip0_145_12'>
            <rect
              width='159.762'
              height='249.553'
              fill='white'
              transform='translate(241.049 -37) rotate(75)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Logo
