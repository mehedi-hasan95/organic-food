import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BsPerson, BsSearch } from "react-icons/bs";
import MainMenu from "./MainMenu";

const TopMenu = () => {
    return (
        <div className="py-5">
            <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="" className=" w-16" />
                    <h2 className="font-medium text-xl lg:text-3xl uppercase">
                        Organic Food
                    </h2>
                </Link>
                <div className="lg:w-96">
                    <div className="flex items-center border py-1 pl-3 gap-3 rounded-full">
                        <BsSearch className=" text-3xl" />
                        <input
                            type="search"
                            name="search"
                            id=""
                            placeholder="Search here..."
                            className="w-full outline-none"
                        />
                        <input
                            type="submit"
                            value="Search"
                            className="bg-gray-500 px-5 py-1 rounded-full text-white text-lg font-medium"
                        />
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <FaRegHeart className="text-2xl" />
                    <FaShoppingCart className="text-2xl" />
                    <div className="flex gap-1 items-center">
                        <span className="bg-gray-200 p-2 rounded-full">
                            <BsPerson className="text-2xl" />
                        </span>
                        <span className="text-lg">Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;
