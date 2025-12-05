"use client";

import React from "react";

const CTAHero: React.FC = () => {
  const handleClick = (): void => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <section
      className="
        container-layout 
        bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] 
        text-white py-20 rounded-[2rem] 
        max-w-7xl w-full mx-auto mb-16
        text-center relative overflow-hidden
      "
    >
      {/* Judul */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Ready to Transform Your Business?
      </h2>

      {/* Deskripsi */}
      <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
        Let&apos;s discuss how our enterprise software solutions can drive your
        digital transformation and deliver measurable business value.
      </p>

      {/* Tombol CTA */}
      <button
        onClick={handleClick}
        aria-label="Schedule the Consultation"
        className="
          inline-flex items-center gap-2
          bg-white text-[#1E40AF] font-semibold 
          px-6 py-3 rounded-xl shadow-md
          hover:shadow-lg hover:scale-105
          transition-all duration-300
        "
      >
        Schedule the Consultation
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.56 2 2.11 6.23 2.11 11.46c0 1.82.52 3.55 1.5 5.07l-1.01 3.69 3.78-.99c1.48.81 3.15 1.24 4.87 1.24 5.47 0 9.92-4.23 9.92-9.46S17.51 2 12.04 2zm5.54 13.73c-.23.65-1.36 1.24-1.87 1.32-.48.08-1.08.12-1.74-.11-.4-.13-.91-.3-1.57-.59-2.76-1.19-4.54-3.96-4.68-4.14-.13-.18-1.12-1.48-1.12-2.82s.71-1.99.96-2.27c.25-.29.55-.36.73-.36h.52c.17 0 .4-.06.62.47.23.56.79 1.93.86 2.07.07.15.12.33-.02.52-.09.18-.13.29-.26.45-.13.16-.27.35-.39.47-.13.12-.26.25-.11.49.15.24.67 1.09 1.43 1.77 0 0 1.15 1.06 2.39 1.48.24.08.43.07.59-.04.16-.11.69-.79.87-1.06.18-.27.37-.22.62-.13.25.09 1.58.74 1.86.87.28.13.46.2.53.32.07.12.07.69-.16 1.34z" />
        </svg>
      </button>

      {/* Efek cahaya lembut */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTAHero;
