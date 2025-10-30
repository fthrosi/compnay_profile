export default function HeaderAbout() {
  return (
    <div className="flex flex-col gap-10 lg:gap-0 lg:h-dvh mb-10 lg:mb-0">
      <div className="lg:h-150 h-130 bg-light-primary rounded-b-[5.625rem] lg:pt-[7.438rem] pt-20 flex justify-center items-center">
        <div className="relative flex flex-col justify-center items-center gap-7.5">
          <div className="px-4 z-2 py-1.5 rounded-[0.938rem] bg-primary flex justify-center items-center">
            <h4 className="lg:text-h4 text-h6 md:text-h5 font-bold font-montserrat">
              About Us
            </h4>
          </div>
          <h1 className="lg:text-h1 md:text-h2 text-h3 z-2 text-neutral-black font-bold font-montserrat lg:w-[32.313rem] w-75 md:w-95 text-center lg:leading-15 md:leading-13 leading-10">
            Your Partner in{" "}
            <span className=" text-primary">Digital Innovation</span>
          </h1>
          <p className="lg:text-body-l md:text-body-m text-caption z-2 text-neutral-black lg:w-[25.188rem] md:w-88 w-76 text-center font-montserrat">
            We bring together diverse talents to deliver digital solutions that
            matter worldwide.
          </p>
          <div className="hidden sm:block absolute inset-0 lg:w-81.5 lg:h-[19.813rem] size-50 md:size-70 rounded-full bg-linear-to-r from-[#FCD880] via-[#87BBD7] to-primary blur-[70px] -rotate-70 lg:-top-40 lg:left-90 -top-40 left-60 z-1"></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row container-layout w-full md:items-center gap-4 md:gap-0 xl:gap-6">
        <div className="md:w-1/2 flex flex-col font-bold text-center md:text-left justify-center">
          <h2 className="xl:text-h1 lg:text-h2 text-h3 text-primary">Where it All Begin</h2>
          <h4 className="xl:text-h3 lg:text-h4 text-h5 text-neutral-black">
            About Talenta Digital Solution
          </h4>
        </div>
        <div className="md:w-1/2">
          <p className="text-neutral-black xl:text-body-l lg:text-body-m text-caption xl:w-156 font-montserrat text-center md:text-left">
            PT Talenta Digital Solutions was founded in 2024 with a vision to
            become a trusted partner in the development of innovative and
            high-quality software. Starting as a small team of technology
            professionals, the company emerged from a passion for helping
            businesses undergo digital transformation through effective and
            efficient software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
