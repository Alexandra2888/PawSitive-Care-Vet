import { Outlet } from "react-router-dom";
import { Navbar } from "../../UI/navbar";
import { Footer } from "../../UI/footer";

const HomeLayout = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomeLayout;
