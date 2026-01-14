"use client";
import InsightsAndTestimonials from "@/components/Section/InsightsAndTestimonials";
import CTAHero from "@/components/Section/CTAHero";
import FeaturedInsight from "@/components/Section/FeaturedInsight";
import HeroSection from "@/components/homePage/heroSection";
import { useNavbarStore } from "@/store/navbarHeight";
import PartnerSection from "@/components/homePage/partnerSection";
import { motion, easeOut } from "motion/react";

export default function HomePage() {
  const titleVarian = {
    hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: easeOut },
    },
  };
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  const subTitleVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };
  const navbarHeight = useNavbarStore((state) => state.navbarHeight);
  return (
    <main
      style={{
        paddingTop: `${navbarHeight}px`,
      }}
      className="w-full pb-12"
    >
      <HeroSection />
      <PartnerSection />

      <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container-layout mt-24"
      >
        <motion.h2
          variants={titleVarian}
          className="text-center text-[#1E40AF] font-semibold text-5xl md:text-6xl mb-6"
        >
          Featured Insights
        </motion.h2>
        <motion.p
          variants={subTitleVariant}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl"
        >
          Explore our latest thoughts, trends, and practical guides from the
          world of technology and digital innovation.
        </motion.p>
        <FeaturedInsight />
      </motion.section>
      <div className="container-layout mt-20">
        <InsightsAndTestimonials />
      </div>

      <div className="container-layout mt-20">
        <CTAHero />
      </div>
    </main>
  );
}
