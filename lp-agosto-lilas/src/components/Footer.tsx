import { motion } from "motion/react";
import grupoW3G from "../assets/grupo_w3g.png";
import { item, secao, VIEWPORT } from "../lib/animacoes";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={secao}
      initial="escondido"
      whileInView="visivel"
      viewport={VIEWPORT}
    >
      <motion.img
        className="footer-logo"
        src={grupoW3G}
        alt="Grupo W3G"
        width={700}
        height={200}
        variants={item}
      />
      <motion.small className="footer-copy" variants={item}>
        © {new Date().getFullYear()} Grupo W3G. Todos os direitos reservados.
      </motion.small>
    </motion.footer>
  );
}
