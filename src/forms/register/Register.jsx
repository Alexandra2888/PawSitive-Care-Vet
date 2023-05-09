import "./Register.scss";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section__image">
          <img
            src="/assets/register.png"
            alt="Services Image"
            className="img"
          />
        </div>
        <div className="section__content">
          <h1>Login</h1>
          <form>
            <label>Name:</label>
            <input type="text" htmlFor="name" />
          </form>

          <h4>
            You don't have an account? Go to <b />
            <NavLink to="/login">Login</NavLink>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Register;
