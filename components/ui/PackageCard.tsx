type Props = {
  title: string;
  desc: string;
  price: number;
  badge?: string;
};

export default function PackageCard({
  title,
  desc,
  price,
  badge,
}: Props) {
  const waMessage = encodeURIComponent(
    `Halo admin, saya mau order paket joki:\n${title}\nHarga: Rp ${price.toLocaleString()}`
  );

  return (
    <div className="card bg-base-100 shadow relative">

      {badge && (
        <span className="badge badge-primary absolute top-4 right-4">
          {badge}
        </span>
      )}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="text-sm text-base-content/70">{desc}</p>

        <p className="text-2xl font-bold mt-4">
          Rp {price.toLocaleString()}
        </p>

        <div className="card-actions mt-6">
          <a
            href={`https://wa.me/6281234567890?text=${waMessage}`}
            target="_blank"
            className="btn btn-success w-full"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
