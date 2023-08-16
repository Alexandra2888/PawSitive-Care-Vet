import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../components/auth/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const onPasswordChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        const userData = JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        });
        localStorage.setItem("user", userData);
        navigate("/add-appointments");
      }
    } catch (error) {
      toast.error("Bad credentials!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <section className="container">
      <ToastContainer/>
      <div className="card">
        <figure>
          <figcaption aria-label="login-image">
            <img src="/assets/login.png" alt="login" />
          </figcaption>
        </figure>
        <form className="card-form" onSubmit={onSubmit}>
          <h2 className="card-form-title">Sign In</h2>
          <div className="input">
            <Input
              type="email"
              className="input-field"
              onChange={onEmailChange}
              required
            />
            <label className="input-label">Email:</label>
          </div>
          <div className="input">
            <Input
              type="password"
              className="input-field"
              onChange={onPasswordChange}
              required
            />
            <label className="input-label">Password:</label>
          </div>
          <div className="action">
            <Button>Get started</Button>
          </div>
          <div className="action-auth">
            <OAuth />
          </div>
        </form>
        <div className="card-info">
          <div>
            <div>
              Don't you have an account?
              <Link to="/sign-up">
                <div className="wrapper">
                  <div className="inner">
                    <div  className="hover-shadow hover-color">
                    <span>R</span>
                      <span>e</span>
                      <span>g</span>
                      <span>i</span>
                      <span>s</span>
                      <span>t</span>
                      <span>e</span>
                      <span>r</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/forgot-password">
                <div className="wrapper">
                  <div className="inner">
                    <div className="hover-shadow hover-color">
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
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
