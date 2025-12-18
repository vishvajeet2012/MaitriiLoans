import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide, slide, scale } from '../animation';
import Link from 'next/link';
import Curve from './Curve';
import Footer from './Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
     {
    title: "About",
    href: "/about",
  },

  {
    title: "Products",
    href: "#", // Placeholder
    subItems: [
        { title: "Home Loan", href: "/product/home-loan" },
        { title: "Business & Personal Loan", href: "/product/personal-loan" },
        { title: "Vehicle Loan", href: "/product/vehicle-loan" },
        { title: "Mortgage Loan", href: "/product/mortgage" },
        { title: "MSME", href: "/product/msme" },
    ]
  },
 
 

  {
    title: "Contact",
    href: "/contact",
  },
]
///// fotter comment out hai we can  use it later
// hide the text for now beacuse it doesnt look good 
export default function Navigation() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [expandedProduct, setExpandedProduct] = useState(false);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          {/* <div className={styles.header}>
            <p>Maitrii Loans</p>
          </div> */}
          {
            navItems.map((data, index) => {
                if (data.subItems) {
                     return (
                        <div key={index} className="flex flex-col">
                            <motion.div 
                                className={styles.link} 
                                onMouseEnter={() => {setSelectedIndicator(data.href)}}
                                onClick={() => setExpandedProduct(!expandedProduct)}
                                variants={slide} 
                                custom={index} 
                                initial="initial" 
                                animate="enter" 
                                exit="exit"
                                style={{cursor: 'pointer'}}
                            >
                                <motion.div 
                                    variants={scale} 
                                    animate={selectedIndicator == data.href ? "open" : "closed"} 
                                    className={styles.indicator}>
                                </motion.div>
                                <div className="flex items-center gap-2">
                                    <span>{data.title}</span>
                                    {expandedProduct ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                                </div>
                            </motion.div>

                            <AnimatePresence>
                                {expandedProduct && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col pl-8 overflow-hidden"
                                        style={{ fontSize: '18px' }}
                                    >
                                        {data.subItems.map((sub, i) => (
                                           <NavLink
                                                key={i}
                                                data={{ ...sub, index: i }}
                                                isActive={selectedIndicator == sub.href}
                                                setSelectedIndicator={setSelectedIndicator}
                                            />
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                     )
                }

              return <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}>
              </NavLink>
            })
          }
        </div>
         {/* <Footer/> */}
      </div>
      <Curve />
    </motion.div>
  )
}

function NavLink({data, isActive, setSelectedIndicator, className}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={`${styles.link} ${className || ''}`}
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
}