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
      <h2 className="violence-title">5 Tipos de Violência contra a Mulher</h2>
      <ul className="violence-list">
        {tiposViolencia.map((tipo, k) => (
          <li
            key={k}
            className={`violence-list-item violence-list-item-${k % 2 === 0 ? "left" : "right"}`}
          >
            <h3 className="violence-list-item-title">{tipo.title}</h3>
            <p className="violence-list-item-text">{tipo.text}</p>
            <div className="violence-list-item-bar"></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
