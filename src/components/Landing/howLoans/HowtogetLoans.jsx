import styles from './style.module.scss';
import { motion, useScroll, useTransform } from "framer-motion";

export function Howtogetloans() {
  return (
    <div className={styles.container}>
      <motion.div
        className="relative text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative inline-block">
          <motion.span
            className="absolute bottom-full left-1/2 w-px -translate-x-1/2 bg-gray-300"
            initial={{ height: 0 }}
            whileInView={{ height: "40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-5xl font-normal text-[#6D3078]">
            Why Choose Maitrii Loans?
          </h2>
          <motion.span
            className="absolute top-full left-1/2 mt-3 h-10 w-px -translate-x-1/2 bg-gray-300"
            initial={{ height: 0 }}
            whileInView={{ height: "40px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((item, idx) => (
          <a key={idx} href={item.link} className={styles.card} target="_blank" rel="noopener noreferrer">
            <div className={styles.cardContent}>

              {/* Index Number Added Here */}
              <div className={styles.indexNumber}>
                {String(idx + 1).padStart(2, '0')}
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Apply for Loan",
    description: "Fill the details below or Call/visit your nearest branch. Our Loan manager will look after your needs",
    link: "#",
  },
  {
    title: "KYC & Due Diligence",
    description: "Once you select the type of loan, a list of documents shall be required for compliance, review, and evaluation.",
    link: "#",
  },
  {
    title: "Get Funding Fast",
    description: "With our fast loan processing structure, receive your payment the same day your loan is sanctioned.",
    link: "#",
  },
  {
    title: "Application Review",
    description: "Your loan will be processed seamlessly, With minimal formalities and hassle-free ease come true.",
    link: "#",
  },
];