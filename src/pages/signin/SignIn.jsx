import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../components/auth/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  
  function onEmailChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }

  function onPasswordChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  }


  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }
  return (
    <section className="container">
      <div className="card">
      <figure>
        <figcaption aria-label="login-image">
        <img src="/assets/login.png" alt="login" />
        </figcaption>
       </figure>
        <form className="card-form" onSubmit={onSubmit}>
          <h2 className="card-form-title">Sign In</h2>
          <div className="input">
            <input
              type="email"
              className="input-field"
              onChange={onEmailChange}
              required
            />
            <label className="input-label">Email:</label>
          </div>
          <div class="input">
            <input
              type="password"
              className="input-field"
              onChange={onPasswordChange}
              required
            />
            <label className="input-label">Password:</label>
          </div>
          <div class="action">
            <button className="btn">Get started</button>
          </div>
          <div className="action-auth">
            <OAuth />
          </div>
        </form>
        <div className="card-info">
          <div>
            <p>
              Don't have an account?
              <Link to="/sign-up">
                <div className="wrapper">
                  <div className="inner">
                    <a href="" className="hover-shadow hover-color">
                      <span>R</span>
                      <span>e</span>
                      <span>g</span>
                      <span>i</span>
                      <span>s</span>
                      <span>t</span>
                      <span>e</span>
                      <span>r</span>
                    </a>
                  </div>
                </div>
              </Link>
            </p>
            <p>
              <Link to="/forgot-password">
                <div className="wrapper">
                  <div className="inner">
                    <a href="" className="hover-shadow hover-color">
                      <span>F</span>
                      <span>o</span>
                      <span>r</span>
                      <span>g</span>
                      <span>o</span>
                      <span>t</span>
                      <span> </span>
                      <span>p</span>
                      <span>a</span>
                      <span>s</span>
                      <span>s</span>
                      <span>w</span>
                      <span>o</span>
                      <span>r</span>
                      <span>d</span>
                      <span>?</span>
                    </a>
                  </div>
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}