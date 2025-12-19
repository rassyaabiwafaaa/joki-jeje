import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-base-content">404</h1>
        <p className="text-xl mt-4 text-base-content/70">
          Halaman yang kamu cari tidak ditemukan.
        </p>
        <Link href="/" className="btn btn-warning mt-6">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}