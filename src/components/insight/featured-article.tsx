import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default function FeaturedArticle() {
  return (
    <div className="flex flex-col gap-10 lg:gap-20  lg:mb-22 2xl:mb-25 container-layout">
      <div className="lg:p-8 md:p-6 p-4 flex flex-col sm:flex-row items-center lg:gap-18 gap-10 rounded-[1.875rem] border border-neutral-400">
        <Image
          src="/images/working.jpg"
          alt="artikel"
          width={400}
          height={400}
          className="rounded-[1.75rem] lg:size-100 w-full sm:size-65"
        />
        <div className="flex flex-col gap-6 xl:w-175 w-full">
          <div className="p-2.5 rounded-[0.625rem] bg-neutral-300 w-fit flex items-center justify-center">
            <p className="text-caption text-neutral-black font-montserrat">
              Technology
            </p>
          </div>
          <div className="flex flex-col gap-5 ">
            <h3 className="lg:text-h3 text-h5 font-bold font-montserrat text-neutral-black">
              The Rise of QR Code Payments: Simplicity Meets Security
            </h3>
            <p className="lg:text-body-l text-caption text-neutral-black font-montserrat line-clamp-3">
              QR code payments have transformed how people transact — fast,
              contactless, and convenient. This article explores how businesses
              can leverage QR technology to enhance customer experience, improve
              transaction efficiency, and ensure payment security in the digital
              age.
            </p>
          </div>
          <div className="flex lg:gap-8 md:gap-4 gap-2">
            <div className="flex lg:gap-4 gap-1">
                <div>
                  <User className="size-4 text-neutral-500" />
                </div>
                <p className="text-caption text-neutral-500 font-montserrat">
                  Admin
                </p>
              </div>
              <div className="flex lg:gap-4 gap-1">
                <div>
                  <Calendar className="size-4 text-neutral-500" />
                </div>
                <p className="text-caption text-neutral-500 font-montserrat">
                  June 15, 2023
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-5 ">
        <h2 className="xl:text-h1 lg:text-h2 text-h3 text-primary font-montserrat font-bold text-center">
          Recent Articles
        </h2>
        <p className="text-neutral-black xl:text-body-l lg:text-body-m text-caption xl:w-137.5 font-montserrat text-center">
          Explore our latest publications on technology, design, and innovation.
        </p>
      </div>
    </div>
  );
}
