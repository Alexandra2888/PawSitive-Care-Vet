import { NavLink } from 'react-router-dom';
import './Appointment.scss';

const Appointment = () => {
    return (
      <section id="appointment">
        <div className="container">
          <div className="section__content">
            <h1>Do you have an emergency?</h1>
            <h1>Call our top specialists </h1>
            <div>
              <NavLink to="/login" className="btn">
                Make Appointment
              </NavLink>
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