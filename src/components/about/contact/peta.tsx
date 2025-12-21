'use client';
import { motion } from "motion/react";
export default function Peta() {

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="rounded-2xl aspect-500/300 md:aspect-auto md:h-auto w-full md:w-1/2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0671646493124!2d104.0664135756797!3d1.1118158622932461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d988c5a019a585%3A0x918adca6b431ac04!2sJl.%20Orchard%20Boulevard%2C%20Belian%2C%20Kec.%20Batam%20Kota%2C%20Kota%20Batam%2C%20Kepulauan%20Riau!5e0!3m2!1sid!2sid!4v1741702278547!5m2!1sid!2sid"
        width="100%"
        height="300"
        loading="lazy"
        className="w-full h-full rounded-2xl shadow-xl"
      ></iframe>
    </motion.div>
  );
}
