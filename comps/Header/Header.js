import Link from "next/link"
import styles from "../../styles/Header/Header.module.css"
import Hamburger from "./Hamburger"

export default function Header() {
  return (
    <header className={styles.header}>
      <Hamburger />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="#"><a className={styles.link}>Home</a></Link>
          </li>
          <li>
            <Link href="#"><a className={styles.link}>Works</a></Link>
          </li>
          <li>
            <Link href="#"><a className={styles.link}>Contact</a></Link>
          </li>
          <li>
            <Link href="#"><a className={styles.link}>About</a></Link>
          </li>
        </ul>
      </nav>    
    </header>
  )
}