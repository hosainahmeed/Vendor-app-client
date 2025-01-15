import { Outlet, useLocation } from "react-router-dom"
import NavbarHeader from "../pages/Shared/header/NavbarHeader"
import Footer from "../pages/Shared/footer/Footer"

function MainLayOut() {

    return (
        <div>
            <NavbarHeader />
            <Outlet></Outlet>
            {/* <Footer /> */}
        </div>
    )
}
// max-w-screen-lg mx-auto px-2

export default MainLayOut