"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SLIDES = [
  {
    src: "/1.jpeg",
    alt: "Paket Joki Bintang",
  },
  {
    src: "/2.jpeg",
    alt: "Paket Joki Awal Season 39",
  },
  {
    src: "/3.jpeg",
    alt: "Paket Hemat Joki Bintang",
  },
];

export default function Hero() {
  return (
    <section className="relative px-4 py-32 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
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
            <a href="#kalkulator-rank" className="btn btn-warning btn-lg">
              Hitung Harga Sekarang
            </a>

            <Link href="#paket-joki" className="btn btn-outline btn-lg">
              Lihat Paket
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-base-300 shadow-lg bg-base-200">

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop
              pagination={{ clickable: true }}
              navigation
              className="hero-swiper"   // 🔥 CLASS KUNCI
            >
              {SLIDES.map((slide) => (
                <SwiperSlide key={slide.src}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={500}
                    height={500}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>

      </div>
    </section>
  );
}