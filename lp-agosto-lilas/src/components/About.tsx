import cartilha from "../assets/cartilha.pdf";

export default function About() {
  const link = "https://forms.gle/z2YcU1F3Ze6WoeTn9";

  return (
    <section className="about">
      <h2 className="about-title">Se Informe Sobre!</h2>
      <p className="about-text">
        Preparamos um material completo sobre Agosto Lilás!
      </p>
      <div className="about-actions">
        <a className="btn-why" href={link}>
          Peça Ajuda Aqui
        </a>
        <a
          className="btn-why"
          href={cartilha}
          download="Cartilha Agosto Lilas.pdf"
        >
          Baixe Nossa Cartilha
        </a>
      </div>
    </section>
  );
}
