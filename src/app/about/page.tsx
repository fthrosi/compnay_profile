import HeaderAbout from "@/components/about/header";
import VisionMision from "@/components/about/vision-mision";
import TeamSection from "@/components/about/team-section/team";
import ContactSection from "@/components/about/section-contact";
export default function About() {
  return (
    <div className="min-h-dvh bg-neutral-white w-full flex flex-col gap-20 md:gap-0">
      <HeaderAbout />
      <VisionMision />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
