import grupoW3G from "../assets/grupo_w3g.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer-logo"
        src={grupoW3G}
        alt="Grupo W3G"
        width={700}
        height={200}
      />
      <small className="footer-copy">
        © {new Date().getFullYear()} Grupo W3G. Todos os direitos reservados.
      </small>
    </footer>
  );
}
