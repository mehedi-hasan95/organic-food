import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div onClick={() => setShowSidebar(!showSidebar)}>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
                    fill="#2563EB"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <div
                className={`top-0 left-0 w-full bg-gradient-to-r from-black via-gray-100 to-transparent  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
                    showSidebar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <h3 className={`mt-20 text-4xl font-semibold text-white`}>
                    <Link>I am a sidebar</Link>
                </h3>
            </div>
        </div>
    );
};

export default Sidebar;
