'use client'

import HeaderInsight from "@/components/insight/header";
import FeaturedArticle from "@/components/insight/featured-article";
import RecentArticle from "@/components/insight/recent-article";
export default function Insight() {
  return (
    <div className="min-h-dvh bg-neutral-white w-full flex flex-col gap-20 md:gap-0">
      <HeaderInsight />
      <FeaturedArticle />
      <RecentArticle />
    </div>
  );
}
