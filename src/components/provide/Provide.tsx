
import "./Provide.scss";
import {
  provideSectionTitle,
  provideSectionDescription,
  features,
} from "../../utils/data/data";

const Provide = () => {
  return (
    <section id="provide">
      <h2>{provideSectionTitle}</h2>
      <p>{provideSectionDescription}</p>
      <div className="container">
        {features.map((feature, index) => (
          <article key={index}>
            <i className={feature.icon} aria-label={feature.title}></i>
            <div>
              <h4>{feature.title}</h4>
              <small>{feature.description}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Provide;
