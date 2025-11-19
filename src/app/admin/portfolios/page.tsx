"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Briefcase } from "lucide-react"

export default function PortfoliosManagement() {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      title: "Website E-Commerce Modern",
      category: "Web Development",
      date: "2024-01-20",
      status: "completed",
    },
    {
      id: 2,
      title: "Mobile App Fitness Tracker",
      category: "Mobile App",
      date: "2024-01-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Dashboard Analytics Platform",
      category: "Web Development",
      date: "2024-01-16",
      status: "in-progress",
    },
    {
      id: 4,
      title: "AI Chatbot Integration",
      category: "AI/Machine Learning",
      date: "2024-01-10",
      status: "completed",
    },
  ])

  const getStatusBadgeColor = (status: string) => {
    if (status === "completed") return "bg-green-100 text-green-700"
    if (status === "in-progress") return "bg-yellow-100 text-yellow-700"
    return "bg-gray-100 text-gray-700"
  }

  const getStatusLabel = (status: string) => {
    if (status === "completed") return "Selesai"
    if (status === "in-progress") return "Sedang Berjalan"
    return "Tertunda"
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header with Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Manajemen Portofolio</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Kelola proyek dan portofolio Anda di sini</p>
        </div>
        <button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium transition-colors w-full sm:w-auto">
          <Plus size={20} />
          <span className="hidden sm:inline">Tambah Portofolio</span>
          <span className="sm:hidden">Tambah</span>
        </button>
      </div>

      {/* Portfolios Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max sm:min-w-0">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
                  Proyek
                </th>
                <th className="hidden md:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Kategori
                </th>
                <th className="hidden sm:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Tanggal
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
              {portfolios.map((portfolio) => (
                <tr key={portfolio.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                        <Briefcase size={16} className="sm:w-5 sm:h-5 text-gray-500" />
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2">{portfolio.title}</p>
                    </div>
                    <p className="sm:hidden text-xs text-gray-600 mt-1">{portfolio.category}</p>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-600">{portfolio.category}</td>
                  <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600">{portfolio.date}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(portfolio.status)}`}
                    >
                      {getStatusLabel(portfolio.status)}
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
