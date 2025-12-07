"use client";

import { motion } from "motion/react";

export default function HeaderPortofolio() {
  return (
    <div className="flex flex-col gap-10 lg:gap-0 mb-20 lg:mb-22 2xl:mb-25">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lg:h-150 h-130 bg-light-primary rounded-b-[5.625rem] lg:pt-[7.438rem] pt-20 flex justify-center items-center"
      >
        <div className="relative flex flex-col justify-center items-center gap-7.5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 z-2 py-1.5 rounded-[0.938rem] bg-primary flex justify-center items-center"
          >
            <h4 className="lg:text-h4 text-h6 md:text-h5 font-bold font-montserrat text-white">
              Portfolio
            </h4>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:text-h1 md:text-h2 text-h3 z-2 text-neutral-black font-bold font-montserrat lg:w-[32.313rem] w-75 md:w-95 text-center lg:leading-15 md:leading-13 leading-10"
          >
            Where Ideas Meet <span className=" text-primary">Execution</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:text-body-l md:text-body-m text-caption z-2 text-neutral-black lg:w-117 md:w-88 w-76 text-center font-montserrat"
          >
            Our portfolio showcases not just what we build, but how we redefine
            possibilities in digital.
          </motion.p>
          <div className="hidden sm:block absolute inset-0 lg:w-81.5 lg:h-[19.813rem] size-50 md:size-70 rounded-full bg-linear-to-r from-[#FCD880] via-[#87BBD7] to-primary blur-[70px] -rotate-70 lg:-top-40 lg:left-90 -top-40 left-60 z-1"></div>
        </div>
      </motion.div>
    </div>
  );
}
