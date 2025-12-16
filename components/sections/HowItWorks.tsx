import StepCard from "../ui/StepCard";

export default function HowItWorks() {
  return (
    <section className="px-4 py-30 bg-base-100 ">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Cara Order Joki
          </h2>
          <p className="mt-3 text-base-content/70">
            Proses cepat, aman, dan tanpa ribet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StepCard
            step={1}
            title="Pilih Rank"
            desc="Tentukan rank awal dan target rank kamu"
          />

          <StepCard
            step={2}
            title="Hitung Harga"
            desc="Harga otomatis sesuai tier dan bintang"
          />

          <StepCard
            step={3}
            title="Chat WhatsApp"
            desc="Klik tombol dan admin akan bantu proses"
          />
        </div>
      </div>
    </section>
  );
}
