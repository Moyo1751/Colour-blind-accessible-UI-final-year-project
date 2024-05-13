import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./styles.css";
import profilePic from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash-modified2.png";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="column-left">
          <h1>Hi, I'm Maxwell Grace</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo
            odio exercitationem pariatur vitae eligendi ullam porro dolor
            architecto. In eos nostrum aut, cumque iure blanditiis ex ab totam
            neque sed porro consequuntur <a href="about.html">quisquam!</a>
          </p>
          <br />
          <a href="contact.html" className="contact-button">
            Contact Me
          </a>
        </div>
        <div className="column-right">
          <img src={profilePic} alt="Jurica Koletic portrait of a man" />
        </div>
      </div>
      <Footer />
    </section>
  );
}
