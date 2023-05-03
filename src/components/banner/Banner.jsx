import './Banner.scss';

const Banner = () => {
    return (
      <header role="banner" id="banner">
        <div className="container">
          <div className="header__content">
            <h1 id="banner-heading">
              Complete Health Care Solutions For Every Pet
            </h1>
            <p>Because your pet&apos;s health is our top priority.</p>
            <a href="#appointment" className="btn">
              Make Appointment
            </a>
          </div>
          <div className="header__image">
            <img src="src/assets/banner.png" alt="Header Image" />
          </div>
        </div>
      </header>
    );
}

export default Banner;