import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-239px)] pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
