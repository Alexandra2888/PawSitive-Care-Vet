import "./Services.scss";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section__image">
          <img src="src/assets/services.png" alt="Services Image" />
        </div>
        <div className="section__content">
          <h1>Our services:</h1>
          <p>Making a difference in the lives of pets and their owners.</p>
          <ul>
            <li>
              <GiCheckMark id="icon" />
              Infectious Diseases and Prevention
            </li>
            <li>
              <GiCheckMark id="icon" />
              Parasitic Diseases and Prevention
            </li>
            <li>
              <GiCheckMark id="icon" />
              Cardiology
            </li>
            <li>
              <GiCheckMark id="icon" />
              Dermatology
            </li>
            <li>
              <GiCheckMark id="icon" />
              Diabetes, Nutrition, and Metabolic Diseases
            </li>
            <li>
              <GiCheckMark id="icon" />
              Inhalation Anesthesia
            </li>
            <li>
              <GiCheckMark id="icon" />
              Gastroenterology
            </li>
            <li>
              <GiCheckMark id="icon" />
              Internal Medicine
            </li>
            <li>
              <GiCheckMark id="icon" />
              Orthopedics and Traumatology
            </li>
            <li>
              <GiCheckMark id="icon" />
              Hematological analysis
            </li>
            <li>
              <GiCheckMark id="icon" />
              Simple & Doppler ultrasound
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
