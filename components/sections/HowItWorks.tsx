import StepCard from "../ui/StepCard";

export default function HowItWorks() {
  return (
    <section className="px-4 py-24 bg-base-100">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold">
            Cara Order Joki
          </h2>
          <p className="mt-4 text-base sm:text-lg text-base-content/70">
            Cuma 3 langkah sederhana untuk push rank  
            tanpa ribet dan tetap aman.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative">
          {/* LINE (desktop only) */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-base-300 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StepCard
              step={1}
              title="Pilih Paket"
              desc="Tentukan paket joki sesuai target rank kamu"
            />

            <StepCard
              step={2}
              title="Hitung Harga"
              desc="Gunakan kalkulator untuk estimasi harga transparan"
            />

            <StepCard
              step={3}
              title="Chat WhatsApp"
              desc="Admin kami langsung bantu proses order kamu"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
