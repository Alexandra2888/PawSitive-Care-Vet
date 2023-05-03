import './Specialists.scss';


const Specialists = () => {
    return (
      <section id="specialists">
        <h2>Our Top Specialists</h2>
        <p>A happier, healthier life starts with us.</p>
        <div className="container">
          <article>
            <div className="specialist__image">
              <figure aria-label="specialist 1">
                <figcaption>
                  <img
                    src="/assets/specialist1.jpg"
                    alt="Specialist One"
                  />
                </figcaption>
              </figure>
            </div>
            <div className="specialist__details">
              <h4>Dr. John Doe</h4>
              <small>Surgery Specialist</small>
            </div>
            <div className="specialist__socials">
              <a href="https://linkedin.com">
                <i className="bx bxl-linkedin" aria-label="linkedin"></i>
              </a>
              <a href="https://twitter.com">
                <i className="bx bxl-twitter" aria-label="twitter"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bx bxl-facebook" aria-label="facebook"></i>
              </a>
              <a href="https://instagram.com">
                <i className="bx bxl-instagram" aria-label="instagram"></i>
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+233557097546"
              className="specialist__whatsapp"
            >
              <i className="bx bxl-whatsapp" aria-label="whatsup"></i>
            </a>
          </article>

          <article>
            <div className="specialist__image">
              <figure aria-label="specialist 2">
                <figcaption>
                  <img
                    src="/assets/specialist2.jpg"
                    alt="Specialist Two"
                  />
                </figcaption>
              </figure>
            </div>
            <div className="specialist__details">
              <h4 className="">Dr. Carmen Makafui</h4>
              <small>Anaesthetic Specialist</small>
            </div>
            <div className="specialist__socials">
              <a href="https://linkedin.com">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://twitter.com">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://instagram.com">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+233557097546"
              className="specialist__whatsapp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </article>

          <article>
            <div className="specialist__image">
              <figure aria-label="specialist 3">
                <figcaption>
                  <img
                    src="/assets/specialist3.jpg"
                    alt="Specialist Three"
                  />
                </figcaption>
              </figure>
            </div>
            <div className="specialist__details">
              <h4>Dr. Liza Apeledo</h4>
              <small>Orthopedic Specialist</small>
            </div>
            <div className="specialist__socials">
              <a href="https://linkedin.com">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://twitter.com">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://instagram.com">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+233557097546"
              className="specialist__whatsapp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </article>

          <article>
            <div className="specialist__image">
              <figure aria-label="specialist 4">
                <figcaption>
                  <img
                    src="/assets/specialist4.jpg"
                    alt="Specialist Four"
                  />
                </figcaption>
              </figure>
            </div>
            <div className="specialist__details">
              <h4>Dr. Abigail Brownie</h4>
              <small>Cardiology Specialist</small>
            </div>
            <div className="specialist__socials">
              <a href="https://linkedin.com">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://twitter.com">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://instagram.com">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+233557097546"
              className="specialist__whatsapp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </article>
        </div>
      </section>
    );
}

export default Specialists;