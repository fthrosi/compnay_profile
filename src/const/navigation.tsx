import type { NavigationProps, PortfolioProps } from "@/types/navigation";

export const navigationLinks: NavigationProps[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/service" },
  { title: "Portfolio", href: "/portofolio" },
  { title: "Insight", href: "/insight" },
];

export const  portfolioNavigation: PortfolioProps[] = [
  { id: 1, title: "All", type: "All", },
  { id: 2, title: "Mobile App Design", type: "Mobile App", },
  { id: 3, title: "Brand Identity Design", type: "Brand Identity Design", },
  { id: 4, title: "UX Research & Consulting", type: "UX Research & Consulting", },
  { id: 5, title: "SEO & Digital Marketing",type: "SEO & Digital Marketing", },
  { id: 6, title: "Web Design & Development",type: "Web Design & Development" },
  // { id: 7, title: "Game Development" },
  // { id: 8, title: "AI & Data" },
  // { id: 9, title: "Cloud Infra" },
  // { id: 10, title: "ERP Tools" },
  
];
export const  insightNavigation: PortfolioProps[] = [
  { id: 1, title: "All", type: "All", },
  { id: 2, title: "Development", type: "Development", },
  { id: 3, title: "Design", type: "Design", },
  { id: 4, title: "Branding", type: "Branding", },
  { id: 6, title: "Technology",type: "Technology" },
  { id: 8, title: "AI & Data" ,type: "AI & Data" },
];
