"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const FeaturedInsight: React.FC = () => {
  const insights = [
    {
      img: "/images/people.png",
      title: "AI Generatif: Dari Sekadar Alat Kreatif hingga Mesin Inovasi",
      desc: "Kecerdasan buatan generatif kini tidak hanya menghasilkan teks atau gambar, tetapi juga membantu riset ilmiah, desain produk, bahkan musik. Artikel ini mengulas dampaknya pada industri kreatif dan etika penggunaannya.",
      link: "#",
    },
    {
      img: "/images/insight2.png",
      title: "Transformasi Digital Menuju Efisiensi Operasional",
      desc: "Pelajari bagaimana transformasi digital dapat meningkatkan efisiensi bisnis melalui adopsi teknologi cerdas dan kolaborasi lintas tim.",
      link: "#",
    },
    {
      img: "/images/insight3.png",
      title: "Solusi Cloud untuk Akselerasi Bisnis Modern",
      desc: "Ketahui bagaimana solusi cloud membantu perusahaan berinovasi lebih cepat, menekan biaya operasional, dan meningkatkan skalabilitas sistem.",
      link: "#",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % insights.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? insights.length - 1 : prev - 1));

  const currentInsight = insights[current];

  return (
    <section className="relative w-screen h-[75vh] md:h-[80vh] overflow-hidden left-1/2 -translate-x-1/2">
      {/* Background image (full width) */}
      <div className="absolute inset-0">
        <Image
          src={currentInsight.img}
          alt={currentInsight.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content (centered text) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-10 text-white mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4">
          {currentInsight.title}
        </h1>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mb-8">
          {currentInsight.desc}
        </p>

        <a
          href={currentInsight.link}
          className="flex items-center gap-2 bg-[#0044CC] hover:bg-[#0033A0] text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Read Article
          <BookOpen className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0044CC] hover:bg-[#E8F0FF] rounded-full p-3 shadow-lg transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0044CC] hover:bg-[#E8F0FF] rounded-full p-3 shadow-lg transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {insights.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-[#0044CC]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedInsight;
