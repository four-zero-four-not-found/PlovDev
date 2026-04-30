import React from "react";

export default function NavbarLogin() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <nav className="px-6 py-3 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <ul className="hidden md:flex gap-6 text-slate-800">
            <li className="hover:text-slate-600 cursor-pointer">Home</li>
            <li className="hover:text-slate-600 cursor-pointer">Courses</li>
            <li className="hover:text-slate-600 cursor-pointer">About US</li>
            <li className="hover:text-slate-600 cursor-pointer">Job Board</li>
          </ul>

          {/* Desktop Menu */}
          <form className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:w-auto md:flex-nowrap md:items-center">
            <div className="group flex w-full items-center gap-2 rounded-full border border-white/55 bg-white/65 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition focus-within:border-amber-300/90 focus-within:bg-white/80 focus-within:shadow-[0_12px_32px_rgba(245,158,11,0.14)] sm:flex-1 md:w-auto md:min-w-[13rem]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-slate-500 transition group-focus-within:text-amber-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="text"
                placeholder="Search courses"
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:w-40"
              />
            </div>
            <div className="grid w-full grid-cols-2 gap-3 sm:w-auto">
              <button
                type="submit"
                className="rounded-full border border-slate-300/80 bg-white/55 px-4 py-2 text-sm font-medium text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white/80"
              >
                Sign In
              </button>
              <button
                type="submit"
                className="rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-200 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_28px_rgba(245,158,11,0.22)] transition hover:-translate-y-0.5 hover:from-amber-400 hover:via-yellow-300 hover:to-orange-300"
              >
                Sign Up for free
              </button>
            </div>
          </form>

          {/* Mobile Button */}
        </div>
      </nav>
    </div>
  );
}
