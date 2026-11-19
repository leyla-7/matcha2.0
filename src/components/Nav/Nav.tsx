import { useState, type JSX } from "react";
import "./Nav.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import logo from "../../assets/images/logo_icon.png";

export default function Nav(): JSX.Element {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  function collapseNav() {
    if (isNavCollapsed) {
      setIsNavCollapsed(false);
    } else {
      setIsNavCollapsed(true);
    }
  }
  return (
    <nav>
      <a className="nav__logo" href="#hero">
        <img src={logo} alt="Logotipo" />
      </a>

      <div className="nav__actions">
        <ButtonLink href="#contact" variant="primary">
          Reserva tu mesa
        </ButtonLink>
      </div>
      <button type="button" className="nav__hamburger" onClick={collapseNav}>
        <div className="nav__ham"></div>
        <div className="nav__ham"></div>
        <div className="nav__ham"></div>
      </button>
      <ul
        className={`${isNavCollapsed ? "nav__links__collapsed" : "nav__links__displayed"}`}
      >
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
    </nav>
  );
}
