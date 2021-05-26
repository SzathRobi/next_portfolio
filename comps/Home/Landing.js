import Image from 'next/image'
import styles from "../../styles/Home/Landing.module.css"

export default function Landing() {
    return (
        <section className={styles.landing}>
        <section className={styles.landingContainer}>
          <div className={styles.imgContainer}>
            <Image 
              src="/me.svg" 
              alt="illustration about me" 
              layout="fill" 
              priority="true"
            />
          </div>
          <div className={styles.coffeeContainer}>
            <div className={styles.coffeeSteam}/>
            <div className={styles.coffeeSteam}/>
            <div className={styles.coffeeSteam}/>
            <div className={styles.coffeeSteam}/>
          </div>
        </section>
        <section className={styles.landingIntro}>
          <article className={styles.intro}>
          <h1 className={styles.introText} id={styles.landingText}>Hello, my name is Robert</h1>
          <h2 className={styles.introText} id={styles.landingSubText}>I am a web developer</h2>
          <h3 className={styles.introText} id={styles.landingSubSubText}>My goal is to help people bring their online business to the next level!</h3>
          </article>
          <section className={styles.ctaContainer}>
            <button className={styles.cta}><span>My Services</span></button>
            <button className={styles.cta}><span>My Works</span></button>
          </section>
        </section>
        

      </section>
    )
}