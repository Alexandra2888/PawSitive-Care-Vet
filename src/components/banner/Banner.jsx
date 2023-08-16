import './Banner.scss';
import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
      <header role="banner" id="banner">
        <div className="banner__container">
          <div className="header__content">
            <h1 id="banner__heading"  className="header__content-title">
              Complete Health Care Solutions For Every Pet
            </h1>
            <p className='header__content-para'>Because your pet&apos;s health is our top priority.</p>
            <NavLink to="/sign-up" className="btn">
              Make Appointment
            </NavLink>
          </div>
          <div className="header__image">
            <figure>
              <figcaption aria-label="banner">
                <img src="/assets/banner.png" alt="banner" />
              </figcaption>
            </figure>
          </div>
        </div>
      </header>
    );
}

export default Banner;