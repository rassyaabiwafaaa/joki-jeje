type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function SelectRank({ label, value, onChange }: Props) {
  const ranks = [
    "Warrior",
    "Elite",
    "Master",
    "Grandmaster",
    "Epic",
    "Legend",
    "Mythic",
  ];

  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <select
        className="select select-bordered w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Pilih Rank</option>
        {ranks.map((rank) => (
          <option key={rank} value={rank}>
            {rank}
          </option>
        ))}
      </select>
    </div>
  );
}
