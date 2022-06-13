import styles from '../styles/Footer.module.css'

const FooterItem = ({ title, icon, link }) => {
  return (
    <a href={link} target='_blank'>
      <div className={styles.infoWrapper}>
        <div className={styles.icon}>{icon}</div>
        <p>{title}</p>
      </div>
    </a>
  )
}

export default FooterItem
