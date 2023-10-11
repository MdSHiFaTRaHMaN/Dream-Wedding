import { Outlet } from "react-router-dom";
import Navber from "../HomePage/Navber/Navber";
import Footer from "../HomePage/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="bg-white px-3 lg:px-24">
            <Navber></Navber>
           </div>
            <div className=" max-w-7xl mx-auto">
            <Outlet></Outlet>
              </div>
              <Footer></Footer>
        </div>
    );
};

export default Root;