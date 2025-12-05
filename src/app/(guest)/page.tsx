import Image from "next/image";
import { Globe } from "lucide-react";
import InsightsAndTestimonials from "@/components/Section/InsightsAndTestimonials";
import CTASection from "@/components/Section/CTASection";
import CTAHero from "@/components/Section/CTAHero";
import FeaturedInsight from "@/components/Section/FeaturedInsight";

export default function HomePage() {
  return (
    <main className="mt-20 pt-16 pb-0 bg-linear-to-b from-white to-gray-50 w-full">
      {/* Hero Section */}
      <section className="container-layout flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-visible pb-28">
        {/* GRADIENT GOLD KIRI */}
        <div className="absolute -top-10 -left-14 w-[420px] h-[420px] bg-[#F8D575] rounded-full blur-[120px] opacity-[0.27]" />

        {/* GRADIENT BLUE KANAN */}
        <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] bg-[#234DF5] rounded-full blur-[110px] opacity-20" />

        {/* Text Content */}
        <div className="flex-1 relative z-2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Empower Your Business with{" "}
            <span className="text-primary">Digital Innovation</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            We deliver cutting-edge software solutions that drive growth,
            enhance efficiency, and transform how enterprises operate in the
            digital age.
          </p>
          <button className="mt-8 px-7 py-3 bg-prtext-primary text-white rounded-xl font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
            Explore Solutions →
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 flex justify-end relative z-2">
          <div className="absolute top-32 -left-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 z-3">
            <Globe className="w-7 h-7 text-primary" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-5 justify-end">
              <div
                className="
                  bg-[#E8F0FF] p-3
                  rounded-tl-[70px]
                  rounded-tr-[18.34px]
                  rounded-br-[18.34px]
                  rounded-bl-[18.34px]
                  shadow-[0_8px_35px_rgba(0,0,0,0.06)]
                  overflow-hidden
                "
              >
                <Image
                  src="/images/man.png"
                  alt="man"
                  width={210}
                  height={210}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#FFEBAB] p-3 rounded-[30px] shadow-[0_8px_35px_rgba(0,0,0,0.06)]">
                <Image
                  src="/images/woman.png"
                  alt="woman"
                  width={210}
                  height={210}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#234DF5] p-3 rounded-[30px] shadow-[0_8px_35px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/team.png"
                  alt="team"
                  width={350}
                  height={250}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating & Stats Section */}
      <section className="container-layout w-full flex justify-center -mt-20">
        <div className="w-full max-w-[1222px] rounded-[20px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h3 className="text-h5 font-semibold text-gray-900">
              200+ Enterprise Clients
            </h3>
            <p className="text-[16px] text-gray-400 mt-1">
              Trusted Worldwide
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-gray-200" />

          {/* Ratings */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center md:text-left">
            <div>
              <h4 className="text-[22px] font-bold text-primary">500+</h4>
              <p className="text-[15px] text-gray-500">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-[22px] font-bold text-primary">98%</h4>
              <p className="text-[15px] text-gray-500">Client Satisfaction</p>
            </div>
            <div>
              <h4 className="text-[22px] font-bold text-primary">24/7</h4>
              <p className="text-[15px] text-gray-500">Support Available</p>
            </div>
            <div>
              <h4 className="text-[22px] font-bold text-primary">15+</h4>
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

        <div className="flex justify-center items-center gap-12">
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
        </div>
      </section>

      {/* ✅ Featured Insight Section */}
      <div className="container-layout mt-20">
        <FeaturedInsight />
      </div>

      {/* ✅ Insights & Testimonials */}
      <div className="container-layout mt-20">
        <InsightsAndTestimonials />
      </div>

      {/* ✅ CTAHero di atas CTASection (jarak seimbang) */}
      <div className="container-layout mt-20">
        <CTAHero />
      </div>

      {/* <div className="container-layout mt-12 mb-0">
        <CTASection />
      </div> */}
    </main>
  );
}
