import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Welcome() {
  const reduzido = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduzido ? 0 : 0.15,
        staggerChildren: reduzido ? 0 : 0.18,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduzido ? 0 : 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduzido ? 0.2 : 0.9, ease: EASE },
    },
  };

  return (
    <section className="welcome">
      <motion.div
        className="welcome-heading stack"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="welcome-title" variants={item}>
          AGOSTO
        </motion.h1>

        {/* o wrapper anima; o h2 mantém o translate do CSS */}
        <motion.div variants={item}>
          <h2 className="welcome-subtitle">Lilás</h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
