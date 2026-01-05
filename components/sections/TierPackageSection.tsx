"use client";

import { whatsappNumber } from "@/lib/constant";
import Image from "next/image";

type PackageItem = {
  title: string;
  price: number;
};

const AWAL_SEASON_PACKAGES: PackageItem[] = [
  { title: "Epic V → Legend V", price: 145000 },
  { title: "Epic V → Mythic", price: 320000 },
  { title: "Epic IV → Mythic", price: 290000 },
  { title: "Epic III → Mythic", price: 260000 },
  { title: "Epic II → Mythic", price: 230000 },
  { title: "Epic I → Mythic", price: 200000 },
];

const HEMAT_10: PackageItem[] = [
  { title: "Epic", price: 45000 },
  { title: "Legend", price: 55000 },
  { title: "Mythic", price: 145000 },
  { title: "Mythic Honor", price: 185000 },
  { title: "Mythic Glory", price: 235000 },
  { title: "Mythic Immortal", price: 275000 },
];

const HEMAT_15: PackageItem[] = [
  { title: "Epic", price: 65000 },
  { title: "Legend", price: 80000 },
  { title: "Mythic", price: 215000 },
  { title: "Mythic Honor", price: 275000 },
  { title: "Mythic Glory", price: 350000 },
  { title: "Mythic Immortal", price: 410000 },
];

export default function TierPackageSection() {
  const renderCards = (data: PackageItem[], label: string) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => {
        const waMessage = encodeURIComponent(
          `Halo Admin, saya mau pesan paket joki ML.
          Paket: ${label}
          Detail: ${item.title}
          Harga: Rp ${item.price.toLocaleString()}`
        );

        return (
          <div
            key={item.title}
            className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition"
          >
            <div className="card-body">
              <h3 className="card-title text-lg">
                {item.title}
              </h3>

              <p className="text-2xl font-extrabold text-warning">
                Rp {item.price.toLocaleString()}
              </p>

              <p className="text-sm text-base-content/60">
                Harga estimasi, admin akan konfirmasi ulang
              </p>

              <a
                // href={`https://wa.me/${whatsappNumber}?text=${waMessage}`}
                href={`linktr.ee/jejejoki.id`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm mt-4"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      className="px-4 py-24 bg-base-100 border-b border-base-300"
      id="paket-joki"
    >
      <div className="max-w-6xl mx-auto space-y-28">

        {/* ================= AWAL SEASON ================= */}
        {/* <div>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold">
              Paket Joki Awal Season 39
            </h2>
            <p className="mt-4 text-base-content/70">
              Solusi cepat buat naik rank di awal season  
              tanpa drama dan tetap aman.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-base-300 shadow-sm">
              <Image
                src="/paket-joki-awal-seasion-39.jpeg"
                alt="Paket Joki Awal Season 39"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-14">
            {renderCards(AWAL_SEASON_PACKAGES, "Paket Joki Awal Season 39")}
          </div>
        </div> */}

        {/* ================= PAKET HEMAT ORDER  ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold">
              Paket Hemat Joki Bintang
            </h2>
            <p className="mt-4 text-base-content/70">
              Lebih hemat, dapat bonus bintang,  
              cocok buat push santai tapi pasti naik.
            </p>
          </div>

          {/* Order 10 */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">
              Order 10 ⭐ <span className="text-warning">(Bonus 1 Star)</span>
            </h3>
            <div className="mt-10 flex justify-center">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-base-300 shadow-sm">
              <Image
                src="/3.jpeg"
                alt="Paket Hemat Joki Bintang Season 39"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
            {renderCards(HEMAT_10, "Paket Hemat Order 10 (Bonus 1 Star)")}
          </div>

          {/* Order 15 */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-6">
              Order 15 ⭐ <span className="text-warning">(Bonus 2 Star)</span>
            </h3>
            <div className="mt-10 flex justify-center">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-base-300 shadow-sm">
              <Image
                src="/4.jpeg"
                alt="Paket Hemat Joki Bintang Season 39"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
            {renderCards(HEMAT_15, "Paket Hemat Order 15 (Bonus 2 Star)")}
          </div>
        </div>

      </div>
    </section>
  );
}
