function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>HI, I am  Laraib Fatima</h1>
        <h2>FULL STACK DEVELOPER</h2>

        <p>
          Passionate developer creating modern,
          responsive and user-friendly websites.
        </p>

        <button>Download Resume</button>
      </div>

      <div className="hero-image">
        <img
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
          alt="profile"
        />
      </div>
    </section>
  );
}

export default Hero;