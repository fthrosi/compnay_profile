'use client';
import TeamCarousel from "./carousel";
import {easeOut, motion} from "motion/react";
export default function TeamSection() {
  const maskVariant = {
    hidden: { 
      opacity: 0, 
      clipPath: "inset(0% 100% 0% 0%)"
     },
    show: {
      opacity: 1, 
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: easeOut }
    }
  };
  return (
    <div className="flex flex-col gap-23 lg:h-dvh container-layout justify-center mb-10 lg:mb-0">
      <div className="flex flex-col text-center font-montserrat gap-4">
        <motion.h4 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{once:true}}
        className="lg:text-h4 md:text-h5 text-h6 font-bold text-neutral-black">Meet Our Team</motion.h4>
        <motion.h1
        variants={maskVariant}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:text-h1 md:text-h2 text-h3 font-bold text-primary">
          Humans of Talenta Digital Solution
        </motion.h1>
      </div>
      <div className="relative w-full">
        <TeamCarousel />
      </div>
    </div>
  );
}
