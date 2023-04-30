import './Appointment.scss';

const Appointment = () => {
    return (
      <section className="section section__appointment">
        <div className="container">
          <div className="section__content">
            <h1 className="title__appointment">Do you have an emergency?</h1>
            <p className="para__appointment">Call our top specialists.</p>
            <div className='small'>
              <i className="bx bxs-phone para__appointment"></i>
              <small className="para__appointment">+2335555555</small>
            </div>
            <a href="#appointment" className="btn">
              Make Appointment
            </a>
          </div>
          <div className="section__image">
            <img src="src/assets/appointment.jpg" alt="Appointment Image" />
          </div>
        </div>
      </section>
    );
}

export default Appointment;