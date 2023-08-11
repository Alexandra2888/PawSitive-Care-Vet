import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../../components/auth/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUp.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
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

  function onNameChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }


  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up was successful");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with the registration");
    }
  }
  return (
    <section className="container">
      <div className="card">
      <figure>
        <figcaption aria-label="register-image">
        <img src="/assets/register.png" alt="register" />
        </figcaption>
      </figure>      
        <form className="card-form" onSubmit={onSubmit}>
          <h2 className="card-form-title">Sign Up</h2>
          <div className="input">
          <input
              type="text"
              id="name"
              value={name}
              onChange={onNameChange}
              className="input-field"
              />
            <label className="input-label">Name:</label>
          </div>

          <div className="input">
            <input
              type="email"
              value={email}
              className="input-field"
              onChange={onEmailChange}
            />
            <label className="input-label">Email:</label>
          </div>

          <div class="input">
          <input
                type="password"
                id="password"
                value={password}
                onChange={onPasswordChange}
                className="input-field"
            />
            <label className="input-label">Password:</label>
          </div>

          <div class="action">
            <button className="btn" type="submit">Get started</button>
          </div>
          <div className="action-auth">
            <OAuth />
          </div>
        </form>
        <div className="card-info">
          <div>
            <p>
              Have an account?
              <Link to="/sign-in">
                <div className="wrapper">
                  <div className="inner">
                    <a href="" class="hover-shadow hover-color">
                      <span>L</span>
                      <span>o</span>
                      <span>g</span>
                      <span>i</span>
                      <span>n</span>
                    </a>
                  </div>
                </div>
              </Link>
            </p>
            <p>
              <Link to="/forgot-password">
                <div class="wrapper">
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
};

export default SignUp;