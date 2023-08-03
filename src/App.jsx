import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./UI/navbar/Navbar";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Footer from "./UI/footer/Footer";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
