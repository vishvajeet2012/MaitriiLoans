import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Maitrilogo from "../../../public/icons/whitelogo.png"
import MaitriiOrange from "../../../public/icons/orangelogo.png"
export default function Description() {

    const phrase = `Headquartered in Jaipur, Mentor Finmart Pvt. Ltd. (Maitrii Loans) stands as one of Rajasthan's most diversified and reliable NBFCs. Founded in 1989 and RBI-licensed since 2001, we've built a legacy of trust over three decades.
Since our dynamic leadership took the helm in 2019, we've invested heavily in cutting-edge infrastructure to deliver fast, seamless loans and personalized support—empowering customers across Rajasthan to seize opportunities and achieve financial freedom.`;
    const description = useRef(null);
    const isInView = useInView(description)

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>

                {/* Button Container Left */}
                <div className={styles.buttonContainer}>
                    <Rounded backgroundColor={"#FFFFFF"} className={styles.roundedButton}>
                        <Image src={Maitrilogo} alt="Maitrii Loans Logo" width={50} height={50} className={styles.whiteLogo} />
                        <Image src={MaitriiOrange} alt="Maitrii Loans Logo" width={50} height={50} className={styles.orangeLogo} />
                    </Rounded>
                </div>

                {/* Text Container Right */}
                <div className={styles.textContainer}>
                    <p className={styles.justifiedText}>
                        {
                            phrase.split(" ").map((word, index) => {
                                return (
                                    <span key={index} style={{ display: "inline" }}>
                                        <span className={styles.mask}>
                                            <motion.span 
                                                variants={slideUp} 
                                                custom={index} 
                                                animate={isInView ? "open" : "closed"} 
                                                key={index}
                                            >
                                                {word}
                                            </motion.span>
                                        </span>
                                        {/* Use a normal space character ' ' to allow browser justification */}
                                        {" "}
                                    </span>
                                )
                            })
                        }
                    </p>
                    {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                        The company&apos;s objective is to evolve into a comprehensive financial services provider, offering clients an effective means to attain both their short- and long-term financial aspirations.
                    </motion.p> */}
                </div>

            </div>
        </div>
    )
}