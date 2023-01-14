import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../../Pages/Common/NavMenu/NavMenu";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
            <Sidebar />
        </div>
    );
};

export default Main;
