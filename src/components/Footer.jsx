import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Laraib Fatima</h3>
        <p>MERN Stack Developer</p>

        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          
        </div>

        <p className="copyright">
          © 2026 Laraib Fatima. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;