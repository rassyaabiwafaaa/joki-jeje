export default function CTA() {
  const phoneNumber = "6281234567890"; // ganti nanti
  const message = encodeURIComponent(
    "Halo admin, saya mau joki Mobile Legends. Bisa info lebih lanjut?"
  );

  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="px-4 py-30 bg-base-200">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          Mau dapat info promo terupdate?
        </h2>

        <p className="mt-4 text-base-content/70">
          Join saluran WhatsApp kami dan dapatkan info promo menarik serta update terbaru seputar layanan joki Mobile Legends.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-lg mt-8 w-full sm:w-auto"
        >
          Gabung Sekarang
        </a>
      </div>
    </section>
  );
}
