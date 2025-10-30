"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { teamData } from "@/const/team";
import type { TeamMember } from "@/types/team.type";

export default function TeamCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false }),
  ]);
  const lastId = teamData[teamData.length - 1].id;
  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex gap-6">
        {teamData.map((member: TeamMember) => (
          <div
            key={member.id}
            className={`relative xl:min-w-[25%] md:min-w-[33.3%] min-w-full sm:min-w-[50%] aspect-306/365 rounded-2xl p-6 shadow hover:shadow-lg transition-all ${
              member.id === lastId ? "mr-6" : ""
            }`}
          >
            <img
              src={member.foto}
              alt={member.name}
              className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10"
            />
            <div className="absolute inset-0 rounded-2xl bg-primary/40 -z-9"></div>
            <div className="h-full flex flex-col justify-end text-neutral-white font-montserrat">
              <h3 className="xl:text-h5 text-body-l md:text-h6 font-bold text-center z-2 ">
                {member.name}
              </h3>
              <p className="xl:text-body-l text-caption md:text-body-m text-center z-2">
                {member.jabatan}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
