"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"

export default function ArticlesManagement() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Memulai dengan Next.js 14",
      author: "Admin",
      date: "2024-01-15",
      views: 542,
      status: "published",
    },
    {
      id: 2,
      title: "Tips dan Trik React Hooks",
      author: "Admin",
      date: "2024-01-14",
      views: 328,
      status: "published",
    },
    {
      id: 3,
      title: "Artikel dalam Proses",
      author: "Admin",
      date: "2024-01-13",
      views: 0,
      status: "draft",
    },
  ])

  const getStatusBadgeColor = (status: string) => {
    return status === "published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
  }

  const getStatusLabel = (status: string) => {
    return status === "published" ? "Dipublikasikan" : "Draft"
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header with Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Manajemen Artikel</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Kelola semua artikel Anda di sini</p>
        </div>
        <button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium transition-colors w-full sm:w-auto">
          <Plus size={20} />
          <span className="hidden sm:inline">Buat Artikel Baru</span>
          <span className="sm:hidden">Buat</span>
        </button>
      </div>

      {/* Articles Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max sm:min-w-0">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
                  Judul
                </th>
                <th className="hidden sm:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Penulis
                </th>
                <th className="hidden md:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Tanggal
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
                  Views
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <p className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2">{article.title}</p>
                    <p className="sm:hidden text-xs text-gray-600 mt-1">{article.date}</p>
                  </td>
                  <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600">{article.author}</td>
                  <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-600">{article.date}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                      <Eye size={14} className="sm:w-4 sm:h-4" />
                      <span>{article.views}</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(article.status)}`}
                    >
                      {getStatusLabel(article.status)}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <button className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors">
                        <Edit2 size={14} className="text-gray-600 sm:w-4 sm:h-4" />
                      </button>
                      <button className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg hover:bg-red-100 transition-colors">
                        <Trash2 size={14} className="text-red-600 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
