import React from "react";
import "./Specialists.scss";
import { specialistData, specialistsSectionTitle, specialistsSectionDescription } from "../../utils/data/data";

const Specialists = () => {
  return (
    <section id="specialists">
      <h2>{specialistsSectionTitle}</h2>
      <p>{specialistsSectionDescription}</p>
      <div className="container">
        {specialistData.map((specialist, index) => (
          <article key={index}>
            <div className="specialist__image">
              <figure aria-label={`specialist ${index + 1}`}>
                <figcaption>
                  <img src={specialist.image} alt={`Specialist ${index + 1}`} />
                </figcaption>
              </figure>
            </div>
            <div className="specialist__details">
              <h4>{specialist.name}</h4>
              <small>{specialist.specialization}</small>
            </div>
            <div className="specialist__socials">
              <a href={specialist.socialLinks.linkedin}>
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href={specialist.socialLinks.twitter}>
                <i className="bx bxl-twitter"></i>
              </a>
              <a href={specialist.socialLinks.facebook}>
                <i className="bx bxl-facebook"></i>
              </a>
              <a href={specialist.socialLinks.instagram}>
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
            <a href={specialist.socialLinks.whatsapp} className="specialist__whatsapp">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specialists;
