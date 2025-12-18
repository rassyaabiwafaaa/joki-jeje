"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    src: "/joki-bintang-awal-seasion-39.jpeg",
    alt: "Paket Joki Gendong",
  },
  {
    src: "/paket-joki-awal-seasion-39.jpeg",
    alt: "Paket Joki Awal Season 39",
  },
  {
    src: "/paket-hemat-joki-bintang-awal-season.jpeg",
    alt: "Paket Hemat Joki Bintang",
  },
  {
    src: "/joki-gendong-awal-season.jpeg",
    alt: "Paket Joki Gendong",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 py-32 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-warning/10 text-warning text-sm font-medium">
            ⭐ Joki ML Aman & Terpercaya
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Push Rank
            <span className="block text-warning">
              Mobile Legends
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-base-content/70 max-w-xl">
            Capek stuck di rank yang itu-itu aja?
            Serahin ke tim profesional kami, proses cepat,
            akun aman, dan harga transparan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#Kalkulator Rank" className="btn btn-warning btn-lg">
              Hitung Harga Sekarang
            </a>

            <Link href="#Paket Joki" className="btn btn-outline btn-lg">
              Lihat Paket
            </Link>
          </div>
        </div>

        {/* ================= RIGHT IMAGE SLIDER ================= */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-base-300 shadow-lg bg-base-200">

            {/* IMAGE (SINGLE RENDER) */}
            <Image
              key={SLIDES[current].src} // 🔥 INI KUNCI FIX
              src={SLIDES[current].src}
              alt={SLIDES[current].alt}
              width={500}
              height={500}
              priority
              className="w-full h-auto object-cover transition-opacity duration-700"
            />

            {/* DOT INDICATOR */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {SLIDES.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition
                    ${index === current
                      ? "bg-warning"
                      : "bg-base-content/30"}
                  `}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}