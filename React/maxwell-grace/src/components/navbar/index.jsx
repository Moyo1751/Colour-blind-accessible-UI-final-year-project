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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
