import { Banner } from "../../components/banner";
import { Provide } from "../../components/provide";
import { Services } from "../../components/services";
import { Specialists } from "../../components/specialists";
import { Testimonials } from "../../components/testimonials";
import { Contact } from "../contact";
import { Faq } from "../../components/faq";

const Home = () => {
  return (
    <>
      <Banner />
      <Provide />
      <Services />
      <Specialists />
      <Testimonials />
      <Contact />
      <Faq />
    </>
  );
};

export default Home;
