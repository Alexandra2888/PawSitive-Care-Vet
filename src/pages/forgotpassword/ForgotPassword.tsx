import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OAuth } from "../../components/auth";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e:any) => {
    setEmail(e.target.value);
  }

  const navigate = useNavigate();

  async function onSubmit(e:any) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      navigate("/");
    } catch (error) {
        toast.error("Could not send reset password!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <section className="container">
      <ToastContainer/>
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
          <div>
            <div>
              Have an account?
              <Link to="/sign-in">
                <div className="wrapper">
                  <div className="inner">
                    <div  className="hover-shadow hover-color">
                      <span>L</span>
                      <span>o</span>
                      <span>g</span>
                      <span>i</span>
                      <span>n</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/sign-up">
                <div className="wrapper">
                  <div className="inner">
                    <div className="hover-shadow hover-color">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
