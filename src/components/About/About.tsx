import type { JSX } from "react";
import "./About.css";

export default function About(): JSX.Element {
  return (
    <section id="about">
      <h1>Nuestra historia</h1>
      <p>
        Once Upon a Brew es un proyecto nacido del respeto profundo por la
        cultura japonesa y su ritual del té. Tras años de aprendizaje y conexión
        con Japón, decidimos traer a Valencia un matcha auténtico, de calidad
        ceremonial, acompañado de wagashi tradicionales y una experiencia
        sensorial cuidada. Creemos en la calma, en la estética minimalista y en
        la importancia de los pequeños rituales. Cada taza es un momento para
        detenerse, respirar y disfrutar.
      </p>
      <div className="div-line center-line"></div>
      <h2 className="simple-highlight">Misión:</h2>
      <p>
        Ofrecer matcha premium y experiencias inspiradas en la tradición
        japonesa, combinando calidad, diseño y bienestar.
      </p>

      <h2 className="simple-highlight">Valores:</h2>
      <ul>
        <li>Autenticidad</li>
        <li>Respeto cultural</li>
        <li>Calidad premium</li>
        <li>Minimalismo</li>
        <li>Experiencia sensorial</li>
      </ul>
    </section>
  );
}
