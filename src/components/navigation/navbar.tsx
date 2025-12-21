"use client";

import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "@/const/navigation";
import { usePathname } from "next/navigation";
import RightArrow from "@/icons/right-arrow";
import BurgerIcon from "@/icons/burger-icon";
import XIcon from "@/icons/x-icon";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full fixed top-0 left-0 z-50 bg-neutral-white">
      {/* Navbar utama */}
      <div className="container-layout flex items-center justify-between md:h-[7.438rem] h-20">
        <Image
          src="/images/logo-new.svg"
          alt="Logo"
          width={196}
          height={44.4}
          className="w-30 sm:w-34 md:w-37 lg:w-49 h-auto"
        />

        {/* Navigation links desktop */}
        <div className="md:flex lg:gap-4 hidden">
          {navigationLinks.map((link) => (
            <div
              key={link.title}
              className={`lg:py-2.5 lg:px-4 md:py-2 md:px-3.5 font-montserrat lg:text-body-l md:text-body-m ${
                pathname === link.href
                  ? "bg-primary rounded-[0.625rem] font-semibold text-neutral-white"
                  : "text-neutral-black"
              }`}
            >
              <Link href={link.href}>{link.title}</Link>
            </div>
          ))}
        </div>

        {/* Tombol Contact Us (desktop) */}
        <Link
          href="/about#contact"
          className="hidden md:flex bg-primary text-neutral-white font-montserrat lg:text-button md:text-body-m font-bold lg:px-4 lg:py-2.5 md:py-2 md:px-3.5 rounded-[0.625rem] gap-1 items-center"
        >
          Contact Us
          <RightArrow className="lg:size-7 md:size-6" />
        </Link>

        {/* Tombol burger (mobile) */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XIcon className="size-6 text-primary" />
          ) : (
            <BurgerIcon className="size-6 text-primary" />
          )}
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden fixed w-full bg-neutral-white shadow-lg z-40 p-4
          transition-all duration-300 ease-in-out
          top-20 h-full flex flex-col justify-center
          ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="container-layout flex flex-col gap-8">
          {navigationLinks.map((link) => (
            <div
              key={link.title}
              className={`py-2.5 px-4 font-montserrat text-body-m rounded-[0.625rem] ${
                pathname === link.href
                  ? "bg-primary font-semibold text-neutral-white"
                  : "text-neutral-black"
              }`}
            >
              <Link
                href={link.href}
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            </div>
          ))}

          {/* Contact Us (mobile) */}
          <Link
            href="/about#contact"
            className={`flex font-montserrat text-body-m px-4 py-2.5 rounded-[0.625rem] gap-1 items-center justify-start ${
              pathname === "/about#contact"
                ? "bg-primary font-semibold text-neutral-white"
                : "text-neutral-black"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
