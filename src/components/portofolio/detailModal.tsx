"use client"

import { useState } from "react"
import { portofolioType } from "@/types/portofolio.type"
import { useUIStore } from "@/store/useUiStore"

interface PortfolioDetailModalProps {
  portfolio: portofolioType | null
}

export default function PortfolioDetailModal({ portfolio }: PortfolioDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const closeModal = useUIStore((state) => state.close)
  if (!portfolio) return null

  const getCurrentImageUrl = () => {
    if (selectedImageIndex === -1) {
      return portfolio.thumbnail_url;
    }
    
    if (
      portfolio.portfolio_images &&
      portfolio.portfolio_images[selectedImageIndex]
    ) {
      return portfolio.portfolio_images[selectedImageIndex].image_url; // ✅ Access .image_url
    }
    
    return portfolio.thumbnail_url;
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with Close Button */}
        <div className="sticky top-0 bg-white border-b border-slate-200 flex items-center justify-between p-4">
          <h2 className="text-xl font-bold text-slate-900">{portfolio.name}</h2>
          <button
            onClick={closeModal}
            className="text-slate-500 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Main Image with Gallery */}
          <div className="space-y-3">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden h-80 bg-slate-200">
              <img
                src={
                  getCurrentImageUrl()
                }
                alt={portfolio.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            {portfolio.portfolio_images && portfolio.portfolio_images.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {/* Main Thumbnail */}
                <button
                  onClick={() => setSelectedImageIndex(-1)}
                  className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === -1 ? "border-blue-500" : "border-slate-200"
                  }`}
                >
                  <img
                    src={portfolio.thumbnail_url || "/placeholder.svg"}
                    alt="Main"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Additional Images */}
                {portfolio.portfolio_images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index ? "border-blue-500" : "border-slate-200"
                    }`}
                  >
                    <img
                      src={img.image_url || "/placeholder.svg"}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Badge */}
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {portfolio.category.name}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-2">Deskripsi Proyek</h3>
            <p className="text-slate-600 leading-relaxed">{portfolio.description}</p>
          </div>

          {/* Client Information */}
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Client</h3>
            <p className="text-slate-600">{portfolio.client_name}</p>
          </div>

          {/* Tech Stack */}
          {portfolio.portfolio_techstack.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Tech Stack yang Digunakan</h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.portfolio_techstack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                    {tech.techstack.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
