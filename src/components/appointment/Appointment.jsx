import { Link } from 'react-router-dom';
import './Appointment.scss';

const Appointment = () => {
    return (
      <section id="appointment">
        <div className="container">
          <div className="section__content">
            <h1>Do you have an emergency?</h1>
            <p>Call our top specialists </p>
            <i className="bx bxs-phone" aria-hidden="true"></i>
            <a href="tel:+2335555555" aria-label="Call now">
              +2335555555
            </a>
            <div>
              <Link to="#appointment" className="btn">
                Make Appointment
              </Link>
            </div>
          </div>
          <div className="section__image">
            <figure>
              <figcaption aria-label="appointment">
                <img src="/assets/appointment.jpg" alt="appointment" />
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    );
}

export default Appointment;