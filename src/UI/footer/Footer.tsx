import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-light p-8 mt-24">
      <div
        className="grid grid-cols-4 gap-20 text-[0.85rem] max-lg:gap-6 max-sm:grid-cols-1 max-sm:text-center"
        aria-label="Social Links"
      >
        <article className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            <h3 className="text-white">PawSitive Vet Care</h3>
          </Link>
          <p>Caring for your furry family members like they are our own</p>
          <div className="flex items-center gap-2.5 max-sm:justify-center">
            <i className="bx bxs-phone" aria-label="phone"></i>
            <small>+2335555555</small>
          </div>
          <div className="flex items-center gap-2.5 max-sm:justify-center">
            <i className="bx bx-mail-send" aria-label="email"></i>
            <small>support@pawsitive-vet.com</small>
          </div>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-white">Support</h3>
          <a
            href="#"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Cookie Policy
          </a>
          <a
            href="#"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Purchasing Policy
          </a>
          <a
            href="#"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Career
          </a>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-white">Permalinks</h3>
          <Link
            to="/"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/#services"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Services
          </Link>
          <Link
            to="/#specialists"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Specialists
          </Link>
          <Link
            to="/#testimonials"
            className="text-light transition-all duration-400 ease-in-out hover:text-white"
          >
            Testimonials
          </Link>
          <Link to="/add-appointments" className="btn-primary max-sm:mx-auto">
            Get Appointment
          </Link>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-white">Contact Us</h3>
          <p>Press</p>
          <p>FAQs</p>
          <div className="flex gap-4 text-[1.1rem] max-sm:mx-auto">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-light transition-all duration-400 ease-in-out hover:text-white"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-light transition-all duration-400 ease-in-out hover:text-white"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-light transition-all duration-400 ease-in-out hover:text-white"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-light transition-all duration-400 ease-in-out hover:text-white"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </article>
      </div>
      <div className="text-center py-6 mt-16 border-t border-white/20 text-[0.9rem]">
        <small>&copy; All Rights Reserved 2023</small>
      </div>
    </footer>
  );
}

export default Footer;
