import type { Variants } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** entra na tela quando 20% do bloco aparece, e só na primeira vez */
export const VIEWPORT = { once: true, amount: 0.2 } as const;

/**
 * Só orquestra: não muda nada visualmente, apenas repassa o estado
 * ("escondido"/"visivel") pros filhos motion, um depois do outro.
 */
export const secao: Variants = {
  escondido: {},
  visivel: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

/** fade + subida — o movimento padrão de entrada da página */
export const item: Variants = {
  escondido: { opacity: 0, y: 32 },
  visivel: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** o hero é maior: sobe de mais longe, com mais calma e mais espaçado */
export const heroSecao: Variants = {
  escondido: {},
  visivel: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

export const heroItem: Variants = {
  escondido: { opacity: 0, y: 48 },
  visivel: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

/** a barrinha cresce a partir da borda em que o item está alinhado */
export const barra: Variants = {
  escondido: { opacity: 0, scaleX: 0 },
  visivel: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** levanta no hover/tap dos botões (substitui o transform que estava no CSS) */
export const botao = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.98 },
} as const;
