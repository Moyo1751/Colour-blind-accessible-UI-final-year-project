import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./styles.css";
import profilePic from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash-modified2.png";

export default function About() {
  return (
    <section id="about">
      <Navbar />
      <div class="about-container">
        <div class="two-column-container">
          <div class="two-column-left">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              nemo odio exercitationem pariatur vitae eligendi ullam porro dolor
              architecto. In eos nostrum aut, cumque iure blanditiis ex ab totam
              neque sed porro consequuntur quisquam!
            </p>{" "}
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, quia quibusdam tenetur veniam sunt maxime iure illo
              soluta alias, iste ad! Perferendis quas cum vitae eius dolorum
              ullam unde nisi!.
            </p>{" "}
            <br></br>
            <a href="contact.html" class="contact-button">
              Contact Me
            </a>
          </div>
          <div class="two-column-right">
            <img src={profilePic} alt="Jurica Koletic portrait of a man"></img>
          </div>
        </div>
        <div class="three-column-container">
          <div class="three-column-left">
            <h2>My Skills</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li> <br></br>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                natus?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur.</li> <br></br>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>{" "}
              <br></br>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>{" "}
              <br></br>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>{" "}
              <br></br>
            </ul>
          </div>
          <div class="three-column-middle">
            <h2>Past Work</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li> <br></br>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                natus?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur.</li> <br></br>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>{" "}
              <br></br>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>{" "}
              <br></br>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>{" "}
              <br></br>
            </ul>
          </div>
          <div class="three-column-right">
            <h2>Services</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li> <br></br>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                natus?
              </li>{" "}
              <br></br>
              <li>Lorem ipsum dolor sit amet consectetur.</li> <br></br>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
