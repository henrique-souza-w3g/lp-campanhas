import { motion } from "motion/react";
import { heroItem, heroSecao } from "../lib/animacoes";

export default function Welcome() {
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
          Lilás
        </motion.h2>
      </motion.div>
    </section>
  );
}
