'"use client";';

import { insightNavigation } from "@/const/navigation";
import type { Article } from "@/types/article";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { BookOpen, Calendar, User } from "lucide-react";
import { useUIStore } from "@/store/useUiStore";
import ArticleDetailModal from "../modal/modalArticle/modalDetail";
import { useDataStore } from "@/store/useDataStore";
import { motion, easeOut } from "motion/react";
import { ar } from "zod/v4/locales";

export default function RecentArticle() {
  const open = useUIStore((state) => state.open);
  const isModalDetailArticle = useUIStore(
    (state) => state.activeModal === "detailArticle"
  );

  const articles = useDataStore((state) => state.articles);
  const getArticlesData = useDataStore((state) => state.fetchArticles);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showData, setShowData] = useState<Article[]>([]);
  const [itemsToShow, setItemsToShow] = useState<number>(6);
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const handleShowmore = () => {
    setItemsToShow((prev) => prev + 6);
  };
  const handleFilterChange = (filter: string) => {
    setTypeFilter(filter);
    setItemsToShow(6);
  };

  useEffect(() => {
    getArticlesData();
  }, []);

  const filterData = () => {
    let data = articles.slice(0, itemsToShow);
    if (typeFilter !== "All") {
      data = data.filter((item) => item.category.name === typeFilter);
    }
    console.log("Filtered Data:", data);
    setShowData(data);
  };
  useEffect(() => {
    filterData();
  }, [itemsToShow, typeFilter, articles]);
  const handleOpenDetailArticle = (article: Article) => {
    setSelectedArticle(article);
    open("detailArticle");
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
  console.log("Articles:", articles);
  return (
    <>
      <div className="container-layout flex flex-col items-center gap-16 mb-40">
        {articles.length > 0 && (
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {insightNavigation.map((item) => (
              <motion.div
                variants={itemVariant}
                key={item.id}
                className={`px-4 font-montserrat py-2.5 rounded-[1.25rem] border border-[#CACAD1] text-caption font-semibold text-neutral-black cursor-pointer hover:bg-primary hover:text-white transition ${
                  typeFilter === item.title ? "bg-primary text-white" : ""
                }`}
                onClick={() => handleFilterChange(item.type)}
              >
                {item.title}
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {showData.map((item) => (
            <motion.div
              variants={cardVariant}
              layoutId={`article-card-${item.id}`}
              className="flex flex-col lg:gap-8 lg:p-6 gap-4 p-4 border border-neutral-300 rounded-3xl"
              key={item.id}
            >
              <motion.div layoutId={`article-image-${item.id}`}>
                <Image
                  src={item.image_url}
                  alt="Article Image"
                  width={372}
                  height={220}
                  className="lg:w-full lg:h-auto w-full rounded-[1.25rem]"
                />
              </motion.div>
              <div className="p-2.5 rounded-[0.625rem] bg-neutral-300 w-fit flex items-center justify-center">
                <p className="text-caption text-neutral-black font-montserrat">
                  {item.category.name}
                </p>
              </div>
              <div className="flex flex-col gap-5 ">
                <h5 className="lg:text-h5 text-h6 font-bold font-montserrat text-neutral-black line-clamp-2">
                  {item.title}
                </h5>
                <div
                  className="lg:text-body-m text-caption text-neutral-black font-montserrat line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
              <div className="flex lg:gap-8 gap-2">
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
                    {item.created_at.split("T")[0]}
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleOpenDetailArticle(item)}
                className="lg:px-4 hover:cursor-pointer lg:py-3 px-2 py-1 w-fit flex items-center gap-2.5 lg:rounded-[0.625rem] rounded-lg bg-primary text-neutral-white font-montserrat"
              >
                <p className="lg:text-body-l text-caption font-bold ">
                  Read Article
                </p>
                <BookOpen className="lg:size-6 size-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {showData.length < articles.length && (
          <div
            className="py-3 w-fit px-4 rounded-[0.625rem] border border-neutral-500 lg:text-body-l text-caption md:text-body-m font-bold text-center text-neutral-black hover:bg-primary hover:text-white cursor-pointer transition font-montserrat"
            onClick={handleShowmore}
          >
            Load More Articles
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-light-primary rounded-[1.875rem] w-full flex flex-col justify-center gap-8 items-center text-center px-4 py-20 font-montserrat"
        >
          <motion.h1
            variants={titleVarian}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:text-h1 md:text-h2 lg:w-188 md:w-120 text-h3 font-bold text-primary"
          >
            Never Miss a Beat in the Digital World
          </motion.h1>
          <motion.p
            variants={subTitleVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:text-body-l md:text-body-m text-caption text-neutral-black lg:w-161 md:w-104"
          >
            Subscribe to our newsletter to get the latest articles, design tips,
            and exclusive insights delivered straight to your inbox.
          </motion.p>
          <div className="lg:w-155 w-full md:w-104 flex flex-col sm:flex-row gap-4">
            <motion.input
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              type="email"
              placeholder="Enter your email"
              className="grow lg:text-body-l text-caption bg-neutral-white border border-neutral-300 p-3 lg:rounded-[1.25rem] rounded-2xl text-neutral-500"
            />
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="hover:cursor-pointer lg:py-3 lg:px-6 p-3 bg-primary text-white rounded-[1.25rem] text-caption lg:text-body-l font-bold"
            >
              Subscribe
            </motion.button>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:text-body-m text-caption text-neutral-500"
          >
            Completely free, no spam, can unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
      {isModalDetailArticle && selectedArticle && (
        <ArticleDetailModal article={selectedArticle} />
      )}
    </>
  );
}
