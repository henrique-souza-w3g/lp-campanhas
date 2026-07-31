export default function About() {
  const link = "";
  function Download() {
    return;
  }

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
        <button className="btn-why" onClick={Download}>
          Baixe Nossa Cartilha
        </button>
      </div>
    </section>
  );
}
