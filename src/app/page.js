'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import { Howtogetloans } from '@/components/Landing/howLoans/HowtogetLoans';
import WhyChooseUs from '@/components/Landing/WhyChosseuse';
import OurProduct from '@/components/Landing/ourProdcut';
import NetworkMap from '@/components/Landing/rajasthanMap';
import YourNextFinanclegoal from '@/components/Landing/YourNextFinanclegoal';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Howtogetloans />
      <OurProduct />
      <WhyChooseUs />
      <YourNextFinanclegoal/>
      <NetworkMap />
      {/* <Projects />
      <SlidingImages />
      */}
      {/* <Contact />  */}
    </main>
  ) 
}
