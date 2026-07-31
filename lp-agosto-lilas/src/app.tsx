import "./app.css";
import { Header } from "./components/Header";
import TiposViolencia from "./components/TiposViolencia";
import WeHelpYou from "./components/WeHelpYou";
import Welcome from "./components/Welcome";

export function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Welcome />
        <WeHelpYou />
        <TiposViolencia/>
      </main>
    </>
  );
}
