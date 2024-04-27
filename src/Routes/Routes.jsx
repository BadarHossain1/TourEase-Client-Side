import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Routes = () => {
    return (
        <div className=" mt-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-[100px]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Routes;