"use client";
import React from "react";

export default function CTASection() {
  return (
    <>
      {/* === COMPANY INFO SECTION (FULL WIDTH) === */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#0A1D6B] text-white py-16">
        <div className="container-layout max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Kolom kiri */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Talenta Digital Solution"
                className="w-10 h-10 object-contain"
              />
              <h3 className="font-semibold text-lg">
                Talenta Digital Solution
              </h3>
            </div>
            <p className="text-gray-200 text-sm mb-6 leading-relaxed">
              Technology that's extraordinary begins with the right talent. At
              PT Talenta Digital Solution, we deliver digital solutions that
              transform every challenge into business opportunities.
            </p>

            <ul className="space-y-2 text-sm text-gray-100">
              <li className="flex items-center gap-2">
                📧 contact@talentadigis.com
              </li>
              <li className="flex items-center gap-2">📞 0812-3456-7890</li>
              <li className="flex items-center gap-2">
                📍 Jl. Orchard Boulevard, Belian, Kec. Batam Kota, Batam,
                Kepulauan Riau 29464
              </li>
            </ul>
          </div>

          {/* Kolom tengah */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Insights</li>
            </ul>
          </div>

          {/* Kolom kanan */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Design & Development</li>
              <li>Mobile App Design</li>
              <li>Brand Identity Design</li>
              <li>UX Research & Consulting</li>
              <li>SEO & Digital Marketing</li>
              <li>Frontend Development</li>
              <li>Game Development</li>
              <li>AI & Data</li>
              <li>Cloud Infra</li>
              <li>ERP Tools</li>
            </ul>
          </div>
        </div>

        {/* Floating WA */}
        <button
          onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          className="fixed bottom-6 right-6 bg-white text-[#1E40AF] p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12.04 2C6.56 2 2.11 6.23 2.11 11.46c0 1.82.52 3.55 1.5 5.07l-1.01 3.69 3.78-.99c1.48.81 3.15 1.24 4.87 1.24 5.47 0 9.92-4.23 9.92-9.46S17.51 2 12.04 2zm5.54 13.73c-.23.65-1.36 1.24-1.87 1.32-.48.08-1.08.12-1.74-.11-.4-.13-.91-.3-1.57-.59-2.76-1.19-4.54-3.96-4.68-4.14-.13-.18-1.12-1.48-1.12-2.82s.71-1.99.96-2.27c.25-.29.55-.36.73-.36h.52c.17 0 .4-.06.62.47.23.56.79 1.93.86 2.07.07.15.12.33-.02.52-.09.18-.13.29-.26.45-.13.16-.27.35-.39.47-.13.12-.26.25-.11.49.15.24.67 1.09 1.43 1.77 0 0 1.15 1.06 2.39 1.48.24.08.43.07.59-.04.16-.11.69-.79.87-1.06.18-.27.37-.22.62-.13.25.09 1.58.74 1.86.87.28.13.46.2.53.32.07.12.07.69-.16 1.34z" />
          </svg>
        </button>
      </div>
    </>
  );
}
