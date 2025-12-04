'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import maitriloans from "../../../public/images/MaitriiLoans.png"

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname, isActive])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        
        let mm = gsap.matchMedia();

        mm.add({
          
            isDesktop: "(min-width: 769px)",
            isMobile: "(max-width: 768px)",
        }, (context) => {
            let { isDesktop, isMobile } = context.conditions;

            if(isDesktop) {
                // Desktop logic: Button starts hidden (scale 0) and appears on scroll
                gsap.to(button.current, {
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: 0,
                        end: window.innerHeight,
                        onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                        onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"}, setIsActive(false))}
                    }
                });
            } 
            
            if(isMobile) {
                gsap.set(button.current, { scale: 1 });
            }
        });

        // Cleanup function
        return () => mm.revert();
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.name}>
                    {/* <img src={maitriloans.src} className={styles.maitriLogo}  alt="Maitrii Loans Logo"/> */}
                </div>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Work</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>About</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>

        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}