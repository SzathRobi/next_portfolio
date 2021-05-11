import { useState } from "react"
import Link from "next/link"
import styles from "../../styles/Header/Header.module.css"
import Hamburger from "./Hamburger"

export default function Header() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const changeHamburgerOpen = (hamburgerOpen) => setHamburgerOpen(!hamburgerOpen)

  const [whichTab, setWhichTab] = useState(1)
  const changeWhichTab = (num) => setWhichTab(num)

  const navStyle = {
    transform: hamburgerOpen ? "translate(0, 0)" : "translate(9rem, 0)",
    borderTopLeftRadius: hamburgerOpen ? "1rem" : "5rem",
    borderBottomLeftRadius: hamburgerOpen ? "1rem" : "5rem",
  }

  const activeTab = (num) => (
    {
      color: whichTab === num ? "#159aa3" : "#000"
    }
  )

  return (
    <header className={styles.header}>
      <Hamburger hamburgerOpen={hamburgerOpen} changeHamburgerOpen={changeHamburgerOpen}/>
      <nav className={styles.nav} style={navStyle}>
        <ul className={styles.ul}>
          <li onClick={() => changeWhichTab(1)} style={activeTab(1)} className={styles.li}>
            <Link href="#" ><a className={styles.link}>Home</a></Link>
          </li>
          <li onClick={() => changeWhichTab(2)} style={activeTab(2)} className={styles.li}>
            <Link href="#"><a className={styles.link}>Works</a></Link>
          </li>
          <li onClick={() => changeWhichTab(3)} style={activeTab(3)} className={styles.li}>
            <Link href="#"><a className={styles.link}>Contact</a></Link>
          </li>
          <li onClick={() => changeWhichTab(4)} style={activeTab(4)} className={styles.li}>
            <Link href="#"><a className={styles.link}>About</a></Link>
          </li>
        </ul>
      </nav>    
    </header>
  )
}