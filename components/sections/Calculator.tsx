"use client";

import { useState } from "react";
import SelectRank from "../ui/SelectRank";
import { rankOrder, pricePerStar, rankConfig } from "../../lib/rankPrice";

export default function Calculator() {
  const [fromRank, setFromRank] = useState("");
  const [toRank, setToRank] = useState("");
  const [stars, setStars] = useState(0);

  const calculatePrice = () => {
  const fromIndex = rankConfig.findIndex(r => r.name === fromRank);
  const toIndex = rankConfig.findIndex(r => r.name === toRank);

  if (fromIndex === -1 || toIndex === -1) return 0;
  if (fromIndex > toIndex) return 0;

  let total = 0;

  for (let i = fromIndex; i <= toIndex; i++) {
    const rank = rankConfig[i];

    if (i === fromIndex) {
      total += (rank.stars - stars) * rank.price;
    } else {
      total += rank.stars * rank.price;
    }
  }

  return total;
};

  const price = calculatePrice();

  const waMessage = encodeURIComponent(
    `Halo admin, saya mau joki ML.\nDari: ${fromRank}\nKe: ${toRank}\nEstimasi harga: Rp ${price.toLocaleString()}`
  );

  return (
    <section className="px-4 py-20 bg-base-200 border-b border-base-300" id="Calculator">
      <div className="max-w-xl mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Hitung Harga Joki
        </h2>
         <p className="mt-3 text-center text-base-content/70">
            Tentukan tujuan rank kamu dan lihat estimasi harganya.
          </p>

        <div className="mt-10 space-y-4">
          <SelectRank
            label="Rank Awal"
            value={fromRank}
            onChange={setFromRank}
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
              value={stars}
              onChange={(e) => setStars(Number(e.target.value))}
            />
          </div>

          <SelectRank
            label="Target Rank"
            value={toRank}
            onChange={setToRank}
          />
        </div>

       <div className="mt-8 p-6 bg-base-200 rounded-box text-center border border-primary">
  <p className="text-sm uppercase tracking-widest text-primary">
    Total Estimasi
  </p>
  <p className="text-3xl font-extrabold mt-2 text-primary">
    Rp {price.toLocaleString()}
  </p>
</div>

        <a
          href={`https://wa.me/6281234567890?text=${waMessage}`}
          target="_blank"
          className="btn btn-success btn-lg w-full mt-6 animate-pulse"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </section>
  );
}
  