"use client";

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
  { title: "Epic", price: 55000 },
  { title: "Legend", price: 65000 },
  { title: "Mythic", price: 165000 },
  { title: "Mythic Honor", price: 195000 },
  { title: "Mythic Glory", price: 245000 },
  { title: "Mythic Immortal", price: 285000 },
];

const HEMAT_15: PackageItem[] = [
  { title: "Epic", price: 90000 },
  { title: "Legend", price: 105000 },
  { title: "Mythic", price: 245000 },
  { title: "Mythic Honor", price: 290000 },
  { title: "Mythic Glory", price: 365000 },
  { title: "Mythic Immortal", price: 435000 },
];

export default function TierPackageSection() {
  const renderCards = (data: PackageItem[], label: string) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition"
          >
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="text-2xl font-bold text-warning">
                Rp {item.price.toLocaleString()}
              </p>

              <a
                href={`https://wa.me/628XXXXXXXXXX?text=${waMessage}`}
                target="_blank"
                className="btn btn-primary btn-sm mt-4"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      className="px-4 py-20 bg-base-100 border-b border-base-300"
      id="tier-package"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= AWAL SEASON ================= */}
        <div>
          <h2 className="text-3xl font-bold text-center">
            Paket Joki Awal Season 39
          </h2>
          <p className="mt-3 text-center text-base-content/70">
            Cocok untuk start awal season dengan aman dan cepat.
          </p>

          <div className="mt-8 flex justify-center">
  <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-base-300 shadow-sm">
    <Image
      src="/paket-joki-awal-seasion-39.jpeg"
      alt="Paket Hemat Joki Bintang Season 39"
      width={1200}
      height={675}
      className="w-full h-auto object-cover"
      priority
    />
  </div>
</div>
          
          <div className="mt-10">
            {renderCards(AWAL_SEASON_PACKAGES, "Paket Joki Awal Season 39")}
          </div>
        </div>

        {/* ================= PAKET HEMAT ================= */}
        <div>
          <h2 className="text-3xl font-bold text-center">
            Paket Hemat Joki Bintang Awal Season 39
          </h2>
          <p className="mt-3 text-center text-base-content/70">
            Lebih murah, bonus star, cocok buat push santai.
          </p>

          {/* SLOT GAMBAR PROMO */}
          <div className="mt-8 flex justify-center">
  <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-base-300 shadow-sm">
    <Image
      src="/paket-hemat-joki-bintang-awal-season.jpeg"
      alt="Paket Hemat Joki Bintang Season 39"
      width={1200}
      height={675}
      className="w-full h-auto object-cover"
      priority
    />
  </div>
</div>

          {/* Order 10 */}
          <div className="mt-14">
            <h3 className="text-xl font-semibold mb-4">
              Order 10 ⭐ (Bonus 1 Star)
            </h3>
            {renderCards(HEMAT_10, "Paket Hemat Order 10 (Bonus 1 Star)")}
          </div>

          {/* Order 15 */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-4">
              Order 15 ⭐ (Bonus 2 Star)
            </h3>
            {renderCards(HEMAT_15, "Paket Hemat Order 15 (Bonus 2 Star)")}
          </div>
        </div>
      </div>
    </section>
  );
}
