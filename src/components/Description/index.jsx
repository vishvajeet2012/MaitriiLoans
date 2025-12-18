import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Maitrilogo from "../../../public/icons/whitelogo.png"
import MaitriiOrange from "../../../public/icons/orangelogo.png"
export default function Description() {

    const phrase = "Mentor Finmart Pvt. Ltd. (Maitrii Loans), headquartered in Jaipur, is recognized as one of the most diversified finance companies in Rajasthan. Established in 1989, the company obtained its Non-Banking Financial Company (NBFC) license from the Reserve Bank of India in 2001. The current management assumed control of the organization in 2019. Since that time, Maitrii Loans has concentrated on enhancing its infrastructure and facilities to deliver reliable and timely services to its clientele.";
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
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                        The company&apos;s objective is to evolve into a comprehensive financial services provider, offering clients an effective means to attain both their short- and long-term financial aspirations.
                    </motion.p>
                </div>

            </div>
        </div>
    )
}