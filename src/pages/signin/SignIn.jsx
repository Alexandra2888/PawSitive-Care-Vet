import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../components/auth/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
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
    <section id="services">
    <div className="services__container">
      <div className="section__image">
        <img src="/assets/login.png" alt="Services Image" className="img" />
      </div>
      <div className="service__section-content">
        <h1 className="service__section-title">Sign in</h1>
       
        <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
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
                  to="/forgot-password" className="action"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              type="submit" className="btn"
            >
              Sign in
            </button>
            <div>
              <p>OR</p>
            </div>
            <OAuth />
          </form>



      </div>
    </div>
  </section>
 
  );
}