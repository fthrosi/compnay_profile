'use client'
import TelescopeIcon from "@/icons/telescope";
import TargetIcon from "@/icons/target";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
export default function VisionMision() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef,{once:true});
  
  return (
    <div className="container-layout lg:h-dvh flex flex-col xl:justify-center gap-4 xl:gap-6 mb-10 lg:mb-0">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 xl:gap-6">
        <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ?{ x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 box-border bg-light-primary flex flex-col p-5 xl:p-10 lg:p-7 justify-center rounded-[1.9rem] sm:w-160 gap-8">
          <div className="flex gap-[1.813rem] items-center">
            <div className="bg-primary xl:p-4 p-1 xl:rounded-[1.375rem] rounded-[0.8rem]">
              <TelescopeIcon className="xl:size-14 size-8 md:size-10 text-neutral-white" />
            </div>
            <div>
              <h3 className="xl:text-h3 text-h5 md:text-h4 text-primary font-bold font-montserrat">
                Our Vision
              </h3>
            </div>
          </div>
          <div>
            <p className="font-montserrat xl:text-body-l text-caption md:text-body-m text-neutral-black">
              PT Talenta Digial Solution aspires to become an Indonesian
              creative technology company capable of standing on par with global
              players. Our focus is not only on developing web applications and
              services, but also on creating high-quality, innovative, and
              relevant game products that meet the needs of modern society.
              Through continuous innovation, we aim to provide beneficial
              digital solutions while becoming a trusted partner for
              international businesses.
            </p>
          </div>
        </motion.div>
        <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ?{ x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="md:w-1/2 sm:w-160 flex items-stretch w-full box-border">
          <Image
            src="/images/vision-img.png"
            alt="vision"
            width={638}
            height={335}
            className="w-full h-auto lg:h-full"
          />
        </motion.div>
      </div>
      <div ref={scrollRef} className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-4 xl:gap-6">
        <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ?{ x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="md:w-1/2 flex items-stretch w-full box-border sm:w-160">
          <Image
            src="/images/mission-img.png"
            alt="vision"
            width={638}
            height={335}
            className="w-full h-auto lg:h-full"
          />
        </motion.div>
        <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ?{ x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 box-border bg-light-primary flex flex-col p-5 xl:p-10 lg:p-7 justify-center rounded-[1.9rem] sm:w-160 gap-8">
          <div className="flex gap-[1.813rem] items-center">
            <div className="bg-primary xl:p-4 p-1 xl:rounded-[1.375rem] rounded-[0.8rem]">
              <TargetIcon className="xl:size-14 size-8 md:size-10 text-neutral-white" />
            </div>
            <div>
              <h3 className="xl:text-h3 text-h5 md:text-h4 text-primary font-bold font-montserrat">
                Our Mission
              </h3>
            </div>
          </div>
          <div>
            <p className="font-montserrat xl:text-body-l text-caption md:text-body-m text-neutral-black">
              Develop innovative, reliable, and easy-to-use web applications and
              services to help businesses achieve their goals and remain
              competitive in the global marketplace. Create games that serve not
              only as entertainment but also provide educational value,
              introduce Indonesian culture, and foster a sense of pride in
              national identity. Foster a healthy, collaborative, and inclusive
              work culture by providing opportunities for every individual to
              develop and demonstrate their contribution. Conduct business
              responsibly, with attention to environmental sustainability and
              community well-being, so that the technology we develop is not
              only economically beneficial but also socially beneficial.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
