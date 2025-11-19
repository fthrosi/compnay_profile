export default function HeaderInsight() {
  return (
    <div className="flex flex-col gap-10 lg:gap-0 lg:h-dvh md:mb-20">
      <div className="lg:h-150 h-130 bg-light-primary rounded-b-[5.625rem] lg:pt-[7.438rem] pt-20 flex justify-center items-center">
        <div className="relative flex flex-col justify-center items-center gap-7.5">
          <div className="px-4 z-2 py-1.5 rounded-[0.938rem] bg-primary flex justify-center items-center">
            <h4 className="lg:text-h4 text-h6 md:text-h5 font-bold font-montserrat">
              Insight
            </h4>
          </div>
          <h1 className="lg:text-h1 md:text-h2 text-h3 z-2 text-neutral-black font-bold font-montserrat lg:w-[32.313rem] w-75 md:w-95 text-center lg:leading-15 md:leading-13 leading-10">
            Exploring the <span className=" text-primary">Digital World</span>
          </h1>
          <p className="lg:text-body-l md:text-body-m text-caption z-2 text-neutral-black lg:w-117 md:w-88 w-76 text-center font-montserrat">
            Insights, ideas, and trends shaping technology, business, and
            everyday life in the digital era.
          </p>
          <div className="hidden sm:block absolute inset-0 lg:w-81.5 lg:h-[19.813rem] size-50 md:size-70 rounded-full bg-linear-to-r from-[#FCD880] via-[#87BBD7] to-primary blur-[70px] -rotate-70 lg:-top-40 lg:left-90 -top-40 left-60 z-1"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-5">
        <h2 className="xl:text-h1 lg:text-h2 text-h3 text-primary font-montserrat font-bold text-center">
          Featured Article
        </h2>
        <p className="text-neutral-black xl:text-body-l lg:text-body-m text-caption xl:w-137.5 font-montserrat text-center">
          Discover our handpicked articles highlighting the latest trends, ideas, and innovations shaping the digital world.
        </p>
      </div>
    </div>
  );
}
