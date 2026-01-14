import { motion, easeOut } from "motion/react";
export default function PartnerSection() {
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
  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
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
    <section className="container-layout w-full flex flex-col items-center xl:gap-16 gap-6 lg:gap-12">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full rounded-[1.25rem] max-w-[20rem] md:max-w-full z-10 md:gap-0 gap-4 bg-white drop-shadow-2xl xl:px-12 px-6 xl:py-10 py-6 flex flex-col md:flex-row md:items-center text-start justify-between"
      >
        <motion.div variants={itemVariant} className="text-left">
          <h5 className="2xl:text-h5 text-lg lg:text-xl font-semibold text-gray-900">
            200+ Enterprise Clients
          </h5>
          <p className="xl:text-base text-xs lg:text-sm text-gray-400 mt-1">
            Trusted Worldwide
          </p>
        </motion.div>
        <motion.div
          variants={itemVariant}
          className="flex flex-col md:flex-row 2xl:gap-12.5 gap-6"
        >
          <div className="flex flex-col gap-3.5">
            <h3 className="2xl:text-h3 text-xl lg:text-2xl font-bold text-primary">
              500+
            </h3>
            <p className="text-neutral-black 2xl:text-base text-xs lg:text-sm">
              Projects Delivered
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="2xl:text-h3 text-xl lg:text-2xl font-bold text-primary">
              98%
            </h3>
            <p className="text-neutral-black 2xl:text-base text-xs lg:text-sm">
              Client Satisfaction
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="2xl:text-h3 text-xl lg:text-2xl font-bold text-primary">
              24/7
            </h3>
            <p className="text-neutral-black 2xl:text-base text-xs lg:text-sm">
              Support Available
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="2xl:text-h3 text-xl lg:text-2xl font-bold text-primary">
              15+
            </h3>
            <p className="text-neutral-black 2xl:text-base text-xs lg:text-sm">
              Years Experience
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full flex flex-col 2xl:gap-8 gap-4 items-center"
      >
        <motion.h5
          variants={titleVarian}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-h5 text-neutral-black font-bold text-center"
        >
          Our Partners in Collaboration
        </motion.h5>
        <motion.div
          variants={cardVariant}
          className="flex justify-center items-center 2xl:gap-12 gap-2 md:gap-6 flex-wrap"
        >
          <img
            src="/images/pelican logo.png"
            alt="Pelican"
            className="2xl:size-24 size-8 md:size-12 lg:size-16 object-contain"
          />
          <img
            src="/images/UIB logo.png"
            alt="UIB"
            className="2xl:size-24 size-8 md:size-12 lg:size-16 object-contain"
          />
          <img
            src="/images/sambirejo.png"
            alt="sambirejo"
            className="2xl:size-24 size-8 md:size-12 lg:size-16 object-contain"
          />
          <img
            src="/images/unggul pratama.png"
            alt="unggul pratama"
            className="2xl:size-24 size-12 md:size-16 lg:size-20 object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
