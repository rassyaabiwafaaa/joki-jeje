"use client";

import { useState } from "react";
import SelectRank from "../ui/SelectRank";
import { STAR_PRICE } from "../../lib/starPrice";
import Image from "next/image";

/* ================= TYPES ================= */
type PackageType = keyof typeof STAR_PRICE;
type RankType = keyof typeof STAR_PRICE.joki_bintang;

/* ================= RANK CONFIG ================= */
// urutan rank (PENTING untuk kalkulasi)
const RANK_ORDER: RankType[] = [
  "epic",
  "legend",
  "mythic",
  "mythic_honor",
  "mythic_glory",
  "mythic_immortal",
];

// total bintang per rank
const RANK_TOTAL_STARS: Record<RankType, number> = {
  epic: 25,              // Epic V → Epic I
  legend: 25,            // Legend V → Legend I
  mythic: 25,            // 0–24
  mythic_honor: 25,      // 25–49
  mythic_glory: 50,      // 50–99
  mythic_immortal: 100,  // 100+
};

export default function Calculator() {
  const [name, setName] = useState("");
  const [fromRank, setFromRank] = useState<RankType | "">("");
  const [toRank, setToRank] = useState<RankType | "">("");
  const [currentStars, setCurrentStars] = useState(0);
  const [packageType, setPackageType] =
    useState<PackageType>("joki_bintang");

  /* ================= LOGIC ================= */
  const calculatePrice = () => {
    if (!fromRank || !toRank) return 0;

    const fromIndex = RANK_ORDER.indexOf(fromRank);
    const toIndex = RANK_ORDER.indexOf(toRank);

    if (fromIndex === -1 || toIndex === -1) return 0;
    if (fromIndex > toIndex) return 0;

    // 1️⃣ Hitung total bintang yang harus dikerjakan
    let totalStarsNeeded = 0;

    for (let i = fromIndex; i <= toIndex; i++) {
      const rank = RANK_ORDER[i];

      if (i === fromIndex) {
        totalStarsNeeded += Math.max(
          RANK_TOTAL_STARS[rank] - currentStars,
          0
        );
      } else {
        totalStarsNeeded += RANK_TOTAL_STARS[rank];
      }
    }

    // 2️⃣ Konversi bintang ke harga per tier
    let totalPrice = 0;
    let remainingStars = totalStarsNeeded;

    for (let i = fromIndex; i <= toIndex; i++) {
      if (remainingStars <= 0) break;

      const rank = RANK_ORDER[i];
      const starsAtThisRank = Math.min(
        remainingStars,
        RANK_TOTAL_STARS[rank]
      );

      totalPrice +=
        starsAtThisRank * STAR_PRICE[packageType][rank];

      remainingStars -= starsAtThisRank;
    }

    return totalPrice;
  };

  const totalPrice = calculatePrice();

  const waMessage = encodeURIComponent(
    `Halo Admin, saya mau pesan jasa joki ML.

Nama: ${name || "-"}
Jenis Joki: ${
      packageType === "joki_bintang" ? "Joki Bintang" : "Joki Gendong"
    }
Rank Awal: ${fromRank}
Rank Akhir: ${toRank}
Estimasi Harga: Rp ${totalPrice.toLocaleString()}`
  );

  const waLink = `https://wa.me/6285782643433?text=${waMessage}`;

  /* ================= UI ================= */
  return (
    <section className="px-4 py-20 bg-base-200 border-b border-base-300">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Kalkulator Harga Joki
        </h2>

        {/* SLOT GAMBAR */}
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-base-300 shadow-sm">
            {packageType === "joki_bintang" ? (
              <Image
                src="/joki-bintang-awal-seasion-39.jpeg"
                alt="Paket Joki Bintang Season 39"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            ) : (
              <Image
                src="/joki-gendong-awal-season.jpeg"
                alt="Paket Joki Gendong"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            )}
          </div>
        </div>

        {/* PILIH PAKET */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            className={`btn ${
              packageType === "joki_bintang"
                ? "btn-warning"
                : "btn-outline"
            }`}
            onClick={() => setPackageType("joki_bintang")}
          >
            Joki Bintang
          </button>
          <button
            className={`btn ${
              packageType === "joki_gendong"
                ? "btn-warning"
                : "btn-outline"
            }`}
            onClick={() => setPackageType("joki_gendong")}
          >
            Joki Gendong
          </button>
        </div>

        {/* NAMA */}
        <div className="mt-6">
          <label className="label">
            <span className="label-text">Nama</span>
          </label>
          <input
            type="text"
            placeholder="Nama kamu"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* RANK */}
        <div className="mt-6 space-y-4">
          <SelectRank
            label="Rank Awal"
            value={fromRank}
            onChange={(val) => setFromRank(val as RankType)}
            options={RANK_ORDER}
          />

          <div>
            <label className="label">
              <span className="label-text">Bintang Saat Ini</span>
            </label>
            <input
              type="number"
              min={0}
              max={5}
              className="input input-bordered w-full"
              value={currentStars}
              onChange={(e) =>
                setCurrentStars(Number(e.target.value))
              }
            />
          </div>

          <SelectRank
            label="Target Rank"
            value={toRank}
            onChange={(val) => setToRank(val as RankType)}
            options={RANK_ORDER}
          />
        </div>
        <p className="text-xs text-center text-base-content/60 mt-2">
  * Estimasi dihitung hingga rank tujuan dalam kondisi penuh (maksimal bintang). Jika rank awal berada di sub-tier tertentu (Epic I–V), detail akan dikonfirmasi ulang oleh admin.
</p>

        {/* HASIL */}
        <div className="mt-8 p-6 border border-warning rounded-box text-center">
          <p className="text-sm uppercase tracking-widest text-warning">
            Estimasi Harga
          </p>
          <p className="text-3xl font-extrabold mt-2 text-warning">
            Rp {totalPrice.toLocaleString()}
          </p>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-success btn-lg w-full mt-6 ${
            !fromRank || !toRank || totalPrice === 0
              ? "btn-disabled"
              : ""
          }`}
        >
          Pesan via WhatsApp
        </a>

        <p className="text-xs text-center text-base-content/60 mt-2">
          * Harga estimasi, admin akan konfirmasi ulang
        </p>
      </div>
    </section>
  );
}
