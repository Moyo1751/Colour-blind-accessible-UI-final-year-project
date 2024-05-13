import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <header>
      <div className="logo">Maxwell Grace</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home" className="active-page">
              Home
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
