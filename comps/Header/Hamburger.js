import { useState } from "react"
import styles from "../../styles/Header/Hamburger.module.css"

export default function Hamburger() {
  
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const changeHamburgerOpen = (hamburgerOpen) => hamburgerOpen != hamburgerOpen

  

  return (
    <div className={styles.hamburger} onClick={() => changeHamburgerOpen(hamburgerOpen)}>
      <div id={styles.hamburgerLine1} className={styles.hamburgerLine}/>
      <div id={styles.hamburgerLine2} className={styles.hamburgerLine}/>
      <div id={styles.hamburgerLine3} className={styles.hamburgerLine}/>
    </div>
  )
}