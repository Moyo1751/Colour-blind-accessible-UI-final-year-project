import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./styles.css";

export default function Contact() {
  return (
    <section>
      <Navbar />
      <div class="contact-container">
        <div class="contact-col-left">
          <h1 className="contact-info-h1">Contact me</h1>
          <ul>
            <li>
              <i class="fa-brands fa-instagram"></i> Maxwell__Grace1
            </li>
            <li>Email: MGrace@linkedin.com</li>
            <br></br>
            <li>Email: MGrace@outlook.com</li>
            <br></br>
            <li>Phone No: +44 0354 78644</li>
            <br></br>
          </ul>
        </div>
        <div class="contact-col-right">
          <form action="#" method="post">
            <label for="fname" class="required">
              Your Full Name (required):
            </label>
            <br></br>
            <input
              type="text"
              class="fname"
              name="fname"
              value=""
              placeholder="Please enter your full name"
            ></input>
            <br></br>
            <label for="email" class="required">
              Your Email (required):
            </label>
            <br></br>
            <input
              type="text"
              class="email"
              name="email"
              value=""
              placeholder="Please enter your email"
            ></input>
            <br></br>
            <br></br>
            <label for="mssg">Your Message</label>
            <br></br>
            <input
              type="text"
              name="mssg"
              class="mssg"
              placeholder="Please write a message"
            ></input>
            <input type="submit" value="Send Message"></input>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}
