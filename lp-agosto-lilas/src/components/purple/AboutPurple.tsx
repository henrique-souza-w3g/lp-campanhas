import { motion } from "motion/react";
import { botao, item, secao, VIEWPORT } from "../../lib/animacoes";
import cartilha from "../../assets/cartilha.pdf";

export default function AboutPurple() {
  return (
    <motion.section
      className="about"
      variants={secao}
      initial="escondido"
      whileInView="visivel"
      viewport={VIEWPORT}
    >
      <motion.h2 className="about-title" variants={item}>
        Se Informe Sobre!
      </motion.h2>
      <motion.p className="about-text" variants={item}>
        Preparamos um material completo sobre Agosto Lilás!
      </motion.p>
      {/* o wrapper não anima sozinho: só escalona os botões */}
      <motion.div className="about-actions" variants={secao}>
        <motion.a
          className="btn-why"
          href={cartilha}
          download="Cartilha Agosto Lilas.pdf"
          variants={item}
          {...botao}
        >
          Baixe Nossa Cartilha
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
