import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 py-60 bg-base-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Push Rank Mobile Legends  
            <span className="block text-primary">
              Cepat, Aman, & Terpercaya
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-base-content/70">
            Capek stuck di rank itu-itu aja?  
            Serahin ke kami, rank naik tanpa ribet.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary btn-lg">
              Order via WhatsApp
            </button>

            <Link href={`#Packages`} className="btn btn-outline btn-lg">
              Lihat Paket
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT (OPTIONAL) */}
        <div className="hidden lg:flex justify-center">
          <div className="w-72 h-72 rounded-2xl bg-base-200 flex items-center justify-center text-base-content/50">
            Ilustrasi / Image
          </div>
        </div>

      </div>
    </section>
  );
}
