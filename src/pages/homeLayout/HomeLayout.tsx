import { Outlet } from "react-router-dom";
import { Navbar } from "../../UI/navbar";
import { Footer } from "../../UI/footer";

const HomeLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomeLayout;
