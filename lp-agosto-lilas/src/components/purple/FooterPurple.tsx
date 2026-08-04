import { motion } from "motion/react";
import { item, secao, VIEWPORT } from "../../lib/animacoes";
import logoW3G from "../../assets/grupo_w3g_purple.png";

export default function FooterPurple() {
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
        src={logoW3G}
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
