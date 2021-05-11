import styles from "../../styles/Header/Hamburger.module.css"

export default function Hamburger({hamburgerOpen, changeHamburgerOpen}) {

  const hambiLineTopStyle = {
    transform: hamburgerOpen ? "translate(0, 0.7rem) rotate(-45deg)" : "translate(0, 0) rotate(0)",
  }

  const hambiLineMiddleStyle = {
    transform: hamburgerOpen ? "rotate(45deg)" : "rotate(0)",
  }

  const hambiLinBottomStyle = {
    transform: hamburgerOpen ? "translate(7rem, 0)" : "translate(0, 0)",
  }

  return (
    <div className={styles.hamburger} onClick={() => changeHamburgerOpen(hamburgerOpen)}>
      <div className={styles.hamburgerLine} style={hambiLineTopStyle}/>
      <div className={styles.hamburgerLine} style={hambiLineMiddleStyle}/>
      <div className={styles.hamburgerLine} style={hambiLinBottomStyle}/>
    </div>
  )
}