import type { JSX } from "react";
import "./Matcha.css";
import matchaOne from "../../assets/images/matcha1.png";
import matchaTwo from "../../assets/images/matcha2.png";
import matchaThree from "../../assets/images/matcha3.png";

export default function Matcha(): JSX.Element {
  return (
    <section id="matcha">
      <div className="matcha__grid">
        <div className="matcha__grid__top">
          <h1>Matcha premium de Uji</h1>
          <div className="div-line"></div>
          <p>
            Nuestro matcha procede de Uji, la región japonesa reconocida por
            producir uno de los mejores tés verdes del mundo. Su color vibrante,
            textura sedosa y sabor umami equilibrado son el resultado de un
            proceso artesanal que respeta la tradición.
          </p>
        </div>

        <img
          className="matcha__grid__top"
          src={matchaOne}
          alt="Matcha tamizado"
        ></img>

        <img
          className="matcha__grid__top"
          src={matchaTwo}
          alt="Utensilios tradicionales"
        ></img>

        <img
          className="matcha__grid__top"
          src={matchaThree}
          alt="Matcha preparado en taza"
        ></img>

        <div className="matcha__grid__bottom-one">
          <h2>¿Qué hace especial al matcha?</h2>
          <div className="div-line center-line"></div>
          <p>
            Las hojas se cultivan bajo sombra, se seleccionan a mano y se muelen
            lentamente en piedra. Este proceso preserva su aroma, su sabor y sus
            propiedades antioxidantes.
          </p>
        </div>
        <div className="matcha__grid__bottom-two">
          <h2>¿Cómo lo preparamos?</h2>
          <div className="div-line center-line"></div>
          <p>
            Seguimos el método japonés tradicional: tamizado fino, agua a la
            temperatura adecuada y un batido cuidadoso con chasen para obtener
            una espuma suave y cremosa.
          </p>
        </div>
      </div>
    </section>
  );
}
