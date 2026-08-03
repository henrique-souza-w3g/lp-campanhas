import { AnimatePresence } from "motion/react";
import "./app.css";
import About from "./components/About";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import TiposViolencia from "./components/TiposViolencia";
import WeHelpYou from "./components/WeHelpYou";
import Welcome from "./components/Welcome";

export function App() {
  return (
    <AnimatePresence>
      <main className="container">
        <Header/>
        <Welcome />
        <WeHelpYou />
        <TiposViolencia />
        <About />
      </main>
      <Footer />
    </AnimatePresence>
  );
}
