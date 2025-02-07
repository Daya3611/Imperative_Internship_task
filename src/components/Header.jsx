import React from "react";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-between items-center text-center p-4 border-b border-neutral-300  w-full rounded-b-3xl">
      <h1>
        <img
          src="images/logo.png"
          alt="Vite Logo"
          className=" h-full w-[90%] md:h-[60px] md:w-[200px]"
        />
      </h1>
      <div className="w-full justify-between items-center flex">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-3xl w-[80%] md:w-[90%] lg:w-[300px]"
        />
      </div>
      <nav className="">
        <div className="hidden md:flex items-center space-x-0 sm:space-x-0 md:space-x-1.5 lg:space-x-4">
          <a href="#" className="p-2">
            Home
          </a>
          <a href="#" className="p-2">
            About
          </a>
          <a href="#" className="p-2">
            Contact
          </a>
        </div>

        <div className="md:hidden flex items-center justify-center space-x-0 sm:space-x-0 md:space-x-1.5 lg:space-x-4">
          <IoMenu className="h-8 w-8" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
