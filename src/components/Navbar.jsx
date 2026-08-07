import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <h2>Laraib Fatima</h2>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={menuOpen ? "active" : ""}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Hero</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
                <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;