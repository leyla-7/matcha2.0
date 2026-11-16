import type { JSX } from "react";
import "./Footer.css";
import logo from "../../assets/images/logo2.png";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer__redes">
        <a href="" aria-label="Email">
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
        <a href="" aria-label="Facebook">
          <i className="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="" aria-label="Instagram">
          <i className="fa-brands fa-square-instagram" aria-hidden="true"></i>
        </a>
        <a href="" aria-label="TikTok">
          <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
        </a>
      </div>
      <a href="">Aviso legal</a>
      <a href="">Política de privacidad</a>
      <p>© 2026 Edina Zhu Ling</p>

      <img className="footer__logo" src={logo} alt="logotipo"></img>
    </footer>
  );
}
