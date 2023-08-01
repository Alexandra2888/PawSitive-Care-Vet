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
    <section id="services">
    <div className="services__container">
      <div className="section__image">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_KahcrRtwztWDjnrYEZJiKh_rJK3mZd037jmHqcWcoElnnBDL" alt="Services Image" className="img" />
      </div>
      <div className="service__section-content">
        <h1 className="service__section-title">Forgot password</h1>
        <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />

            <div>
              <p >
                Don't have a account?
                <Link
                  to="/sign-up" className="action"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in" className="action"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              type="submit" className="btn"
            >
              Send reset password
            </button>
            <div >
              <p >OR</p>
            </div>
            <OAuth />
          </form>
      </div>
    </div>
    </section>
 
 );
}
export default ForgotPassword;