import Banner from "../../components/banner/Banner";
import Provide from '../../components/provide/Provide';
import Services from '../../components/services/Services';
import Specialists from '../../components/specialists/Specialists';
import "./home.css";
const Home = () => {
  return (
    <>
   <Banner />
      <Provide />
      <Services />
      <Specialists />
    </>
  )
};

export default Home;
