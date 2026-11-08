import type { JSX } from "react";
import "./Contact.css";
import contactoBg from "../../assets/images/contacto-bg.png";

export default function Wagashi(): JSX.Element {
  return (
    <section id="tearoom">
      <h1>tea</h1>
      <img src={contactoBg} alt="" />
    </section>
  );
}
