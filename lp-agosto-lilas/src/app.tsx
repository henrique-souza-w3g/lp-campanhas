import { MotionConfig } from "motion/react";
import "./app.css";
import About from "./components/About";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import TiposViolencia from "./components/TiposViolencia";
import Welcome from "./components/Welcome";

export function App() {
  // "user": quem pediu menos animação no sistema recebe só o fade, sem movimento
  return (
    <MotionConfig reducedMotion="user">
      <main className="container">
        <Header />
        <Welcome />
        <TiposViolencia />
        <About />
      </main>
      <Footer />
    </MotionConfig>
  );
}
