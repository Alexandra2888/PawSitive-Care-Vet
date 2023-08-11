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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignUp.scss";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }

  const onPasswordChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  }

  const onNameChange = (e) => {
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
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <section className="container">
      <ToastContainer/>
      <div className="card">
        <figure>
          <figcaption aria-label="register-image">
            <img src="/assets/register.png" alt="register" />
          </figcaption>
        </figure>
        <form className="card-form" onSubmit={onSubmit}>
          <h2 className="card-form-title">Sign Up</h2>
          <div className="input">
            <Input
              type="text"
              id={name}
              value={name}
              onChange={onNameChange}
              className="input-field"
            />
            <label className="input-label">Name:</label>
          </div>

          <div className="input">
            <Input
              type="email"
              value={email}
              className="input-field"
              onChange={onEmailChange}
            />
            <label className="input-label">Email:</label>
          </div>

          <div className="input">
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              className="input-field"
            />
            <label className="input-label">Password:</label>
          </div>

          <div className="action">
            <Button type="submit">Get started</Button>
          </div>
          <div className="action-auth">
            <OAuth />
          </div>
        </form>
        <div className="card-info">
          <p>
            Have an account?
            <Link to="/sign-in" className="hover-shadow hover-color">
              <span>L</span>
              <span>o</span>
              <span>g</span>
              <span>i</span>
              <span>n</span>
            </Link>
          </p>
          <p>
            <Link
              to="/forgot-password"
              className="hover-shadow hover-color"
            >
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
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
