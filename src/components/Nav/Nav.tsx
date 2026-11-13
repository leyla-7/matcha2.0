import type { JSX } from "react";
import "./Nav.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import logo from "../../assets/images/logo2.png";

export default function Nav(): JSX.Element {
  return (
    <nav>
      <a className="nav__logo" href="#hero">
        <img src={logo} alt="Logotipo" />
      </a>
      <ul className="nav__links">
        <li>
          <a href="#hero">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre nosotros</a>
        </li>
        <li>
          <a href="#matcha">Matcha</a>
        </li>
        <li>
          <a href="#wagashi">Wagashi</a>
        </li>
        <li>
          <a href="#tearoom">Tearoom</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="nav__actions">
        <ButtonLink href="#contact" variant="primary">
          Reserva tu mesa
        </ButtonLink>
      </div>
    </nav>
  );
}
