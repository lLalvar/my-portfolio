import styles from '../styles/Footer.module.css'

const FooterItem = ({ title, icon }) => {
  return (
    <div className={styles.infoWrapper}>
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  )
}

export default FooterItem
