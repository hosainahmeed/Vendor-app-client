import { Outlet } from "react-router-dom";
import NavbarHeader from "../pages/Shared/header/NavbarHeader";
import Footer from "../pages/Shared/footer/Footer";

function MainLayOut() {
  return (
    <div className="flex flex-col justify-center">
      <div className="sticky top-0 left-0 z-[999]">
        <NavbarHeader />
      </div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default MainLayOut;
