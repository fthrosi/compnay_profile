
export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F1A] text-gray-300 py-4 border-t border-white/10 flex justify-center items-center">
      <div className="flex items-center gap-4 text-sm">
        {/* Teks copyright */}
        <p>Copyright © 2025 PT Talenta Digital Solution</p>

        {/* Ikon sosial media */}
        <div className="flex items-center gap-3">
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                2.76 2.24 5 5 5h14c2.76 0 5-2.24 
                5-5v-14c0-2.76-2.24-5-5-5zm-11 
                19h-3v-10h3v10zm-1.5-11.28c-.96 
                0-1.75-.79-1.75-1.75s.79-1.75 
                1.75-1.75 1.75.79 
                1.75 1.75-.79 1.75-1.75 
                1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 
                0-2.16 1.46-2.16 2.96v5.7h-3v-10h2.88v1.36h.04c.4-.76 
                1.38-1.56 2.84-1.56 3.04 0 3.6 
                2 3.6 4.6v5.6z"
              />
            </svg>
          </a>

          <a href="#" aria-label="Instagram" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.2c3.2 0 3.6.01 4.9.07 
                1.17.05 1.97.24 2.43.4.61.24 1.05.52 
                1.51.97.46.46.74.9.97 1.51.16.46.35 
                1.26.4 2.43.06 1.29.07 1.69.07 
                4.9s-.01 3.6-.07 4.9c-.05 
                1.17-.24 1.97-.4 2.43a3.44 3.44 0 
                0 1-.97 1.51 3.44 3.44 0 0 
                1-1.51.97c-.46.16-1.26.35-2.43.4-1.29.06-1.69.07-4.9.07s-3.6-.01-4.9-.07c-1.17-.05-1.97-.24-2.43-.4a3.44 
                3.44 0 0 1-1.51-.97 3.44 3.44 0 0 
                1-.97-1.51c-.16-.46-.35-1.26-.4-2.43C2.21 
                15.6 2.2 15.2 2.2 12s.01-3.6.07-4.9c.05-1.17.24-1.97.4-2.43.24-.61.52-1.05.97-1.51.46-.46.9-.74 
                1.51-.97.46-.16 1.26-.35 
                2.43-.4C8.4 2.21 8.8 2.2 12 
                2.2zm0 1.8c-3.16 0-3.52.01-4.76.07-1.02.05-1.58.22-1.95.36-.49.19-.84.42-1.21.79-.37.37-.6.72-.79 
                1.21-.14.37-.31.93-.36 1.95-.06 
                1.24-.07 1.6-.07 4.76s.01 3.52.07 
                4.76c.05 1.02.22 1.58.36 1.95.19.49.42.84.79 
                1.21.37.37.72.6 1.21.79.37.14.93.31 
                1.95.36 1.24.06 1.6.07 
                4.76.07s3.52-.01 
                4.76-.07c1.02-.05 1.58-.22 
                1.95-.36.49-.19.84-.42 
                1.21-.79.37-.37.6-.72.79-1.21.14-.37.31-.93.36-1.95.06-1.24.07-1.6.07-4.76s-.01-3.52-.07-4.76c-.05-1.02-.22-1.58-.36-1.95a2.64 
                2.64 0 0 0-.79-1.21 2.64 2.64 0 0 
                0-1.21-.79c-.37-.14-.93-.31-1.95-.36-1.24-.06-1.6-.07-4.76-.07zm0 
                3.6a5.4 5.4 0 1 1 0 10.8 5.4 5.4 
                0 0 1 0-10.8zm0 8.9a3.5 3.5 0 1 0 0-7 
                3.5 3.5 0 0 0 0 7zm5.7-9.8a1.26 
                1.26 0 1 1 0-2.52 1.26 1.26 0 0 1 0 2.52z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
import Image from "next/image";
import TeleponIcon from "@/icons/telepon";
import LocationIcon from "@/icons/location";
import EmailIcon from "@/icons/email";
import Link from "next/link";
import LinkedInIcon from "@/icons/linkedin";
import InstagramIcon from "@/icons/instagram";
import WhatsAppIcon from "@/icons/whatsapp";
export default function Footer() {
  return (
    <div className="w-full font-montserrat">
      <div className="w-full bg-primary-dark py-13.5">
        <div className="container-layout w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          <div className="flex flex-col gap-4.5 lg:w-104.5 text-neutral-white">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={219}
              height={49}
              className="w-40 sm:w-34 md:w-37 lg:w-54.5 h-auto"
            />
            <p className="lg:text-body-m text-caption">
              Technology that's extraordinary begins with the right talent. At
              PT Talenta Digital Solution, we deliver digital solutions that
              transform every challenge into business opportunities.
            </p>
            <div className="flex gap-3">
              <EmailIcon className="lg:size-5 size-4 text-neutral-white shrink-0" />
              <p className="lg:text-body-m text-caption">
                talentadigitalsolution@gmail.com
              </p>
            </div>
            <div className="flex gap-3">
              <TeleponIcon className="lg:size-5 size-4 text-neutral-white shrink-0" />
              <p className="lg:text-body-m text-caption">+62 812-3456-7890</p>
            </div>
            <div className="flex gap-3">
              <LocationIcon className="lg:size-5 size-4 text-neutral-white shrink-0" />
              <p className="lg:text-body-m text-caption">
                Jl. Orchard Boulevard, Belian, Kec. Batam Kota, Kota Batam,
                Kepulauan Riau 29464
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4.5 lg:text-body-m text-caption text-neutral-white">
            <h6 className="font-bold">Company</h6>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portofolio">Portofolio</Link>
            <Link href="/insight">Insights</Link>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4.5">
              <h6 className="font-bold">Services</h6>
              <div className="flex gap-6 text-neutral-white lg:text-body-m text-caption">
                <div className="flex flex-col gap-4.5">
                  <p>Web Design & Development</p>
                  <p>Mobile App Design</p>
                  <p>Brand Identity Design</p>
                  <p>UX Research & Consulting</p>
                  <p>SEO & Digital Marketing</p>
                </div>
                <div className="flex flex-col gap-4.5">
                  <p>Frontend Development</p>
                  <p>Game Development</p>
                  <p>AI & Data</p>
                  <p>Cloud Infra</p>
                  <p>ERP Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-neutral-black text-neutral-white flex flex-col md:flex-row justify-center md:gap-8 gap-5  py-5 items-center">
        <p className="lg:text-body-m text-caption">
          Copyright © 2025 PT Talenta Digital Solution
        </p>
        <div className="flex gap-8">
          <Link
            href="https://www.linkedin.com/company/talenta-digital-solutions/"
            target="_blank"
          >
            <LinkedInIcon className="size-6 shrink-0" />
          </Link>
          <Link
            href="https://www.instagram.com/talentadigitalsolution/"
            target="_blank"
          >
            <InstagramIcon className="size-6 shrink-0" />
          </Link>
        </div>

        <Link
          href="/whatsapp"
          className="absolute inset-0 left-auto right-5 2xl:right-70 -top-5 md:-top-7 lg:size-15 size-10 md:size-13 bg-light-primary p-2.5 rounded-full"
        >
          <WhatsAppIcon className="lg:size-10 md:size-8 size-5 shrink-0 text-primary" />
        </Link>
      </div>
    </div>
  );
}
