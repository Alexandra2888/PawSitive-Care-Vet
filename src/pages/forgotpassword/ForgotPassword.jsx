import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../../components/auth/OAuth";

export default function ForgotPassword() {
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
    <section>
      <h1 >Forgot Password</h1>
      <div>
        <div>
          {/* <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
          /> */}
        </div>
        <div >
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
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
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