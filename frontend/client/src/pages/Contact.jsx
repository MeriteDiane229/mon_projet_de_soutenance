
// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css"; 

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hp9nkmf",            // ← ton Service ID
        "template_gpyfe6a",       // ← ton Template ID
        form.current,
        "Fnv6aOYS2lC9VXaiH"              // ← ta Public API Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Votre nom" required />
        <input type="email" name="user_email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      {messageSent && <p className="success">Message envoyé ✅</p>}
    </div>
  );
};

export default Contact;
