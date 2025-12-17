type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function SelectRank({
  label,
  value,
  onChange,
  options,
}: Props) {
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

        {options.map((rank) => (
          <option key={rank} value={rank}>
            {rank}
          </option>
        ))}
      </select>
    </div>
  );
}
