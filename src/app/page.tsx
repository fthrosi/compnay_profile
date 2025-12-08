import Image from "next/image";
import { Globe } from "lucide-react";
import InsightsAndTestimonials from "@/components/Section/InsightsAndTestimonials";
import CTAHero from "@/components/Section/CTAHero";
import FeaturedInsight from "@/components/Section/FeaturedInsight";
import HeroShapes from "@/components/Section/HeroShapes";

export default function HomePage() {
  return (
    <main className="mt-20 pt-16 pb-0 bg-gradient-to-b from-white to-gray-50 w-full">
      {/* Hero Section */}
      <section className="container-layout flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-visible pb-28">
        {/* GRADIENT GOLD KIRI */}
        <div className="absolute -top-10 -left-14 w-[420px] h-[420px] bg-[#F8D575] rounded-full blur-[120px] opacity-[0.27] z-[0]" />

        {/* GRADIENT BLUE KANAN */}
        <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] bg-[#234DF5] rounded-full blur-[110px] opacity-20 z-[0]" />

        {/* Text Content */}
        <div className="flex-1 relative z-[2]">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Empower Your Business with{" "}
            <span className="text-[#1E40AF]">Digital Innovation</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            We deliver cutting-edge software solutions that drive growth,
            enhance efficiency, and transform how enterprises operate in the
            digital age.
          </p>

          <button className="mt-8 px-7 py-3 bg-[#1E40AF] text-white rounded-xl font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
            Explore Solutions →
          </button>
        </div>

        {/* RIGHT IMAGES (Figma Optimized) */}
        <div className="flex-1 flex justify-center md:justify-end relative z-[2]">
          <div className="relative w-[520px] h-[560px]">
            {/* 🔵🟡 SHAPES BACKGROUND */}
            <div className="absolute inset-0 z-[1]">
              <HeroShapes />
            </div>

            {/* Icon Globe */}
            <div className="absolute top-[12px] right-[220px] bg-[#78B8F4] rounded-full p-3 shadow-lg z-[6]">
              <Globe className="w-7 h-7 text-white" />
            </div>

            {/* BLUE BOX - MAN */}
            <div
              className="absolute top-[70px] left-0 shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden z-[4]"
              style={{
                width: "240px",
                height: "320px",
                backgroundColor: "#8FBFDB",
                borderRadius: "36px",
              }}
            >
              <Image
                src="/images/man.png"
                alt="man"
                fill
                className="object-contain translate-y-[6px]"
              />
            </div>

            {/* YELLOW BOX - WOMAN */}
            <div
              className="absolute top-0 right-0 shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden z-[4]"
              style={{
                width: "260px",
                height: "320px",
                backgroundColor: "#FDDC85",
                borderRadius: "36px",
              }}
            >
              <Image
                src="/images/woman.png"
                alt="woman"
                fill
                className="object-contain translate-y-[6px]"
              />
            </div>

            {/* TEAM BOX */}
            <div
              className="absolute bottom-0 left-[80px] shadow-[0_25px_50px_rgba(0,0,0,0.12)] overflow-hidden z-[4]"
              style={{
                width: "420px",
                height: "230px",
                backgroundColor: "#1E40AF",
                borderRadius: "32px",
              }}
            >
              <Image
                src="/images/team.png"
                alt="team"
                fill
                className="object-contain translate-y-[10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rating & Stats Section */}
      <section className="container-layout w-full flex justify-center -mt-20">
        <div className="w-full max-w-[1222px] rounded-[20px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-[20px] font-semibold text-gray-900">
              200+ Enterprise Clients
            </h3>
            <p className="text-[16px] text-gray-400 mt-[4px]">
              Trusted Worldwide
            </p>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-200" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center md:text-left">
            <div>
              <h4 className="text-[22px] font-bold text-[#1E40AF]">500+</h4>
              <p className="text-[15px] text-gray-500">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-[22px] font-bold text-[#1E40AF]">98%</h4>
              <p className="text-[15px] text-gray-500">Client Satisfaction</p>
            </div>
            <div>
              <h4 className="text-[22px] font-bold text-[#1E40AF]">24/7</h4>
              <p className="text-[15px] text-gray-500">Support Available</p>
            </div>
            <div>
              <h4 className="text-[22px] font-bold text-[#1E40AF]">15+</h4>
              <p className="text-[15px] text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="container-layout mt-20 text-center">
        <h2 className="text-gray-800 font-semibold mb-8">
          Our Partners in Collaboration
        </h2>

        <div className="flex justify-center items-center gap-12 flex-wrap">
          <img
            src="/images/pelican logo.png"
            alt="Pelican"
            className="w-28 h-auto object-contain"
          />
          <img
            src="/images/UIB logo.png"
            alt="UIB"
            className="w-24 h-auto object-contain"
          />
          <img
            src="/images/sambirejo.png"
            alt="sambirejo"
            className="w-24 h-auto object-contain"
          />
          <img
            src="/images/unggul pratama.png"
            alt="unggul pratama"
            className="w-24 h-auto object-contain"
          />
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="container-layout mt-24">
        <h2 className="text-center text-[#1E40AF] font-semibold text-5xl md:text-6xl mb-6">
          Featured Insights
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
          Explore our latest thoughts, trends, and practical guides from the
          world of technology and digital innovation.
        </p>

        <FeaturedInsight />
      </section>

      {/* Insights & Testimonials */}
      <div className="container-layout mt-20">
        <InsightsAndTestimonials />
      </div>

      {/* CTAHero */}
      <div className="container-layout mt-20">
        <CTAHero />
      </div>
    </main>
  );
}
