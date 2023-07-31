import { Link } from 'react-router-dom';
import './Appointment.scss';

const Appointment = () => {
    return (
      <section id="appointment">
        <div className="container">
          <div className="section__content">
            <h1 className='section__content-title'>Do you have an emergency?</h1>
            <h1 className='section__content-description'>Call our top specialists </h1>
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