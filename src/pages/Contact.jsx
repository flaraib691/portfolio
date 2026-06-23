function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <p><strong>Email:</strong>flaraib691@gmail.com</p>
        <p><strong>Phone:</strong> +92 312 888 9768</p>
      </div>

      {/* Contact Form */}
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;