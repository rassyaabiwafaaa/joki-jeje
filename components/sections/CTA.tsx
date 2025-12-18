export default function CTA() {
 const channelLink = "https://whatsapp.com/channel/XXXXXXXX";
  // ⬆️ ganti dengan LINK SALURAN WHATSAPP (bukan chat pribadi)

  return (
    <section className="px-4 py-24 bg-base-200 border-t border-base-300" id="CTA">
      <div className="max-w-3xl mx-auto text-center">

        {/* HEADLINE */}
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Jangan Ketinggalan Promo & Slot Joki
        </h2>

        <p className="mt-4 text-base sm:text-lg text-base-content/70">
          Join <strong>Saluran WhatsApp resmi</strong> kami untuk dapatkan
          info promo terbaru, update slot joki, dan pengumuman penting lainnya.
        </p>

        {/* BENEFITS */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-sm text-base-content/70">
          <span>📢 Info Promo Terbaru</span>
          <span>⏱ Update Slot Joki</span>
          <span>🔥 Event & Bonus Khusus</span>
        </div>

        {/* CTA BUTTON */}
        <a
          href={channelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-lg mt-10 w-full sm:w-auto px-10"
        >
          Join Saluran WhatsApp
        </a>

        {/* NOTE */}
        <p className="mt-4 text-xs text-base-content/60">
          * Saluran satu arah, tidak mengganggu chat pribadi kamu
        </p>
      </div>
    </section>
  );
}
