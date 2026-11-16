import type { JSX } from "react";
import "./Wagashi.css";
import wagashiOne from "../../assets/images/wagashi1.png";
import wagashiTwo from "../../assets/images/wagashi2.png";

export default function Wagashi(): JSX.Element {
  return (
    <section id="wagashi">
      <div id="wagashi__content">
        <h2>
          Wagashi: <br /> dulces japoneses artesanales
        </h2>
        <div className="div-line"></div>
        <p>
          Los wagashi son dulces tradicionales japoneses elaborados con
          ingredientes naturales como anko, mochi o harina de arroz.
          <br />
          Su delicadeza visual y su sabor suave los convierten en el
          acompañamiento perfecto para el matcha.
        </p>

        <h3 className="cursive">
          Una combinación que une estética, tradición y equilibrio.
        </h3>
      </div>

      <div className="wagashi__img">
        <img
          src={wagashiOne}
          alt="Wagashi individuales"
          loading="lazy"
          decoding="async"
        ></img>
        <img
          src={wagashiTwo}
          alt="Wagashi junto al matcha"
          loading="lazy"
          decoding="async"
        ></img>
      </div>
    </section>
  );
}
