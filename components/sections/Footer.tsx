import { whatsappNumber } from "@/lib/constant";

export default function Footer() {

  return (
    <footer className="bg-base-300 px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">

        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg">Joki ML Pro</h3>
          <p className="mt-2 text-base-content/70">
            Jasa joki Mobile Legends cepat, aman, dan terpercaya.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Kontak</h4>
          <p>WhatsApp: +{whatsappNumber}</p>
          <p className="mt-1">Jam Operasional:</p>
          <p>10.00 – 22.00 WIB</p>
        </div>

        {/* Disclaimer */}
        <div>
          <h4 className="font-semibold mb-2">Keamanan Akun</h4>
          <p className="text-base-content/70">
            Akun dijamin aman.
            Proses dilakukan manual oleh player berpengalaman.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-base-content/60">
        © {new Date().getFullYear()}. JEJEJOKI. All rights reserved.
      </div>
    </footer>
  );
}
