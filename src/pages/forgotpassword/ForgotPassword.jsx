import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../../components/auth/OAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
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
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_KahcrRtwztWDjnrYEZJiKh_rJK3mZd037jmHqcWcoElnnBDL" alt="forgot-password"/>
          </figcaption>
        </figure>
        <form className="card-form" onSubmit={onSubmit} >
          <h2 className="card-form-title">Forgot password</h2>
          <div className="input">
            <input type="text" className="input-field" onChange={onChange} required />
            <label className="input-label">Email:</label>
          </div>
          <div class="action">
            <button className="btn">Recover password</button>
          </div>
          <div className="action-auth">
            <OAuth />
          </div>
        </form>
        <div className="card-info">
          <div>
            <p>
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
              <Link to="/sign-up">
                <div className="wrapper">
                  <div className="inner">
                    <a href="" className="hover-shadow hover-color">
                      <span>S</span>
                      <span>i</span>
                      <span>g</span>
                      <span>n</span>
                      <span>i</span>
                      <span>n</span>
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
export default ForgotPassword;