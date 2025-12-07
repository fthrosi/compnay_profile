"use client";
import { portofolioType } from "@/types/portofolio.type";
import { portfolioNavigation } from "@/const/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/icons/whatsapp";
import PortfolioDetailModal from "./detailModal";
import { useUIStore } from "@/store/useUiStore";
import { motion, easeOut } from "motion/react";
import { useDataStore } from "@/store/useDataStore";

export default function PortfolioList() {
  const portofolioData = useDataStore((state) => state.portfolios);
  const getPortofolioData = useDataStore((state) => state.fetchPortfolios);
  const [showData, setShowData] = useState<portofolioType[]>([]);
  const [itemsToShow, setItemsToShow] = useState<number>(6);
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<portofolioType | null>(null);
  const isModalDetail = useUIStore(
    (state) => state.activeModal === "detailPortfolio"
  );
  const open = useUIStore((state) => state.open);
  const filterData = () => {
    let data = portofolioData.slice(0, itemsToShow);
    if (typeFilter !== "All") {
      data = data.filter((item) => item.category.name === typeFilter);
    }
    setShowData(data);
  };
  const handleShowmore = () => {
    setItemsToShow((prev) => prev + 6);
  };
  const handleFilterChange = (filter: string) => {
    setTypeFilter(filter);
    setItemsToShow(6);
  };
  useEffect(() => {
    filterData();
  }, [itemsToShow, typeFilter, portofolioData]);
  useEffect(() => {
    getPortofolioData();
  }, []);
  const openDetailModal = (portfolio: portofolioType) => {
    setSelectedPortfolio(portfolio);
    open("detailPortfolio");
  };

  const titleVarian = {
    hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: easeOut },
    },
  };
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  const subTitleVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
      ease: easeOut,
    },
  };
  return (
    <div className="container-layout flex flex-col gap-40 mb-40">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-5 font-montserrat xl:w-137.5">
          <motion.h1
            variants={titleVarian}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="lg:text-h1 md:text-h2 text-h3 font-bold text-primary text-center"
          >
            All Projects
          </motion.h1>
          <motion.p
            variants={subTitleVariant}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="lg:text-body-l md:text-body-m text-caption text-neutral-black text-center"
          >
            A selection of our best works that showcase creativity, precision,
            and meaningful impact.
          </motion.p>
        </div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {portfolioNavigation.map((item) => (
            <motion.div
              variants={itemVariant}
              key={item.id}
              className={`px-4 font-montserrat py-2.5 rounded-[1.25rem] border border-[#CACAD1] text-caption font-semibold text-neutral-black cursor-pointer hover:bg-primary hover:text-white transition ${
                typeFilter === item.type ? "bg-primary text-white" : ""
              }`}
              onClick={() => handleFilterChange(item.type)}
            >
              {item.title}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6.5"
        >
          {showData.map((item) => (
            <motion.div
              variants={cardVariant}
              className="p-5.5 hover:cursor-pointer flex flex-col gap-8 rounded-3xl border border-[#CACAD1]"
              layoutId={`portfolio-card-${item.id}`}
              key={item.id}
              onClick={() => openDetailModal(item)}
            >
              <motion.div
              layoutId={`portfolio-image-${item.id}`}
              >
                <Image
                  src={item.thumbnail_url}
                  alt={item.name}
                  width={372}
                  height={220}
                  className="w-full h-auto rounded-[1.25rem]"
                />
              </motion.div>
              <div className="flex flex-col gap-6 ">
                <div className="flex justify-between items-center text-caption text-neutral-black">
                  <div className="p-2.5 bg-neutral-300 rounded-[0.625rem] font-montserrat">
                    <p>{item.category.name}</p>
                  </div>
                  <p className="font-montserrat">
                    {item.created_at.split("T")[0]}
                  </p>
                </div>
                <h5 className="capitalize lg:text-h5 text-body-m md:text-body-l font-bold font-montserrat text-neutral-black">
                  {item.name}
                </h5>
                <p className="lg:text-body-m text-caption text-neutral-black font-montserrat line-clamp-3">
                  {item.description}
                </p>
                <div className="flex gap-2.5">
                  {item.portfolio_techstack.slice(0, 2).map((tech, index) => (
                    <div
                      className="py-1 px-2.5 rounded-[0.625rem] border border-[#F7AE2D]"
                      key={index}
                    >
                      <p className="text-caption text-[#F7AE2D] font-montserrat">
                        {tech.techstack.name}
                      </p>
                    </div>
                  ))}
                  {item.portfolio_techstack.length > 2 && (
                    <div className="py-1 px-2.5 rounded-[0.625rem] border border-[#F7AE2D]">
                      <p className="text-caption text-[#F7AE2D] font-montserrat">
                        +{item.portfolio_techstack.length - 2}
                      </p>
                    </div>
                  )}
                </div>
                <p className="text-caption text-neutral-500 font-montserrat">
                  Client: {item.client_name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {showData.length < portofolioData.length && showData.length > 0 && (
          <div
            className="py-3 px-4 rounded-[0.625rem] border border-neutral-500 lg:text-body-l text-caption md:text-body-m font-bold text-center text-neutral-black hover:bg-primary hover:text-white cursor-pointer transition font-montserrat"
            onClick={handleShowmore}
          >
            Load More Projects
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-light-primary rounded-[1.875rem] flex flex-col justify-center gap-8 items-center text-center px-4 py-20 font-montserrat"
      >
        <motion.h1
          variants={titleVarian}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:text-h1 md:text-h2 text-h3 font-bold text-primary"
        >
          Interested in Working With Us?
        </motion.h1>
        <motion.p
          variants={subTitleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:text-body-l md:text-body-m text-caption text-neutral-black lg:w-161 "
        >
          Let’s discuss how we can help turn your digital vision into reality
          with outstanding results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex lg:gap-7 gap-3 md:gap-5"
        >
          <Link
            href="https://wa.me/6285869887731"
            className="py-3 px-4 flex items-center gap-2.5 bg-primary text-neutral-white rounded-[0.625rem]"
          >
            <p className="lg:text-body-l md:text-body-m text-caption">
              Schedule the Consultation
            </p>
            <WhatsAppIcon className="size-[1.438rem] " />
          </Link>
        </motion.div>
      </motion.div>
      {isModalDetail && selectedPortfolio && (
        <PortfolioDetailModal portfolio={selectedPortfolio} />
      )}
    </div>
  );
}
