"use client";

import HeaderInsight from "@/components/insight/header";
import FeaturedArticle from "@/components/insight/featured-article";
import RecentArticle from "@/components/insight/recent-article";
import { useDataStore } from "@/store/useDataStore";
export default function Insight() {
  const isLoading = useDataStore((state) => state.isLoading.articles);
  return (
    <div className="min-h-dvh bg-neutral-white w-full flex flex-col gap-20 md:gap-0">
      {isLoading ? (
        <div className="flex justify-center items-center h-dvh">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-primary/80 h-32 w-32"></div>
        </div>
      ) : (
        <>
          <HeaderInsight />
          <FeaturedArticle />
          <RecentArticle />
        </>
      )}
    </div>
  );
}
