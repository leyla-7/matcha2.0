import type { JSX } from "react";
import "./About.css";

export default function About(): JSX.Element {
  return (
    <section id="about">
      <div className="about__content">
        <h2 className="about__title">Nuestra historia</h2>

        <p>
          Once Upon a Brew es un proyecto nacido del respeto profundo por la
          cultura japonesa y su ritual del té. Tras años de aprendizaje y
          conexión con Japón, decidimos traer a Valencia un matcha auténtico, de
          calidad ceremonial, acompañado de wagashi tradicionales y una
          experiencia sensorial cuidada. Creemos en la calma, en la estética
          minimalista y en la importancia de los pequeños rituales. Cada taza es
          un momento para detenerse, respirar y disfrutar.
        </p>

        <div className="div-line center-line"></div>

        <h3 className="about__highlight">Misión:</h3>

        <p>
          Ofrecer matcha premium y experiencias inspiradas en la tradición
          japonesa, combinando calidad, diseño y bienestar.
        </p>

        <h3 className="about__highlight">Valores:</h3>

        <ul className="about__values">
          <li>Autenticidad</li>
          <li>Respeto cultural</li>
          <li>Calidad premium</li>
          <li>Minimalismo</li>
          <li>Experiencia sensorial</li>
        </ul>
      </div>
    </section>
  );
}
