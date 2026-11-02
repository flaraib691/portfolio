
import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> sheikhhlaraibfatima@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +923128889768
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />

        <input type="email" placeholder="Email" required />

        <textarea placeholder="Message" required></textarea>

        <button type="submit">Send Message</button>

        {sent && (
          <p className="success-message">
            ✓ Message Sent Successfully!
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
