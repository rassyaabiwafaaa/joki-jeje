"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import SelectRank from "../ui/SelectRank";
import { STAR_PRICE } from "../../lib/starPrice";

type PackageType = keyof typeof STAR_PRICE;
type RankType = keyof typeof STAR_PRICE.joki_bintang;

const RANK_ORDER: RankType[] = [
  "Epic",
  "Legend",
  "Mythic",
  "Mythic Honor",
  "Mythic Glory",
  "Mythic Immortal",
];

const isTieredRank = (rank: RankType) => rank === "Epic" || rank === "Legend";

export default function Calculator() {
  const [name, setName] = useState("");
  const [packageType, setPackageType] = useState<PackageType>("joki_bintang");

  const [fromRank, setFromRank] = useState<RankType>("Epic");
  const [fromSubTier, setFromSubTier] = useState(5); 
  const [fromStars, setFromStars] = useState(0);

  const [toRank, setToRank] = useState<RankType>("Legend");
  const [toSubTier, setToSubTier] = useState(5);
  const [toStars, setToStars] = useState(0);

  /* ================= CONFIG LIMIT & BASE ================= */
  // Menentukan batas minimal dan maksimal bintang yang boleh diinput di tiap Rank
  const getStarRange = (rank: RankType) => {
    if (isTieredRank(rank)) return { min: 0, max: 5 };
    if (rank === "Mythic") return { min: 0, max: 24 };
    if (rank === "Mythic Honor") return { min: 25, max: 49 };
    if (rank === "Mythic Glory") return { min: 50, max: 99 };
    return { min: 100, max: 9999 }; // Immortal
  };

  const handleStarChange = (val: number, rank: RankType, setter: (v: number) => void) => {
    const { min, max } = getStarRange(rank);
    if (val < min) setter(min);
    else if (val > max) setter(max);
    else setter(val);
  };

  /* ================= LOGIC PERHITUNGAN ================= */
  const getCumulativeStars = (rank: RankType, sub: number, stars: number) => {
    let total = 0;
    
    // Jika EPIC atau Legend, hitung berdasarkan Tier (V-I)
    if (isTieredRank(rank)) {
      if (rank === "Legend") total += 25; // Sudah melewati EPIC
      const subCompleted = 5 - sub;
      total += (subCompleted * 5) + stars;
    } else {
      // Jika Mythic ke atas, bintang di profil ML adalah "Bintang Global"
      // Kita langsung pakai angka bintang tersebut (0, 25, 50, 100 dst)
      // Ditambah 50 (karena sudah melewati EPIC 25 + Legend 25)
      total = 50 + stars;
    }
    return total;
  };

  const totalPrice = useMemo(() => {
    const start = getCumulativeStars(fromRank, fromSubTier, fromStars);
    const target = getCumulativeStars(toRank, toSubTier, toStars);
    
    if (target <= start) return 0;

    const selisih = target - start;
    // Ambil harga dari tier tujuan
    const cost = selisih * (STAR_PRICE[packageType][toRank] || 0);
    
    return cost;
  }, [fromRank, fromSubTier, fromStars, toRank, toSubTier, toStars, packageType]);

  const waLink = useMemo(() => {
    const text = `Halo Admin, saya mau pesan jasa joki ML.
    
Nama: ${name || "-"}
Jenis Joki: ${packageType === "joki_bintang" ? "Joki Bintang" : "Joki Gendong"}
Rank Awal: ${fromRank.toUpperCase()} ${isTieredRank(fromRank) ? `Tier ${fromSubTier}` : ""} (${fromStars} ⭐)
Rank Tujuan: ${toRank.toUpperCase()} ${isTieredRank(toRank) ? `Tier ${toSubTier}` : ""} (${toStars} ⭐)
Estimasi Harga: Rp ${totalPrice.toLocaleString()}`;
    
    return `https://wa.me/6285782643433?text=${encodeURIComponent(text)}`;
  }, [name, packageType, fromRank, fromSubTier, fromStars, toRank, toSubTier, toStars, totalPrice]);

  return (
    <section className="px-4 py-20 bg-base-200 min-h-screen">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center">MLBB Rank Calculator</h2>

        {/* PROMO IMAGE */}
        <div className="mt-8 rounded-xl overflow-hidden border border-base-300 shadow-lg bg-white">
          <Image
            src={packageType === "joki_bintang" ? "/joki-bintang-awal-seasion-39.jpeg" : "/joki-gendong-awal-season.jpeg"}
            alt="Promo" width={1200} height={675} className="w-full object-cover" priority
          />
        </div>

        {/* PACKAGE SELECTOR */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {(["joki_bintang", "joki_gendong"] as PackageType[]).map((type) => (
            <button key={type} className={`btn ${packageType === type ? "btn-warning" : "btn-outline"}`} onClick={() => setPackageType(type)}>
              {type.replace("_", " ").toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-5 bg-base-100 p-6 rounded-2xl shadow-sm">
          <input className="input input-bordered w-full" placeholder="Nama kamu" value={name} onChange={(e) => setName(e.target.value)} />

          {/* RANK AWAL */}
          <div className="space-y-2">
            <label className="text-sm font-semibold opacity-70">Rank Saat Ini</label>
            <SelectRank label="" value={fromRank} options={RANK_ORDER} onChange={(v) => {
                const r = v as RankType; 
                setFromRank(r);
                const { min } = getStarRange(r);
                setFromStars(min); // Otomatis set ke angka minimal rank tersebut
            }} />
            <div className="grid grid-cols-2 gap-2">
              {isTieredRank(fromRank) && (
                <select className="select select-bordered" value={fromSubTier} onChange={(e) => setFromSubTier(Number(e.target.value))}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>Tier {n === 5 ? 'V' : n === 4 ? 'IV' : n === 3 ? 'III' : n === 2 ? 'II' : 'I'}</option>)}
                </select>
              )}
              <input type="number" className="input input-bordered w-full" 
                placeholder={`Bintang (${getStarRange(fromRank).min}-${getStarRange(fromRank).max})`} 
                value={fromStars} 
                onChange={(e) => handleStarChange(Number(e.target.value), fromRank, setFromStars)} 
              />
            </div>
          </div>

          {/* RANK TUJUAN */}
          <div className="space-y-2">
            <label className="text-sm font-semibold opacity-70">Target Rank</label>
            <SelectRank label="" value={toRank} options={RANK_ORDER} onChange={(v) => {
                const r = v as RankType; 
                setToRank(r);
                const { min } = getStarRange(r);
                setToStars(min); // Otomatis set ke angka minimal target
            }} />
            <div className="grid grid-cols-2 gap-2">
              {isTieredRank(toRank) && (
                <select className="select select-bordered" value={toSubTier} onChange={(e) => setToSubTier(Number(e.target.value))}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>Tier {n === 5 ? 'V' : n === 4 ? 'IV' : n === 3 ? 'III' : n === 2 ? 'II' : 'I'}</option>)}
                </select>
              )}
              <input type="number" className="input input-bordered w-full" 
                placeholder={`Bintang (${getStarRange(toRank).min}-${getStarRange(toRank).max})`} 
                value={toStars} 
                onChange={(e) => handleStarChange(Number(e.target.value), toRank, setToStars)} 
              />
            </div>
          </div>

          <div className="p-4 border border-warning rounded-xl text-center bg-warning/5">
            <p className="text-xs uppercase text-warning font-bold">Total Estimasi</p>
            <p className="text-3xl font-bold text-warning font-mono">Rp {totalPrice.toLocaleString()}</p>
          </div>

          <a href={waLink} target="_blank" className={`btn btn-success btn-lg w-full ${totalPrice === 0 ? "btn-disabled" : ""}`}>
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}