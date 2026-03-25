import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSessionReady, setIsSessionReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsSessionReady(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      toast.success("Password updated successfully!");
      setTimeout(() => navigate("/sign-in"), 2000);
    } catch (error) {
      toast.error("Failed to update password. Please try again.");
    }
  };

  if (!isSessionReady) {
    return (
      <section className="container">
        <ToastContainer />
        <div className="card">
          <div className="card-form">
            <h2 className="card-form-title">Verifying recovery link…</h2>
            <p className="text-center mt-4">
              If this takes too long, request a new reset link from the{" "}
              <a href="/forgot-password" className="underline">
                forgot password
              </a>{" "}
              page.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <ToastContainer />
      <div className="card">
        <form className="card-form" onSubmit={handleSubmit}>
          <h2 className="card-form-title">Reset Password</h2>

          <div className="input">
            <Input
              id="new-password"
              type="password"
              className="input-field"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
            />
            <label htmlFor="new-password" className="input-label">New Password:</label>
          </div>

          <div className="input">
            <Input
              id="confirm-password"
              type="password"
              className="input-field"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              required
            />
            <label htmlFor="confirm-password" className="input-label">Confirm Password:</label>
          </div>

          <div className="action">
            <Button type="submit">Update Password</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
