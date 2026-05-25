import React, { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logOut } from "../../service/auth.service";
export default function NavbarHomepage() {
  const { accessToken } = useAuth();

  const handleLogout = () => {
    if (accessToken) {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign out!"
      }).then((result) => {
        if (result.isConfirmed) {
            logout()
        }
      });
    }
  }

  const logout = async () => {
     await logOut()
  }
  
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto max-w-[1200px]">
          <nav className="rounded-[28px] border border-white/45 bg-white/40 px-6 py-3 text-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <ul className="hidden gap-6 text-black md:flex">
                <li className="cursor-pointer">
                  <Link to="/homepage">Home</Link>
                </li>
                <li className="cursor-pointer">Courses</li>
                <li className="cursor-pointer">About US</li>
                <li className="cursor-pointer">Job Board</li>
              </ul>

              {/* Desktop Menu */}
              <form className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-full border border-white/55 bg-white/65 px-3 py-2 text-black shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md"
                />
                <button
                  type="submit"
                  className="rounded-full border border-white/45 bg-white/45 px-3 py-2 text-black backdrop-blur-md"
                >
                  Instructor
                </button>
                <button
                  type="submit"
                  className="rounded-full border border-white/45 bg-white/45 px-3 py-2 text-black backdrop-blur-md"
                >
                  My Learning
                </button>
                {/* <div className="rounded-full border border-white/45 bg-white/45 p-2 backdrop-blur-md">
                <CgProfile className="items-center text-xl text-black" />
              </div> */}

                {accessToken ? (
                  <Link className="rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-200 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_28px_rgba(245,158,11,0.22)] transition-colors duration-300 ease-out hover:from-amber-400 hover:via-yellow-300 hover:to-orange-300">Sign out</Link>
                ) : (
                  <Link to = "/authpage" className="rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-200 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_28px_rgba(245,158,11,0.22)] transition-colors duration-300 ease-out hover:from-amber-400 hover:via-yellow-300 hover:to-orange-300">Sign in</Link>
                )}
              </form>

              {/* Mobile Button */}
            </div>
          </nav>
        </div>
        <Outlet />
      </header>
    </>
  );
}
