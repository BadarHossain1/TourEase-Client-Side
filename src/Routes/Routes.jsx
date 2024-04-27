import { Outlet } from "react-router-dom";
 import Navbar from "../Navbar/Navbar";



const Routes = () => {
    return (
        <div className=" mt-2">
            <Navbar></Navbar> 
            <Outlet></Outlet>
        </div>
    );
};

export default Routes;