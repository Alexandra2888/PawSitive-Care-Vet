import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { supabase } from "../../../supabase";

const OAuth = () => {
  async function onGoogleClick() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/appointments`,
        },
      });

      if (error) throw error;
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }

  return (
    <button type="button" className="btn-primary" onClick={onGoogleClick}>
      <FcGoogle />
      Sign in with Google
    </button>
  );
};

export default OAuth;
