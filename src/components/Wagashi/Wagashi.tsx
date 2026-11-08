import type { JSX } from "react";
import "./Wagashi.css";
import wagashiOne from "../../assets/images/wagashi1.png";
import wagashiTwo from "../../assets/images/wagashi2.png";

export default function Wagashi(): JSX.Element {
  return (
    <section id="wagashi">
      <div id="wagashi__content">
        <h1>
          Wagashi: <br /> dulces japoneses artesanales
        </h1>
        <div className="div-line"></div>
        <p>
          Los wagashi son dulces tradicionales japoneses elaborados con
          ingredientes naturales como anko, mochi o harina de arroz.
          <br />
          Su delicadeza visual y su sabor suave los convierten en el
          acompañamiento perfecto para el matcha.
        </p>

        <h2 className="cursive">
          Una combinación que une estética, tradición y equilibrio.
        </h2>
      </div>

      <div className="wagashi__img">
        <img src={wagashiOne} alt="Wagashi individuales"></img>
        <img src={wagashiTwo} alt="Wagashi junto al matcha"></img>
      </div>
    </section>
  );
}
