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
      {/* Bagian atas footer */}
      <div className="w-full bg-primary-dark py-13.5">
        <div className="container-layout w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          {/* Kolom kiri: logo & kontak */}
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

          {/* Kolom tengah: navigasi */}
          <div className="flex flex-col gap-4.5 lg:text-body-m text-caption text-neutral-white">
            <h6 className="font-bold">Company</h6>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portofolio">Portofolio</Link>
            <Link href="/insight">Insights</Link>
          </div>

          {/* Kolom kanan: daftar services */}
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

      {/* Bagian bawah footer */}
      <div className="relative w-full bg-neutral-black text-neutral-white flex flex-col md:flex-row justify-center md:gap-8 gap-5 py-5 items-center">
        <p className="lg:text-body-m text-caption text-center">
          Copyright © 2025 PT Talenta Digital Solution
        </p>

        <div className="flex gap-8">
          <Link
            href="https://www.linkedin.com/company/talenta-digital-solutions/"
            target="_blank"
          >
            <LinkedInIcon className="size-6 shrink-0 hover:text-light-primary transition" />
          </Link>
          <Link
            href="https://www.instagram.com/talentadigitalsolution/"
            target="_blank"
          >
            <InstagramIcon className="size-6 shrink-0 hover:text-light-primary transition" />
          </Link>
        </div>

        {/* Tombol WhatsApp */}
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
