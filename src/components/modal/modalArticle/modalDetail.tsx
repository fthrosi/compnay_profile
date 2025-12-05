"use client"

import type { Article } from "@/types/article"
import { useUIStore } from "@/store/useUiStore"

interface ArticleDetailModalProps {
  article: Article
}

export default function ArticleDetailModal({ article }: ArticleDetailModalProps) {
    const close = useUIStore((state) => state.close);
  return (
    <>
      <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-90 transition-opacity" onClick={close} />
      <div className="fixed inset-0 flex items-center justify-center z-100 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          {/* Header dengan Close Button */}
          <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 line-clamp-2">{article.title}</h2>
            <button onClick={close} className="shrink-0 text-slate-500 hover:text-slate-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Image */}
            <div className="w-full h-96 rounded-lg overflow-hidden bg-slate-200">
              <img
                src={article.image_url || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">
                  {new Date(article.created_at.split("T")[0]).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-sm max-w-none">
              <div
                className="text-slate-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(/<h2>/g, '<h2 class="text-xl font-bold text-slate-900 mt-6 mb-3">')
                    .replace(/<h3>/g, '<h3 class="text-lg font-semibold text-slate-800 mt-4 mb-2">')
                    .replace(/<p>/g, '<p class="text-slate-700 leading-relaxed">')
                    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 text-slate-700 ml-4">')
                    .replace(/<li>/g, '<li class="text-slate-700">')
                    .replace(/<ol>/g, '<ol class="list-decimal list-inside space-y-2 text-slate-700 ml-4">')
                    .replace(
                      /<blockquote>/g,
                      '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-slate-600 my-4">',
                    ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
