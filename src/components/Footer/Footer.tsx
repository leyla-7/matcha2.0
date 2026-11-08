import type { JSX } from "react";
import "./Footer.css";
import logo from "../../assets/images/logo2.png";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer__redes">
        <a href="">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
      <a href="">Aviso legal</a>
      <a href="">Política de privacidad</a>
      <p>© 2026 Edina Zhu Ling</p>

      <img className="footer__logo" src={logo} alt="logotipo"></img>
    </footer>
  );
}
