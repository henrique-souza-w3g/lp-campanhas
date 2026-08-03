import { motion } from "motion/react";
import { botao, item, secao, VIEWPORT } from "../../lib/animacoes";

export default function WeHelpYouPurple() {
  const link = "https://forms.gle/z2YcU1F3Ze6WoeTn9";

  return (
    <motion.section
      className="why"
      variants={secao}
      initial="escondido"
      whileInView="visivel"
      viewport={VIEWPORT}
    >
      <motion.h2 className="why-title" variants={item}>
        Você Não Está Sozinha
      </motion.h2>
      <motion.p className="why-subtitle" variants={item}>
        Caso se sinta em perigo e precise de ajuda, estamos aqui!
      </motion.p>
      <motion.p className="why-text" variants={item}>
        Clique no botão, preencha o formulário e entraremos em contato. Seus
        dados serão mantidos em segredo e apenas a Camila (Coordenadora de RH)
        terá acesso a sua resposta.
      </motion.p>
      <motion.a className="btn-why" href={link} variants={item} {...botao}>
        Peça Ajuda Aqui!
      </motion.a>
    </motion.section>
  );
}
