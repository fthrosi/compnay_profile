import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

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
      {/* HERO */}
      <section className="container-layout relative overflow-hidden py-24 text-center bg-light-primary rounded-b-[5.625rem]">
        <div className="hidden sm:block absolute top-0 right-0 lg:w-[35rem] lg:h-[20rem] md:w-[26rem] md:h-[15rem] w-[18rem] h-[12rem] rounded-full bg-gradient-to-r from-[#FCD880] via-[#87BBD7] to-[#1E40AF] blur-[80px] rotate-[25deg] translate-x-[6rem] -translate-y-[3rem] z-0"></div>

        <div className="relative flex flex-col items-center gap-6 z-10">
          <div className="px-5 py-2 rounded-xl bg-primary text-white font-semibold text-sm md:text-base">
            Our Services
          </div>

          <h1 className="text-h2 md:text-h1 font-extrabold text-neutral-black leading-tight text-center font-montserrat">
            <span className="text-primary">Digital Solutions</span>
            <br />
            That Drive Growth
          </h1>

          <p className="text-gray-700 max-w-2xl text-base md:text-lg font-montserrat">
            From concept to launch, we deliver services designed to scale your
            business forward.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="container-layout grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 p-8"
            >
              {/* ICON */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E9F0FF] rounded-xl mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-h4 font-bold text-primary mb-3 font-montserrat">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-6 font-montserrat text-body-m md:text-body-l">
                {service.desc}
              </p>

              {/* FEATURES */}
              <ul className="space-y-3 mb-8 text-gray-700 font-montserrat">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary">
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
                  className="inline-flex items-center gap-2 bg-primary hover:bg-color-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-all"
                >
                  Free Consultation →
                </Link>
                <button className="ml-2 w-9 h-9 border border-[#E5E7EB] rounded-lg flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all">
                  i
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
