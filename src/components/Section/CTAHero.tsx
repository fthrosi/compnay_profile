import { motion, easeOut } from "motion/react";
import Link from "next/link";
import WhatsAppIcon from "@/icons/whatsapp";
export default function CTAHero() {
  const titleVarian = {
    hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: easeOut },
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-primary rounded-[1.875rem] flex flex-col justify-center gap-8 items-center text-center px-4 py-20 font-montserrat"
    >
      <motion.h1
        variants={titleVarian}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:text-h1 md:text-h2 text-h3 font-bold text-neutral-white"
      >
        Ready to Transform Your Business?
      </motion.h1>
      <motion.p
        variants={subTitleVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:text-body-l md:text-body-m text-caption text-neutral-white lg:w-161 "
      >
        Let's discuss how our enterprise software solutions can drive your digital transformation and deliver measurable business value.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex lg:gap-7 gap-3 md:gap-5"
      >
        <Link
          href="https://wa.me/6285869887731"
          className="py-3 px-4 flex items-center gap-2.5 bg-neutral-white text-primary rounded-[0.625rem]"
        >
          <p className="lg:text-body-l md:text-body-m text-caption">
            Schedule the Consultation
          </p>
          <WhatsAppIcon className="size-[1.438rem] " />
        </Link>
      </motion.div>
    </motion.div>
  );
}
