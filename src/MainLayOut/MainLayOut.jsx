import { Outlet, } from "react-router-dom";
import Navbar from "../Component/Sheard/Navbar";
import Footer from "../Component/Sheard/Footer";

const MainLayOut = () => {

    return (
        <div className="">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;