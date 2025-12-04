'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import backendImage from "../../../public/images/back.png"
import ImageBook from "../../../public/images/booksHero.png"

export default function Home() {

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      {/* Background Image */}
      <Image
        src={backendImage}
        fill={true}
        alt="background"
        priority={true}
      />

      <div className={styles.contentContainer}>
        <div className={styles.staticContent}>
          <h1>Welcome To Maitrii Loans</h1>
          {/* Agar aapko image text ke bagal me chahiye */}
          <Image src={ImageBook} className={styles.ImageBook} alt="book image" />
        </div>
      </div>

    </motion.main>
  )
}