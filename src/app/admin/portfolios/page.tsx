"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Briefcase } from "lucide-react";
import PortfolioModal from "@/components/modal/modalPortfolio/modalAdd";
import { useUIStore } from "@/store/useUiStore";
import { useDataStore } from "@/store/useDataStore";
import type { portofolioType } from "@/types/portofolio.type";
import EditPortfolioModal from "@/components/modal/modalPortfolio/modalEdit";
import { ModalConfirmation } from "@/components/modal/modalConfirmation";
import { toast } from "sonner";
import loadingAnimation from "@/animations/loading.json";
import Lottie from "lottie-react";
import { tr } from "zod/v4/locales";

export default function PortfoliosManagement() {
  const [selectedPortfolio, setSelectedPortfolio] = useState<portofolioType>();
  const open = useUIStore((state) => state.open);
  const close = useUIStore((state) => state.close);
  const [loading, setLoading] = useState(false);
  const { fetchPortfolioCategories, fetchTechStacks } = useDataStore();
  const ismodalAdd = useUIStore(
    (state) => state.activeModal === "addPortfolio"
  );
  const ismodalEdit = useUIStore(
    (state) => state.activeModal === "editPortfolio"
  );
  const isModalDelete = useUIStore(
    (state) => state.activeModal === "deletePortfolio"
  );
  const [portfolios, setPortfolios] = useState<portofolioType[] | []>([]);

  const getPortfolios = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/portfolio", {
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        console.log("✅ Portfolios fetched:", result.data);
        setPortfolios(result.data);
        setLoading(false);
      } else {
        console.log("Gagal memuat data portofolio");
        setLoading(false);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat memuat data portofolio:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPortfolioCategories();
    fetchTechStacks();
    getPortfolios();
  }, [fetchPortfolioCategories, fetchTechStacks]);

  const handleEditClick = (portfolio: portofolioType) => {
    setSelectedPortfolio(portfolio);
    open("editPortfolio");
  };
  const handleDeleteClick = (portfolio: portofolioType) => {
    setSelectedPortfolio(portfolio);
    open("deletePortfolio");
  };
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header with Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Manajemen Portofolio
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Kelola proyek dan portofolio Anda di sini
          </p>
        </div>
        <button
          onClick={() => open("addPortfolio")}
          className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium transition-colors w-full sm:w-auto"
        >
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
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
                  Kategori
                </th>
                <th className="hidden sm:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Tanggal
                </th>
                <th className="hidden sm:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Teknologi
                </th>
                <th className="hidden md:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Nama Klien
                </th>
                <th className="hidden md:table-cell px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Link
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12">
                    <div className="flex justify-center">
                      <Lottie
                        animationData={loadingAnimation}
                        loop={true}
                        className="w-24 h-24"
                      />
                    </div>
                  </td>
                </tr>
              ) : portfolios.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12">
                    <div className="text-center py-12">
                      <p className="text-slate-600 text-lg">
                        No portfolios yet
                      </p>
                      <p className="text-slate-500 text-sm mt-1">
                        Click "Tambah Portofolio" to add a portfolio
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                portfolios.map((portfolio) => (
                  <tr
                    key={portfolio.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                          <Briefcase
                            size={16}
                            className="sm:w-5 sm:h-5 text-gray-500"
                          />
                        </div>
                        <p className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2 capitalize">
                          {portfolio.name}
                        </p>
                      </div>
                      <p className="sm:hidden text-xs text-gray-600 mt-1">
                        {portfolio.category.name}
                      </p>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-600">
                      {portfolio.category.name}
                    </td>
                    <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600">
                      {portfolio.created_at}
                    </td>
                    <td className="hidden sm:flex px-6 py-4 flex-wrap items-center gap-2">
                      {portfolio.portfolio_techstack.map((stack, index) => (
                        <span
                          key={stack.techstack.id}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 capitalize`}
                        >
                          {stack.techstack.name}
                        </span>
                      ))}
                    </td>
                    <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600 capitalize">
                      {portfolio.client_name}
                    </td>
                    <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600">
                      {portfolio.link ? portfolio.link : "-"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <button
                          onClick={() => handleEditClick(portfolio)}
                          className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Edit2
                            size={14}
                            className="text-gray-600 sm:w-4 sm:h-4"
                          />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(portfolio)}
                          className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <Trash2
                            size={14}
                            className="text-red-600 sm:w-4 sm:h-4"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {ismodalAdd && <PortfolioModal onSuccess={getPortfolios} />}
      {ismodalEdit && selectedPortfolio && (
        <EditPortfolioModal
          onSuccess={getPortfolios}
          portfolio={selectedPortfolio}
        />
      )}
      {isModalDelete && selectedPortfolio && (
        <ModalConfirmation
          title="Hapus Portofolio"
          message={`Apakah Anda yakin ingin menghapus portofolio "${selectedPortfolio.name}"? Tindakan ini tidak dapat dibatalkan.`}
          onClose={() => close()}
          onConfirm={async () => {
            try {
              const response = await fetch(
                `/api/portfolio/${selectedPortfolio.id}`,
                { method: "DELETE" }
              );
              const result = await response.json();
              if (result.success) {
                getPortfolios();
                close();
                toast.success("Portfolio deleted successfully");
              } else {
                toast.error("Failed to delete portfolio");
              }
            } catch (error) {
              toast.error("An error occurred while deleting the portfolio");
            }
          }}
        />
      )}
    </div>
  );
}
