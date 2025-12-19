"use client";

import { useEffect, useState } from "react";
import NavbarMenu from "./NavbarMenu";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Selalu tampil jika di posisi paling atas
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        // Sembunyikan saat scroll ke bawah
        setShow(false);
      } else {
        // Tampilkan kembali saat scroll ke atas
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar bg-base-100 px-4 shadow-sm border-b border-base-200">
        {/* LEFT SECTION */}
        <div className="navbar-start flex items-center">
          {/* MOBILE MENU (HAMBURGER) */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-1 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

          {/* LOGO & BRAND */}
          <div className="flex items-center gap-2 ml-1 lg:ml-2">
            <div className="relative w-8 h-8 lg:w-9 lg:h-9 flex-shrink-0">
              <Image
                src="/logo-circle.png" // Pastikan file ini ada di folder /public
                alt="JejeJoki Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <a className="text-lg lg:text-xl font-bold tracking-tighter xs:block">
              JEJEJOKI
            </a>
          </div>
        </div>

        {/* CENTER SECTION (DESKTOP ONLY) */}
        <div className="navbar-center hidden lg:flex">
          <NavbarMenu />
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          {/* Social Icons - Hidden on very small screens if needed, or keep them small */}
          <div className="flex items-center gap-3 mr-1 sm:mr-2">
            <a 
              href="https://instagram.com/jejejoki.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/6282280005665" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Action Button */}
          <a 
            className="btn btn-warning btn-xs sm:btn-sm px-2 sm:px-4" 
            href="https://wa.me/6282280005665" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}