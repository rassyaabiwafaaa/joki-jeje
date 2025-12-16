import PackageCard from "../ui/PackageCard";
import { packages } from "../../lib/packages";

export default function Packages() {
  return (
    <section className="px-4 py-30 bg-base-200" id="Packages">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Paket Joki Favorit
          </h2>
          <p className="mt-3 text-base-content/70">
            Pilih paket cepat tanpa ribet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.title}
              {...pkg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
