import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import CTASection from "@/components/Section/CTASection";

export default function ServicesPage() {
  const services = [
    {
      icon: "/Group.svg",
      title: "Web Design & Development",
      desc: "Modern and user-friendly responsive website design and development.",
      features: ["SEO Optimized", "Responsive Design", "CMS Integration"],
    },
    {
      icon: "/phone.svg",
      title: "Mobile App Design",
      desc: "Modern and user-friendly responsive mobile app design and development.",
      features: ["Intuitive UI", "Cross Platform", "Scalable"],
    },
    {
      icon: "/icon.svg",
      title: "Brand Identity Design",
      desc: "Creating strong and consistent visual identities that resonate with your brand.",
      features: ["Logo Design", "Brand Guide", "Stationary"],
    },
    {
      icon: "/people.svg",
      title: "UX Research & Consulting",
      desc: "Delivering user-centered design strategies that drive engagement and retention.",
      features: ["User Research", "Wireframing", "Testing"],
    },
    {
      icon: "/search.svg",
      title: "SEO & Digital Marketing",
      desc: "Boost your brand visibility and reach the right audience through data-driven marketing.",
      features: ["Keyword Strategy", "Analytics", "Ad Campaign"],
    },
    {
      icon: "/code.svg",
      title: "Frontend Development",
      desc: "Building fast, interactive, and scalable user interfaces with modern frameworks.",
      features: ["React/Next.js", "Animation", "Performance"],
    },
    {
      icon: "/game.svg",
      title: "Game Development",
      desc: "Designing and developing engaging, cross-platform games with captivating user experiences.",
      features: ["Unity/Unreal", "2D & 3D Design", "Cross Platform"],
    },
    {
      icon: "/data.svg",
      title: "AI & Data",
      desc: "Transforming business insights using AI-powered analytics and machine learning solutions.",
      features: ["Predictive Model", "Data Pipeline", "Automation"],
    },
    {
      icon: "/cloud.svg",
      title: "Cloud Infrastructure",
      desc: "Scalable and secure cloud-based solutions to ensure performance, reliability, and growth.",
      features: ["AWS / GCP", "CI/CD", "Monitoring"],
    },
    {
      icon: "/erp.svg",
      title: "ERP Tools Development",
      desc: "Custom-built ERP solutions that streamline business processes and improve efficiency.",
      features: ["Workflow Automation", "Data Centralization", "Integration"],
    },
  ];

  return (
    <main className="pt-20 bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 md:px-16 py-24 text-center bg-light-primary rounded-b-[5.625rem] flex justify-center items-center">
        {/* background gradasi */}
        <div className="hidden sm:block absolute top-0 right-0 lg:w-[38rem] lg:h-[22rem] md:w-[28rem] md:h-[16rem] w-[20rem] h-[12rem] rounded-full bg-gradient-to-r from-[#FCD880] via-[#87BBD7] to-[#1E40AF] blur-[80px] rotate-[25deg] translate-x-[8rem] -translate-y-[4rem] z-0"></div>

        <div className="relative flex flex-col justify-center items-center gap-7.5 z-10">
          <div className="px-5 py-2 rounded-[0.938rem] bg-[#1E40AF] text-white font-semibold text-sm md:text-base">
            Our Services
          </div>

          <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-neutral-black text-center leading-tight font-montserrat">
            <span className="text-[#1E40AF]">Digital Solutions</span>
            <br />
            That Drive Growth
          </h1>

          <p className="text-gray-700 max-w-xl text-center text-base md:text-lg font-montserrat">
            From concept to launch, we deliver services designed to scale your
            business forward.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#E5E7EB] rounded-[1.25rem] shadow-sm hover:shadow-md hover:border-[#1E40AF]/40 transition-all duration-300 p-8 text-left"
            >
              {/* ICON */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E9F0FF] rounded-xl mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#1E40AF] mb-3 font-montserrat">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-6 font-montserrat text-sm md:text-base">
                {service.desc}
              </p>

              {/* FEATURES */}
              <ul className="space-y-3 mb-8 text-gray-700 font-montserrat">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E40AF]/90">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="flex items-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-[#17348A] text-white font-semibold px-5 py-2.5 rounded-lg transition-all"
                >
                  Free Consultation →
                </Link>
                <button className="ml-2 w-9 h-9 border border-[#E5E7EB] rounded-lg flex items-center justify-center text-gray-500 hover:text-[#1E40AF] hover:border-[#1E40AF] transition-all">
                  i
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
