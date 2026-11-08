import type { JSX } from "react";
import "./Tearoom.css";
import tearoom from "../../assets/images/tearoom.png";

export default function Wagashi(): JSX.Element {
  return (
    <section id="tearoom">
      <h1>tea</h1>
      <img src={tearoom} alt="" />
    </section>
  );
}
