import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../../components/auth/OAuth";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }

  return (
    <section className="container">
      <div className="card">
        <figure>
          <figcaption aria-label="forgot-password-image">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_KahcrRtwztWDjnrYEZJiKh_rJK3mZd037jmHqcWcoElnnBDL"
              alt="forgot-password"
              style={{ width: "300px", height: "auto", margin: "2em auto" }}
            />
          </figcaption>
        </figure>
        <form className="card-form" onSubmit={onSubmit}>
          <h2 className="card-form-title">Forgot password</h2>
          <div className="input">
            <Input
              type="text"
              className="input-field"
              onChange={onChange}
              required
            />
            <label className="input-label">Email:</label>
          </div>
          <div className="action">
            <Button>Recover password</Button>
          </div>
          <div className="action-auth">
            <OAuth />
          </div>
        </form>
        <div className="card-info">
          <p>
            <Link to="/sign-up" className="hover-shadow hover-color">
              <span>R</span>
              <span>e</span>
              <span>g</span>
              <span>i</span>
              <span>s</span>
              <span>t</span>
              <span>e</span>
              <span>r</span>
            </Link>
          </p>
          <p>
            <Link to="/sign-in" className="hover-shadow hover-color">
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span>i</span>
              <span>n</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
