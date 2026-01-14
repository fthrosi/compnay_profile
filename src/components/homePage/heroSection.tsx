import Image from "next/image";
import { Globe } from "lucide-react";
import { motion, easeOut } from "motion/react";

export default function HeroSection() {
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
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
      ease: easeOut,
    },
  };
  return (
    <section className="relative bg-neutral-white h-dvh w-full">
      <div className="absolute inset-0 lg:w-81.5 lg:h-[19.813rem] size-50 md:size-70 rounded-full bg-linear-to-r from-[#FCD880] via-[#87BBD7] to-primary blur-[70px] rotate-200 -left-30  z-1" />
      <div className="absolute inset-0 lg:w-81.5 lg:h-[19.813rem] size-50 md:size-70 rounded-full bg-linear-to-r from-[#FCD880] via-[#87BBD7] to-primary blur-[70px] rotate-120 left-auto top-auto bottom-10 z-1" />
      <div className="container-layout h-full flex items-center justify-center lg:justify-between">
        {/* Text Content */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 max-w-[80%] lg:max-w-full relative z-2"
        >
          <motion.h1
            variants={titleVarian}
            className="text-4xl md:text-6xl lg:text-4xl xl:text-[2.625rem] 2xl:text-[3rem] font-extrabold text-gray-900 leading-tight"
          >
            Empower Your Business with{" "}
            <span className="text-primary">Digital Innovation</span>
          </motion.h1>

          <motion.p
            variants={subTitleVariant}
            className="mt-6 text-gray-600 text-lg max-w-xl"
          >
            We deliver cutting-edge software solutions that drive growth,
            enhance efficiency, and transform how enterprises operate in the
            digital age.
          </motion.p>
          <button className="mt-8 px-7 py-3 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
            Explore Solutions →
          </button>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden flex-1 z-2 h-full lg:flex items-center justify-end"
        >
          <div className="relative flex flex-col items-end gap-4">
            {/* BLUE BOX - MAN */}
            <div className="absolute left-auto 2xl:size-56 md:size-44 lg:size-50 xl:size-53 2xl:right-57 md:right-48 lg:right-51 xl:right-54 2xl:top-16 md:top-12 lg:top-13 xl:top-14 box-content p-4 rounded-br-[1.15rem] bg-neutral-white">
              <div className="relative w-full h-full bg-[#8FBFDB] rounded-b-[1.15rem] rounded-tr-[1.15rem] rounded-tl-[4.375rem]"></div>
              <div className="absolute -top-11 left-11 2xl:w-42.5 2xl:h-[17.813rem] md:w-30.5 md:h-[14.8rem] lg:w-36.5 lg:h-[16.3rem] xl:w-39.5 xl:h-[17.06rem]">
                <Image
                  src="/images/man.png"
                  alt="man"
                  fill
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* YELLOW BOX - WOMAN */}
            <div className="2xl:size-[14.063rem] md:size-44 lg:size-[12.56rem] xl:size-[13.3rem]">
              <div className="relative w-full h-full bg-[#FDDC85] rounded-b-[1.15rem] rounded-tl-[1.15rem] rounded-tr-[4.375rem]">
                <div className="absolute -top-8 -left-8 rounded-full p-3 bg-white">
                  <div className=" top-3 right-55 bg-[#78B8F4] rounded-full p-3 shadow-lg z-6">
                    <Globe className="2xl:size-7 md:size-2.5 lg:size-4 xl:size-5.5 text-white" />
                  </div>
                </div>
                <div className="absolute 2xl:w-[14.063rem] 2xl:h-65.5 md:h-53.5 md:w-[11.3rem] lg:w-[12.56rem] lg:h-59.5 xl:w-[13.3rem] xl:h-62.5 -top-9 ">
                  <Image
                    src="/images/woman.png"
                    alt="woman"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* TEAM BOX */}
            <div className="2xl:w-85.5 md:w-73.5 lg:w-79.5 xl:w-82.5 2xl:h-[13.938rem] md:h-[11.6rem] lg:h-[12.4rem] xl:h-[13.18rem] bg-primary overflow-hidden rounded-t-[1.15rem] rounded-bl-[1.15rem] rounded-br-[4.375rem]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/team.png"
                  alt="team"
                  fill
                  className="w-full h-full object-contain object-right"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
