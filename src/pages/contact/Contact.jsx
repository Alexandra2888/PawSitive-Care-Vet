import Map from "../../components/map/Map";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section__content">
          <h1>PawSitive Vet Care</h1>
          <p>Partnering with you for your pet&apos;s health.</p>
          <div>
            <i className="bx bxs-phone"></i>
            <small>+2335555555</small>
          </div>
          <div>
            <i className="bx bx-mail-send"></i>
            <small>support@pawsitive-vet.com</small>
          </div>
          <div>
            <i className="bx bx-home"></i>
            <small>
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
            </small>
          </div>
        </div>
        <div>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
