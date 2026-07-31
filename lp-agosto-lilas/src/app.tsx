import "./app.css";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="welcome">
          <h1 className="welcome-title">AGOSTO</h1>
          <h2 className="welcome-subtitle">Lilás</h2>
        </section>
      </main>
    </>
  );
}
