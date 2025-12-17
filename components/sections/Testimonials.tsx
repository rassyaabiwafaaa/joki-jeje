import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="px-4 py-24 bg-base-200">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold">
            Dipercaya Banyak Player
          </h2>

          <p className="mt-4 text-base-content/70">
            Bukan cuma janji, ini pengalaman langsung  
            dari customer yang sudah push rank bareng kami.
          </p>

          <div className="mt-5 flex justify-center items-center gap-2 text-yellow-400 text-xl">
            ★★★★★
            <span className="text-sm text-base-content/60">
              (Rating Pelanggan)
            </span>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <TestimonialCard
            name="Rizky"
            rank="Epic → Legend"
            message="Awalnya ragu, tapi ternyata cepet banget. Akun aman, rank naik sesuai target."
          />

          <TestimonialCard
            name="Andi"
            rank="Legend → Mythic"
            message="Admin fast respon, progress dikabarin terus. Ga ada drama sama sekali."
          />

          <TestimonialCard
            name="Dimas"
            rank="Placement Mythic"
            message="Ini order kedua saya. Konsisten rapi dan ga bikin akun kena masalah."
          />

        </div>

        {/* TRUST FOOTNOTE */}
        <div className="mt-16 text-center text-sm text-base-content/60">
          * Semua testimoni berasal dari customer real  
          dan hasil bisa berbeda tergantung kondisi akun.
        </div>

      </div>
    </section>
  );
}