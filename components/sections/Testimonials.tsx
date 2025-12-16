import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Apa Kata Mereka?
          </h2>
          <p className="mt-3 text-base-content/70">
            Ribuan akun sudah kami bantu naik rank
          </p>

          <div className="mt-4 text-yellow-400 text-xl">
            ★★★★★
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Rizky"
            rank="Epic → Legend"
            message="Cepet, aman, rank naik tanpa ribet. Recommended!"
          />

          <TestimonialCard
            name="Andi"
            rank="Legend → Mythic"
            message="Admin responsif, joki rapi ga bikin curiga."
          />

          <TestimonialCard
            name="Dimas"
            rank="Placement Mythic"
            message="Order kedua, hasilnya konsisten dan aman."
          />
        </div>
      </div>
    </section>
  );
}
