import { motion } from "motion/react";
import { barra, item, secao, VIEWPORT } from "../lib/animacoes";

export default function TiposViolencia() {
  const tiposViolencia = [
    {
      title: "Física",
      text: "Qualquer ato que machuque o corpo da mulher, como tapas, socos, chutes, puxões de cabelo, aperto nos braços ou queimaduras.",
    },
    {
      title: "Psicológica",
      text: "Ações que causam dor emocional e diminuem a autoestima, como xingamentos, ameaças, humilhações, isolamento de amigos ou controle exagerado.",
    },
    {
      title: "Sexual",
      text: "Obrigar a mulher a ter atos sexuais contra a sua vontade, forçar gravidez, impedir o uso de remédios para não engravidar ou forçar o aborto.",
    },
    {
      title: "Patrimonial",
      text: "Guardar ou destruir dinheiro, documentos pessoais, celular, roupas, ferramentas de trabalho ou bens da mulher sem autorização.",
    },
    {
      title: "Moral",
      text: "Falar mentiras ou xingar a mulher para estragar a reputação dela com os outros, incluindo calúnia, difamação e injúria.",
    },
  ];

  return (
    <section className="violence">
      <motion.h2
        className="violence-title"
        variants={item}
        initial="escondido"
        whileInView="visivel"
        viewport={VIEWPORT}
      >
        5 Tipos de Violência contra a Mulher
      </motion.h2>
      <ul className="violence-list">
        {tiposViolencia.map((tipo, k) => {
          const esquerda = k % 2 === 0;

          return (
            /* o whileInView fica em cada item, não na lista: ela é bem mais
               alta que a tela e nunca atingiria a fração visível do viewport */
            <motion.li
              key={k}
              className={`violence-list-item violence-list-item-${esquerda ? "left" : "right"}`}
              variants={secao}
              initial="escondido"
              whileInView="visivel"
              viewport={VIEWPORT}
            >
              <motion.h3 className="violence-list-item-title" variants={item}>
                {tipo.title}
              </motion.h3>
              <motion.p className="violence-list-item-text" variants={item}>
                {tipo.text}
              </motion.p>
              <motion.div
                className="violence-list-item-bar"
                variants={barra}
                /* cresce a partir da borda em que o item está encostado */
                style={{ originX: esquerda ? 0 : 1 }}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
