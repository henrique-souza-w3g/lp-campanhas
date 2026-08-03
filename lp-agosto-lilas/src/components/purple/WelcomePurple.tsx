import { motion } from "motion/react";
import { EASE, heroItem, heroSecao } from "../../lib/animacoes";

export default function WelcomePurple() {
  const lilas = "Lilás";
  return (
    <section className="welcome">
      <motion.div
        className="welcome-heading stack"
        variants={heroSecao}
        initial="escondido"
        animate="visivel"
      >
        <motion.h1 className="welcome-title" variants={heroItem}>
          AGOSTO
        </motion.h1>
        <motion.h2 className="welcome-subtitle" variants={heroItem}>
          {lilas.split("").map((letra, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: EASE, delay: i / 10 + 1 }}
            >
              {letra}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </section>
  );
}
