'"use client";';

import { insightNavigation } from "@/const/navigation";
import type { Article } from "@/types/article";
// import { articles } from "@/const/articles";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { BookOpen, Calendar, User } from "lucide-react";
import { useUIStore } from "@/store/useUiStore";
import ArticleDetailModal from "../modal/modalArticle/modalDetail";

export default function RecentArticle() {
  const open = useUIStore((state) => state.open);
  const isModalDetailArticle = useUIStore(
    (state) => state.activeModal === "detailArticle"
  );
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
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

  const getArticles = async () => {
    try {
      const response = await fetch("/api/article", {
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        console.log("✅ Articles fetched:", result.data);
        setArticles(result.data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat memuat data artikel:", error);
    }
  };

  useEffect(() => {
    getArticles();
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
  return (
    <>
      <div className="container-layout flex flex-col items-center gap-16 mb-40">
        <div className="flex flex-wrap justify-center gap-4">
          {insightNavigation.map((item) => (
            <div
              key={item.id}
              className={`px-4 font-montserrat py-2.5 rounded-[1.25rem] border border-[#CACAD1] text-caption font-semibold text-neutral-black cursor-pointer hover:bg-primary hover:text-white transition ${
                typeFilter === item.title ? "bg-primary text-white" : ""
              }`}
              onClick={() => handleFilterChange(item.type)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showData.map((item) => (
            <div
              className="flex flex-col lg:gap-8 lg:p-6 gap-4 p-4 border border-neutral-300 rounded-3xl"
              key={item.id}
            >
              <Image
                src={item.image_url}
                alt="Article Image"
                width={372}
                height={220}
                className="lg:w-auto lg:h-auto w-full rounded-[1.25rem]"
              />
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
                className="lg:px-4 lg:py-3 px-2 py-1 w-fit flex items-center gap-2.5 lg:rounded-[0.625rem] rounded-lg bg-primary text-neutral-white font-montserrat"
              >
                <p className="lg:text-body-l text-caption font-bold ">
                  Read Article
                </p>
                <BookOpen className="lg:size-6 size-4" />
              </div>
            </div>
          ))}
        </div>
        {showData.length < articles.length && (
          <div
            className="py-3 w-fit px-4 rounded-[0.625rem] border border-neutral-500 lg:text-body-l text-caption md:text-body-m font-bold text-center text-neutral-black hover:bg-primary hover:text-white cursor-pointer transition font-montserrat"
            onClick={handleShowmore}
          >
            Load More Articles
          </div>
        )}
        <div className="bg-light-primary rounded-[1.875rem] w-full flex flex-col justify-center gap-8 items-center text-center px-4 py-20 font-montserrat">
          <h1 className="lg:text-h1 md:text-h2 lg:w-188 md:w-120 text-h3 font-bold text-primary">
            Never Miss a Beat in the Digital World
          </h1>
          <p className="lg:text-body-l md:text-body-m text-caption text-neutral-black lg:w-161 md:w-104">
            Subscribe to our newsletter to get the latest articles, design tips,
            and exclusive insights delivered straight to your inbox.
          </p>
          <div className="lg:w-155 w-full md:w-104 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="grow lg:text-body-l text-caption bg-neutral-white border border-neutral-300 p-3 lg:rounded-[1.25rem] rounded-2xl text-neutral-500"
            />
            <button className="lg:py-3 lg:px-6 p-3 bg-primary text-white rounded-[1.25rem] text-caption lg:text-body-l font-bold">
              Subscribe
            </button>
          </div>
          <p className="lg:text-body-m text-caption text-neutral-500">
            Completely free, no spam, can unsubscribe anytime.
          </p>
        </div>
      </div>
      {isModalDetailArticle && selectedArticle && (
        <ArticleDetailModal article={selectedArticle} />
      )}
    </>
  );
}
