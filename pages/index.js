import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home/Home.module.css'
import Design from '../comps/Home/Design'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Design />
      <section className={styles.landing}>
        <article className={styles.intro}>
          <h1 className={styles.introText} id={styles.landingText}>Hello, my name is Robert</h1>
          <h2 className={styles.introText} id={styles.landingSubText}>I am a web developer</h2>
          <h3 className={styles.introText} id={styles.landingSubSubText}>My goal is to help people bring their online business to the next level!</h3>
        </article>
        <div className={styles.imgContainer}>
          <Image src="/me.svg" layout="fill" />
        </div>
      </section>
      
    </div>
  )
}
