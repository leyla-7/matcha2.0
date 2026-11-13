import type { SubmitEvent, JSX } from "react";
import "./Contact.css";
import Button from "../Button/Button";

export default function Contact(): JSX.Element {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("message"));
  }
  return (
    <section id="contact">
      <h1>Contacto</h1>
      <p>
        Si deseas más información sobre nuestros productos, estaremos encantados
        de escucharte.
      </p>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__formfield">
          <label htmlFor="contact-name">Nombre*</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="contact__formfield">
          <label htmlFor="contact-email">Email*</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="contact__formfield">
          <label htmlFor="contact-message">Su mensaje:*</label>
          <textarea id="contact-message" name="message" rows={5} required />
        </div>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </form>
    </section>
  );
}
