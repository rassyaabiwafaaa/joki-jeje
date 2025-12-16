// lib/rankPrice.ts
export const rankOrder = [
  "Warrior",
  "Elite",
  "Master",
  "Grandmaster",
  "Epic",
  "Legend",
  "Mythic",
];

export const pricePerStar: Record<string, number> = {
  Warrior: 2000,
  Elite: 3000,
  Master: 4000,
  Grandmaster: 5000,
  Epic: 7000,
  Legend: 9000,
  Mythic: 12000,
};

export const rankConfig = [
  { name: "Warrior", stars: 5, price: 2000 },
  { name: "Elite", stars: 5, price: 3000 },
  { name: "Master", stars: 5, price: 4000 },
  { name: "Grandmaster", stars: 5, price: 5000 },
  { name: "Epic", stars: 5, price: 7000 },
  { name: "Legend", stars: 5, price: 9000 },
];

export const mythicPackagePrice = 250000;