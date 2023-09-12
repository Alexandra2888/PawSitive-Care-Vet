import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="section__container">
      <div className="container">
        <div className="section__image">
          <figcaption aria-label="not-found-image">
            <figure>
            <img src="/assets/not-found.png" alt="Not found Image" />
            </figure>
          </figcaption>
        </div>

        <div className="section__content">
          <h2 className="section__content--title">404</h2>
          <h3 className="title">This is not the page you are looking for!</h3>
          <Link to="/" className="btn" aria-label="Go back to the home page">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
