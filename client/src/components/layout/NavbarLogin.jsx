import React from "react";

export default function NavbarLogin() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <nav className=" text-white px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <ul className="hidden md:flex gap-6 text-black">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Courses</li>
            <li className="hover:text-gray-300 cursor-pointer">About US</li>
            <li className="hover:text-gray-300 cursor-pointer">Job Board</li>
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
              className="border border-gray-300 px-3 py-2 rounded-md hover:bg-[#FFC400] text-black"
            >
              Sign In
            </button>
            <button
              type="submit"
              className="bg-[#FFD308]  px-3 py-2 rounded-md text-black"
            >
              Sign Up for free
            </button>
          </form>

          {/* Mobile Button */}
        </div>
      </nav>
    </div>
  );
}
