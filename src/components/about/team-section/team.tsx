import TeamCarousel from "./carousel";

export default function TeamSection() {
  return (
    <div className="flex flex-col gap-23 lg:h-dvh container-layout justify-center mb-10 lg:mb-0">
      <div className="flex flex-col text-center font-montserrat gap-4">
        <h4 className="lg:text-h4 md:text-h5 text-h6 font-bold text-neutral-black">Meet Our Team</h4>
        <h1 className="lg:text-h1 md:text-h2 text-h3 font-bold text-primary">
          Humans of Talenta Digital Solution
        </h1>
      </div>
      <div className="relative w-full">
        <TeamCarousel />
      </div>
    </div>
  );
}
