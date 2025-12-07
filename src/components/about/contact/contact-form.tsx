"use client";

import { motion, easeOut, stagger } from "motion/react";

export default function ContactForm() {
  const maskVariant = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0% 100% 0% 0%)",
    },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: easeOut },
    },
  };
  const formVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  const inputVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full md:w-1/2 flex flex-col lg:gap-8 gap-4 md:gap-6 font-montserrat">
      <motion.h1
        variants={maskVariant}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-primary lg:text-h1 md:text-h2 text-h3 font-bold "
      >
        Get In Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:text-body-l md:text-body-m text-caption text-neutral-black lg:w-[30.563rem]"
      >
        Have a project in mind or need more information? Our team is ready to
        discuss how we can help your business grow.
      </motion.p>
      <motion.form
        variants={formVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        action=""
        className="flex flex-col lg:gap-8 gap-4 md:gap-6"
      >
        <motion.div
          variants={inputVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-3 "
        >
          <label
            htmlFor="name"
            className="text-neutral-black lg:text-body-l md:text-body-m text-caption font-bold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border bg-neutral-white border-neutral-200 rounded-xl lg:rounded-[1.25rem] p-2 lg:p-4 text-neutral-500 lg:text-body-l md:text-body-m text-caption"
            placeholder="Enter your name"
          />
        </motion.div>
        <motion.div
          variants={inputVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-2.5"
        >
          <div className="flex flex-col gap-4 lg:gap-3 w-full lg:w-1/2">
            <label
              htmlFor="email"
              className="text-neutral-black lg:text-body-l md:text-body-m text-caption font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border bg-neutral-white border-neutral-200 rounded-xl lg:rounded-[1.25rem] p-2 lg:p-4 text-neutral-500 lg:text-body-l md:text-body-m text-caption"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-3 w-full lg:w-1/2">
            <label
              htmlFor="phone"
              className="text-neutral-black lg:text-body-l md:text-body-m text-caption font-bold"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="border bg-neutral-white border-neutral-200 rounded-xl lg:rounded-[1.25rem] p-2 lg:p-4 text-neutral-500 lg:text-body-l md:text-body-m text-caption"
              placeholder="Enter your phone number"
            />
          </div>
        </motion.div>
        <motion.div
          variants={inputVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-3 "
        >
          <label
            htmlFor="message"
            className="text-neutral-black lg:text-body-l md:text-body-m text-caption font-bold"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border aspect-26/7 bg-neutral-white border-neutral-200 rounded-xl lg:rounded-[1.25rem] p-2 lg:p-4 text-neutral-500 lg:text-body-l md:text-body-m text-caption"
            placeholder="Write down your message here..."
          ></textarea>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          type="submit"
          className="bg-primary hover:cursor-pointer text-white py-3 px-4 rounded-[0.625rem] lg:text-body-l md:text-body-m text-caption font-bold"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
}
