import "./Services.scss";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section__image">
          <img src="../../../public/assets/services.png" alt="Services Image" className="img" />
        </div>
        <div className="section__content">
          <h1>Our services</h1>
          <p>Making a difference in the lives of pets and their owners.</p>
          <ul>
            <li>
              <GiCheckMark className="icon" />
              Infectious Diseases and Prevention
            </li>
            <li>
              <GiCheckMark className="icon" />
              Cardiology
            </li>
            <li>
              <GiCheckMark className="icon" />
              Dermatology
            </li>
            <li>
              <GiCheckMark className="icon" />
              Diabetes, Nutrition, and Metabolic Diseases
            </li>
            <li>
              <GiCheckMark className="icon" />
              Inhalation Anesthesia
            </li>
            <li>
              <GiCheckMark className="icon" />
              Gastroenterology
            </li>
            <li>
              <GiCheckMark className="icon" />
              Internal Medicine
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
