import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./UI/navbar/Navbar";
import Footer from "./UI/footer/Footer";
import Login from "./forms/login/Login";
import Register from "./forms/register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
