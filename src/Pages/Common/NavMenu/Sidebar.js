import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiBarChartHorizontalLine } from "react-icons/ri";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div onClick={() => setShowSidebar(!showSidebar)}>
            {showSidebar ? (
                <button
                    className="fixed flex text-4xl text-black items-center cursor-pointer left-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <p
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="z-30 flex items-center cursor-pointer left-10 top-6 bg-eucalyptus-300 py-3 px-3 rounded-full text-white"
                >
                    <RiBarChartHorizontalLine />
                    <p className="px-5 md:px-8 lg:px-10 text-lg font-medium text-white">
                        {" "}
                        All Catagories
                    </p>
                    <RiArrowDownSLine />
                </p>
            )}

            <div
                className={`top-0 left-0 w-96 bg-white text-black p-10 pl-20 fixed h-full z-40  ease-in-out duration-300 ${
                    showSidebar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <h3 className={`mt-20 text-4xl font-semibold`}>
                    <Link>I am a sidebar</Link>
                </h3>
            </div>
            <div className={`${showSidebar && "sidebar"}`}></div>
        </div>
    );
};

export default Sidebar;
