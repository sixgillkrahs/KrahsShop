import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const LayoutMain = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutMain;
