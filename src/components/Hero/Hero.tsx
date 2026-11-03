import type { JSX } from "react";
import "./Hero.css";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function Hero(): JSX.Element {
  return (
    <section id="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1>Matcha premium de Uji. Cultura, calma y sabor en Valencia.</h1>
          <div className="div-line"></div>
          <p>
            Una experiencia inspirada en la tradición japonesa, donde cada taza
            cuenta una historia.
          </p>
        </div>
        <div className="hero__actions">
          <ButtonLink href="#matcha" variant="primary">
            Descubre nuestro matcha
          </ButtonLink>
          <ButtonLink href="#wagashi" variant="secondary">
            Wagashi artesanales
          </ButtonLink>
          <ButtonLink href="#tearoom" variant="secondary">
            Tearoom
          </ButtonLink>
        </div>
      </div>

      <div className="hero__bottom">
        <h3>
          Once Upon a Brew nace para acercar la esencia del té japonés a
          Valencia. Matcha auténtico y una experiencia que combina estética,
          calma y sabor.
        </h3>
        <div className="div-line center-line"></div>
      </div>
    </section>
  );
}
