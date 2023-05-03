import "./Footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="container" aria-label="Social Links">
        <article>
          <a href="#" className="footer__logo" aria-label="logo">
            <h3>PawSitive Vet Care</h3>
          </a>
          <p>Caring for your furry family members like they are our own</p>
          <div>
            <i className="bx bxs-phone" aria-label="phone"></i>
            <small>+2335555555</small>
          </div>
          <div>
            <i className="bx bx-mail-send" aria-label="email"></i>
            <small>support@pawsitive-vet.com</small>
          </div>
        </article>

        <article>
          <h3>Support</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Purchasing Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Career</a>
        </article>

        <article>
          <h3>Permalinks</h3>
          <a href="#">Home</a>
          <Link to="/services">Services</Link>
          <Link to="/specialists">Specialists</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="#appointment" className="btn-primary">
            Get Appointment
          </Link>
        </article>

        <article>
          <h3>Contact Us</h3>
          <p>Press</p>
          <p>FAQs</p>
          <div className="footer__socials" aria-label="social-lionks">
            <a href="#">
              <i className="bx bxl-linkedin" aria-label="linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter" aria-label="twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-facebook" aria-label="facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram" aria-label="instagram"></i>
            </a>
          </div>
        </article>
      </div>
      <div className="copyright">
        <small>&copy; All Rights Reserved 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
