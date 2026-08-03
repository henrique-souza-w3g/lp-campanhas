import { MotionConfig } from "motion/react";
import "./app.css";
import AboutPurple from "./components/purple/AboutPurple";
import FooterPurple from "./components/purple/FooterPurple";
import { HeaderPurple } from "./components/purple/HeaderPurple";
import TiposViolenciaPurple from "./components/purple/TiposViolenciaPurple";
import WelcomePurple from "./components/purple/WelcomePurple";
import { useState } from "preact/hooks";

export function App() {
  const [monthChoosed, setMonthChoosed] = useState<number>(0);

  return (
    <MotionConfig reducedMotion="user">
      <main className="container">
        <HeaderPurple onEscolher={setMonthChoosed} />
        {(() => {
          switch (monthChoosed) {
            case 0:
              return (
                <>
                  <WelcomePurple />
                  <TiposViolenciaPurple />
                  <AboutPurple />
                </>
              );
            case 1:
              return <TiposViolenciaPurple />;
            default:
              return <WelcomePurple />;
          }
        })()}
      </main>
      <FooterPurple />
    </MotionConfig>
  );
}
