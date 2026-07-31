import Button from "./ui/Button";

export default function WeHelpYou() {
  return (
    <section className="why">
      <h2 className="why-title">Você Não Está Sozinha</h2>
      <p className="why-subtitle">
        Caso se sinta em perigo e precise de ajuda, estamos aqui!
      </p>
      <p className="why-text">
        Clique no botão, preencha o formulário e entraremos em contato. Seus
        dados serão mantidos em segredo e apenas a Camila (Coordenadora de RH)
        terá acesso a sua resposta.
      </p>
      <Button>Peça Ajuda Aqui!</Button>
    </section>
  );
}
