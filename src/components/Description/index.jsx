import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Maitrilogo from "../../../public/images/MaitriiLoans.png"

export default function Index() {

    const phrase = "Mentor Finmart Pvt. Ltd. (Maitrii Loans), headquartered in Jaipur, is recognized as one of the most diversified finance companies in Rajasthan. Established in 1989, the company obtained its Non-Banking Financial Company (NBFC) license from the Reserve Bank of India in 2001. The current management assumed control of the organization in 2019. Since that time, Maitrii Loans has concentrated on enhancing its infrastructure and facilities to deliver reliable and timely services to its clientele.";
    const description = useRef(null);
    const isInView = useInView(description)

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                
                {/* Button Container Left */}
                <div className={styles.buttonContainer}>
                    {/* backgroundColor="#FFFFFF" pass kiya taaki animation white ho */}
                    <Rounded backgroundColor={"#FFFFFF"} className={styles.roundedButton}>
                        <img src={Maitrilogo.src} alt="Maitrii Loans Logo" />
                    </Rounded>
                </div>

                {/* Text Container Right */}
                <div className={styles.textContainer}>
                    <p>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                    </p>
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                        The company's objective is to evolve into a comprehensive financial services provider, offering clients an effective means to attain both their short- and long-term financial aspirations.
                    </motion.p>
                </div>

            </div>
        </div>
    )
}