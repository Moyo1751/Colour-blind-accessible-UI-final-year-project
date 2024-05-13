import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; 2023 Maxwell Grace <br />
        &middot; <a href="/README.md">Privacy</a> &middot;
        <a href="/README.md">Terms</a>
      </p>
      <nav className="footer-nav">
        <ul className="footer-nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
