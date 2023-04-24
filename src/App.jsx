import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
