import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-4 py-32 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* BADGE */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-warning/10 text-warning text-sm font-medium">
            ⭐ Joki ML Aman & Terpercaya
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Push Rank  
            <span className="block text-warning">
              Mobile Legends
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-base sm:text-lg text-base-content/70 max-w-xl">
            Capek stuck di rank yang itu-itu aja?  
            Serahin ke tim profesional kami, proses cepat,
            akun aman, dan harga transparan.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#Calculator"
              className="btn btn-warning btn-lg"
            >
              Hitung Harga Sekarang
            </a>

            <Link
              href="#Packages"
              className="btn btn-outline btn-lg"
            >
              Lihat Paket
            </Link>
          </div>

          {/* TRUST POINTS */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <p className="text-xl font-bold text-warning">100%</p>
              <p className="text-sm text-base-content/60">Akun Aman</p>
            </div>
            <div>
              <p className="text-xl font-bold text-warning">Fast</p>
              <p className="text-sm text-base-content/60">Proses Cepat</p>
            </div>
            <div>
              <p className="text-xl font-bold text-warning">Real</p>
              <p className="text-sm text-base-content/60">No Cheat</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-base-300 shadow-lg bg-base-200">
            <Image
              src="/paket-joki-awal-seasion-39.jpeg"
              alt="Paket Joki Awal Season 39"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
