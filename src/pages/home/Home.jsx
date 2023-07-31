import Banner from "../../components/banner/Banner";
import Provide from "../../components/provide/Provide";
import Services from "../../components/services/Services";
import Specialists from "../../components/specialists/Specialists";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../contact/Contact";
import Faq from '../../components/faq/Faq';
import Appointment from "../../components/appointment/Appointment";

const Home = () => {
  return (
    <>
      <Banner />
      <Provide />
      <Services />
      <Specialists />
      <Testimonials />
      <Contact />
      <Appointment />
      <Faq />
    </>
  );
};

export default Home;
