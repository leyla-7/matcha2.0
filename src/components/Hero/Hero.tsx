import type { JSX } from "react";
import "./Hero.css";

export default function Hero(): JSX.Element {
  return (
    <section>
      <div className="hero__content">
        <h1>Matcha premium de Uji. Cultura, calma y sabor en Valencia.</h1>
        <div className="div-line"></div>
        <p>
          Una experiencia inspirada en la tradición japonesa, donde cada taza
          cuenta una historia.
        </p>
      </div>
    </section>
  );
}
