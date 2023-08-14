import {Outlet} from "react-router-dom";
import Navbar from "../../UI/navbar/Navbar";
import Footer from "../../UI/footer/Footer";


const HomeLayout = () => {
  return (
   <main>
    <Navbar/>
<Outlet/>
<Footer/>
   </main>
  )
}


export default HomeLayout;