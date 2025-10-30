import TelescopeIcon from "@/icons/telescope";
import TargetIcon from "@/icons/target";
import Image from "next/image";
export default function VisionMision() {
  return (
    <div className="container-layout lg:h-dvh flex flex-col xl:justify-center gap-4 xl:gap-6 mb-10 lg:mb-0">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 xl:gap-6">
        <div className="md:w-1/2 box-border bg-light-primary flex flex-col p-5 xl:p-10 lg:p-7 justify-center rounded-[1.9rem] sm:w-160 gap-8">
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
              Transforming the technological landscape by providing exceptional
              application and web services. Talenta Digital Solutions is
              committed to helping businesses achieve their goals and stay ahead
              of the competition by providing innovative, reliable, and
              user-friendly solutions that continuously evolve according to
              client needs.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 sm:w-160 flex items-stretch w-full box-border">
          <Image
            src="/images/vision-img.png"
            alt="vision"
            width={638}
            height={335}
            className="w-full h-auto lg:h-full"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-4 xl:gap-6">
        <div className="md:w-1/2 flex items-stretch w-full box-border sm:w-160">
          <Image
            src="/images/mission-img.png"
            alt="vision"
            width={638}
            height={335}
            className="w-full h-auto lg:h-full"
          />
        </div>
        <div className="md:w-1/2 box-border bg-light-primary flex flex-col p-5 xl:p-10 lg:p-7 justify-center rounded-[1.9rem] sm:w-160 gap-8">
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
              Our vision is to be a leading provider of application and web
              services known for our expertise and commitment in delivering the
              best results for clients. We strive to continuously innovate and
              improve our services to remain competitive in the market and
              become a trusted partner for businesses everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
