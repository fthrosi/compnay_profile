import HeaderService from "@/components/portofolio/header";
import PortfolioList from "@/components/portofolio/portofolio";
export default function Portofolio() {
  return (
    <div className="min-h-dvh bg-neutral-white w-full flex flex-col gap-20 md:gap-0">
      <HeaderService />
      <PortfolioList />
    </div>
  );
}
