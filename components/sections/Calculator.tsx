"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import SelectRank from "../ui/SelectRank";
import { STAR_PRICE } from "../../lib/starPrice";
import { whatsappNumber } from "@/lib/constant";

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
  const [fromStars, setFromStars] = useState<number | "">(0);

  const [toRank, setToRank] = useState<RankType>("Legend");
  const [toSubTier, setToSubTier] = useState(5);
  const [toStars, setToStars] = useState<number | "">(0);

  const getStarRange = (rank: RankType) => {
    if (isTieredRank(rank)) return { min: 0, max: 5 };
    if (rank === "Mythic") return { min: 0, max: 24 };
    if (rank === "Mythic Honor") return { min: 25, max: 49 };
    if (rank === "Mythic Glory") return { min: 50, max: 99 };
    return { min: 100, max: 999 };
  };

  const handleInputChange = (val: string, rank: RankType, setter: (v: number | "") => void) => {
    const numericValue = val.replace(/\D/g, "");
    if (numericValue === "") {
      setter(""); 
      return;
    }
    const parsed = parseInt(numericValue);
    const { max } = getStarRange(rank);
    if (parsed > max) {
      setter(max);
    } else {
      setter(parsed);
    }
  };

  const handleBlurValidation = (val: number | "", rank: RankType, setter: (v: number) => void) => {
    const { min, max } = getStarRange(rank);
    const currentVal = val === "" ? 0 : val;
    const validated = Math.max(min, Math.min(max, currentVal));
    setter(validated);
  };

  /* ================= LOGIC PERHITUNGAN ================= */
  const getCumulativeStars = (rank: RankType, sub: number, stars: number | "") => {
    let total = 0;
    const s = stars === "" ? 0 : stars;
    if (rank === "Legend") total = 25;
    else if (!isTieredRank(rank)) total = 50;
    if (isTieredRank(rank)) {
      total += (5 - sub) * 5 + s;
    } else {
      total += s;
    }
    return total;
  };

  const totalPrice = useMemo(() => {
    const start = getCumulativeStars(fromRank, fromSubTier, fromStars);
    const target = getCumulativeStars(toRank, toSubTier, toStars);
    if (target <= start) return 0;
    let totalCost = 0;
    for (let i = start; i < target; i++) {
      let currentStepRank: RankType = "Epic";
      if (i < 25) currentStepRank = "Epic";
      else if (i < 50) currentStepRank = "Legend";
      else if (i < 75) currentStepRank = "Mythic";
      else if (i < 100) currentStepRank = "Mythic Honor";
      else if (i < 150) currentStepRank = "Mythic Glory";
      else currentStepRank = "Mythic Immortal";
      totalCost += STAR_PRICE[packageType][currentStepRank] || 0;
    }
    return totalCost;
  }, [fromRank, fromSubTier, fromStars, toRank, toSubTier, toStars, packageType]);

  const waLink = useMemo(() => {
    const text = `Halo Admin, saya mau pesan jasa joki ML.
    
Nama: ${name || "-"}
Jenis Joki: ${packageType === "joki_bintang" ? "Joki Bintang" : "Joki Gendong"}
Rank Awal: ${fromRank.toUpperCase()} ${isTieredRank(fromRank) ? `Tier ${fromSubTier}` : ""} (${fromStars || 0} ⭐)
Rank Tujuan: ${toRank.toUpperCase()} ${isTieredRank(toRank) ? `Tier ${toSubTier}` : ""} (${toStars || 0} ⭐)
Estimasi Harga: Rp ${totalPrice.toLocaleString()}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [name, packageType, fromRank, fromSubTier, fromStars, toRank, toSubTier, toStars, totalPrice]);

  return (
    <section className="px-4 py-20 bg-base-200 min-h-screen" id="kalkulator-rank">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center">MLBB Rank Calculator</h2>

        <div className="mt-8 rounded-xl overflow-hidden border border-base-300 shadow-lg bg-white">
          <Image
            src={packageType === "joki_bintang" ? "/2.jpeg" : "/3.jpeg"}
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

          {/* RANK SAAT INI */}
          <div className="space-y-2">
            <label className="text-sm font-semibold opacity-70">Rank Saat Ini</label>
            <SelectRank label="" value={fromRank} options={RANK_ORDER} onChange={(v) => {
                const r = v as RankType; 
                setFromRank(r);
                setFromStars(getStarRange(r).min);
            }} />
            <div className="grid grid-cols-2 gap-2">
              {isTieredRank(fromRank) && (
                <select className="select select-bordered w-full" value={fromSubTier} onChange={(e) => setFromSubTier(Number(e.target.value))}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>Tier {n === 5 ? 'V' : n === 4 ? 'IV' : n === 3 ? 'III' : n === 2 ? 'II' : 'I'}</option>)}
                </select>
              )}
              <div className="flex flex-col gap-1">
                <input 
                  type="text" 
                  inputMode="numeric"
                  className="input input-bordered w-full" 
                  placeholder="Bintang"
                  value={fromStars} 
                  onFocus={() => setFromStars("")} 
                  onChange={(e) => handleInputChange(e.target.value, fromRank, setFromStars)}
                  onBlur={() => handleBlurValidation(fromStars, fromRank, setFromStars)}
                />
                <p className="text-[10px] text-error font-medium ml-1">
                  Range: {getStarRange(fromRank).min} - {getStarRange(fromRank).max} ⭐
                </p>
              </div>
            </div>
          </div>

          {/* TARGET RANK */}
          <div className="space-y-2">
            <label className="text-sm font-semibold opacity-70">Target Rank</label>
            <SelectRank label="" value={toRank} options={RANK_ORDER} onChange={(v) => {
                const r = v as RankType; 
                setToRank(r);
                setToStars(getStarRange(r).min);
            }} />
            <div className="grid grid-cols-2 gap-2">
              {isTieredRank(toRank) && (
                <select className="select select-bordered w-full" value={toSubTier} onChange={(e) => setToSubTier(Number(e.target.value))}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>Tier {n === 5 ? 'V' : n === 4 ? 'IV' : n === 3 ? 'III' : n === 2 ? 'II' : 'I'}</option>)}
                </select>
              )}
              <div className="flex flex-col gap-1">
                <input 
                  type="text" 
                  inputMode="numeric"
                  className="input input-bordered w-full" 
                  placeholder="Target Bintang"
                  value={toStars} 
                  onFocus={() => setToStars("")} 
                  onChange={(e) => handleInputChange(e.target.value, toRank, setToStars)}
                  onBlur={() => handleBlurValidation(toStars, toRank, setToStars)}
                />
                <p className="text-[10px] text-error font-medium ml-1">
                  Range: {getStarRange(toRank).min} - {getStarRange(toRank).max} ⭐
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border-2 border-dashed border-warning rounded-xl text-center bg-warning/10">
            <p className="text-xs uppercase text-warning font-bold tracking-widest">Estimasi Harga</p>
            <p className="text-4xl font-bold text-warning font-mono">Rp {totalPrice.toLocaleString()}</p>
          </div>

          <a href={'http://linktr.ee/jejejoki.id'} target="_blank" className={`btn btn-success btn-lg w-full shadow-lg ${totalPrice === 0 ? "btn-disabled" : ""}`}>
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}