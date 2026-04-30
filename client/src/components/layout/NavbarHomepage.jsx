import React from "react";

import { CgProfile } from "react-icons/cg";
export default function NavbarHomepage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <nav className=" text-white px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <ul className="hidden md:flex gap-6 text-black">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">Courses</li>
            <li className=" cursor-pointer">About US</li>
            <li className=" cursor-pointer">Job Board</li>
          </ul>

          {/* Desktop Menu */}
          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-md text-black border border-gray-300"
            />
            <button
              type="submit"
              className="  px-3 py-2 rounded-md  text-black"
            >
              Instructor
            </button>
            <button type="submit" className="  px-3 py-2 rounded-md text-black">
              My Learning
            </button>
            <CgProfile className="text-black items-center text-xl" />
          </form>

          {/* Mobile Button */}
        </div>
      </nav>
    </div>
  );
}
