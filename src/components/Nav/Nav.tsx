import type { JSX } from "react";
import "./Nav.css";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function Nav(): JSX.Element {
  return (
    <nav>
      <ul>
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
      <ButtonLink href="#contacto" variant="primary">
        Reserva tu mesa
      </ButtonLink>
    </nav>
  );
}
