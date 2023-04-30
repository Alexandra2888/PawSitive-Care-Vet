import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  return (
    <section className="section__container">
      <div className="container">
        <div className="section__image">
          <img src="src/assets/not-found.png" alt="Not found Image" />
        </div>

        <div className="section__content">
          <h1>404</h1>
          <h2 className="title">This is not the page you are looking for!</h2>
          <Link to="/" className="btn">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
