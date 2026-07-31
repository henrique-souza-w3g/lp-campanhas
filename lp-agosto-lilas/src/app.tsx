import "./app.css";
import { Header } from "./components/Header";
import WeHelpYou from "./components/WeHelpYou";
import Welcome from "./components/Welcome";

export function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Welcome />
        <WeHelpYou />
      </main>
    </>
  );
}
