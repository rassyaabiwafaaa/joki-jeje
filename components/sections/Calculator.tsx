"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import SelectRank from "../ui/SelectRank";
import { STAR_PRICE } from "../../lib/starPrice";

type PackageType = keyof typeof STAR_PRICE;
type RankType = keyof typeof STAR_PRICE.joki_bintang;

const RANK_ORDER: RankType[] = [
  "epic",
  "legend",
  "mythic",
  "mythic_honor",
  "mythic_glory",
  "mythic_immortal",
];

const isTieredRank = (rank: RankType) => rank === "epic" || rank === "legend";

export default function Calculator() {
  const [name, setName] = useState("");
  const [packageType, setPackageType] = useState<PackageType>("joki_bintang");

  const [fromRank, setFromRank] = useState<RankType>("epic");
  const [fromSubTier, setFromSubTier] = useState(5); 
  const [fromStars, setFromStars] = useState(0);

  const [toRank, setToRank] = useState<RankType>("legend");
  const [toSubTier, setToSubTier] = useState(5);
  const [toStars, setToStars] = useState(0);

  /* ================= HELPERS ================= */
  const getMaxStars = (rank: RankType) => {
    if (isTieredRank(rank)) return 5;
    if (rank === "mythic") return 24;
    if (rank === "mythic_honor") return 24;
    if (rank === "mythic_glory") return 49;
    return 9999; // Limit untuk sang maniak bintang
  };

  const handleStarChange = (val: number, rank: RankType, setter: (v: number) => void) => {
    const max = getMaxStars(rank);
    if (val < 0) setter(0);
    else if (val > max) setter(max);
    else setter(val);
  };

  const getCumulativeStars = (rank: RankType, sub: number, stars: number) => {
    let total = 0;
    if (rank === "legend") total += 25;
    if (rank === "mythic") total += 50;
    if (rank === "mythic_honor") total += 75;
    if (rank === "mythic_glory") total += 100;
    if (rank === "mythic_immortal") total += 150;

    if (isTieredRank(rank)) {
      const subCompleted = 5 - sub;
      total += (subCompleted * 5) + stars;
    } else {
      total += stars;
    }
    return total;
  };

  /* ================= LOGIC ================= */
  const totalPrice = useMemo(() => {
    const start = getCumulativeStars(fromRank, fromSubTier, fromStars);
    const target = getCumulativeStars(toRank, toSubTier, toStars);
    if (target <= start) return 0;

    let cost = 0;
    const selisih = target - start;
    
    // Untuk performa lebih cepat pada bintang ribuan, kita tidak pakai loop
    // Langsung kalikan selisih dengan harga tier tujuan
    cost = selisih * (STAR_PRICE[packageType][toRank] || 0);
    
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

        <div className="mt-8 rounded-xl overflow-hidden border border-base-300 shadow-lg bg-white">
          <Image
            src={packageType === "joki_bintang" ? "/joki-bintang-awal-seasion-39.jpeg" : "/joki-gendong-awal-season.jpeg"}
            alt="Promo" width={1200} height={675} className="w-full object-cover" priority
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {(["joki_bintang", "joki_gendong"] as PackageType[]).map((type) => (
            <button key={type} className={`btn ${packageType === type ? "btn-warning" : "btn-outline"}`} onClick={() => setPackageType(type)}>
              {type.replace("_", " ").toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-5 bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300">
          <input className="input input-bordered w-full" placeholder="Nama kamu" value={name} onChange={(e) => setName(e.target.value)} />

          <div className="space-y-2">
            <label className="text-sm font-semibold opacity-70 italic">Rank Saat Ini</label>
            <SelectRank label="" value={fromRank} options={RANK_ORDER} onChange={(v) => {
                const r = v as RankType; setFromRank(r);
                handleStarChange(fromStars, r, setFromStars);
            }} />
            <div className="grid grid-cols-2 gap-2">
              {isTieredRank(fromRank) && (
                <select className="select select-bordered w-full" value={fromSubTier} onChange={(e) => setFromSubTier(Number(e.target.value))}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>Tier {n === 5 ? 'V' : n === 4 ? 'IV' : n === 3 ? 'III' : n === 2 ? 'II' : 'I'}</option>)}
                </select>
              )}
              <input type="number" className="input input-bordered w-full" placeholder={`Bintang (Maks ${getMaxStars(fromRank)})`} value={fromStars} 
                onChange={(e) => handleStarChange(Number(e.target.value), fromRank, setFromStars)} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold opacity-70 italic">Rank Tujuan</label>
            <SelectRank label="" value={toRank} options={RANK_ORDER} onChange={(v) => {
                const r = v as RankType; setToRank(r);
                handleStarChange(toStars, r, setToStars);
            }} />
            <div className="grid grid-cols-2 gap-2">
              {isTieredRank(toRank) && (
                <select className="select select-bordered w-full" value={toSubTier} onChange={(e) => setToSubTier(Number(e.target.value))}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>Tier {n === 5 ? 'V' : n === 4 ? 'IV' : n === 3 ? 'III' : n === 2 ? 'II' : 'I'}</option>)}
                </select>
              )}
              <input type="number" className="input input-bordered w-full" placeholder={`Target ⭐ (Maks ${getMaxStars(toRank)})`} value={toStars} 
                onChange={(e) => handleStarChange(Number(e.target.value), toRank, setToStars)} />
            </div>
          </div>

          <div className="p-4 border-2 border-dashed border-warning rounded-xl text-center bg-warning/10">
            <p className="text-xs uppercase text-warning font-bold tracking-widest">Total Bayar</p>
            <p className="text-4xl font-black text-warning">Rp {totalPrice.toLocaleString()}</p>
          </div>

          <a href={waLink} target="_blank" className={`btn btn-success btn-lg w-full shadow-lg ${totalPrice === 0 ? "btn-disabled" : ""}`}>
            Pesan ke Admin Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}