import "./app.css";
import About from "./components/About";
import Footer from "./components/Footer";
import TiposViolencia from "./components/TiposViolencia";
import WeHelpYou from "./components/WeHelpYou";
import Welcome from "./components/Welcome";

export function App() {
  return (
    <>
      <main className="container">
        <Welcome />
        <WeHelpYou />
        <TiposViolencia />
        <About />
      </main>
      <Footer />
    </>
  );
}
