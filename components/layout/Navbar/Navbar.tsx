"use client";

import { useEffect, useState } from "react";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // selalu tampil di atas
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        // scroll ke bawah
        setShow(false);
      } else {
        // scroll ke atas
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar bg-base-100 px-4 shadow-sm">
        {/* LEFT */}
        <div className="navbar-start">
          {/* MOBILE MENU */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <NavbarMenu isMobile />
          </div>

          {/* LOGO */}
          <a className="btn btn-ghost text-xl ml-2">
            Website Name
          </a>
        </div>

        {/* CENTER (DESKTOP) */}
        <div className="navbar-center hidden lg:flex">
          <NavbarMenu />
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <a className="btn btn-warning btn-sm" href="https://wa.me/6282299930232" target="_blank">
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
