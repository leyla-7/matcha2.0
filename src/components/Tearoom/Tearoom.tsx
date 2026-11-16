import type { JSX } from "react";
import "./Tearoom.css";
import tearoom from "../../assets/images/tearoom.png";

export default function Tearoom(): JSX.Element {
  return (
    <section id="tearoom">
      <div className="tearoom__main">
        <img
          src={tearoom}
          alt="Moodboard arquitectónico japonés"
          loading="lazy"
          decoding="async"
        />

        <div className="tearoom__text">
          <h2>
            Próximamente
            <br />
            en Valencia
          </h2>

          <div className="div-line"></div>

          <p>
            Hemos creado un espacio dedicado al ritual del té japonés: un lugar
            donde desconectar, aprender y disfrutar del matcha en su forma más
            auténtica. Un tearoom minimalista, inspirado en la cultura japonesa,
            ubicado en la zona de Blasco Ibáñez.
          </p>
        </div>
      </div>

      <div className="tearoom__iframe">
        <iframe
          title="Mapa de la zona de Blasco Ibáñez en Valencia"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3507578372955323%2C39.47331369277591%2C-0.3472173213958741%2C39.47510254101954&layer=mapnik"
          loading="lazy"
        ></iframe>

        <div className="tearoom__iframe__text">
          <p>Zona de Blasco Ibáñez, Valencia</p>

          <div className="div-line"></div>

          <p className="cursive-noto">
            Muy pronto abriremos
            <br />
            nuestras puertas.
          </p>
        </div>
      </div>
    </section>
  );
}
