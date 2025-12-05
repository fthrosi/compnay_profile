"use client";

import { useState, useEffect, use } from "react";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { useUIStore } from "@/store/useUiStore";
import ArticleModal from "@/components/modal/modalArticle/modalAdd";
import { useDataStore } from "@/store/useDataStore";
import { Article } from "@/types/article";
import ArticleModalEdit from "@/components/modal/modalArticle/modalEdit";
import { ModalConfirmation } from "@/components/modal/modalConfirmation";
import { toast } from "sonner";
import loadingAnimation from "@/animations/loading.json";
import Lottie from "lottie-react";

export default function ArticlesManagement() {
  const { fetchArticleCategories } = useDataStore();
  const [selectedArticle, setSelectedArticle] = useState<Article>();
  const open = useUIStore((state) => state.open);
  const [loading, setLoading] = useState(false);
  const isModalAdd = useUIStore((state) => state.activeModal === "addArticle");
  const isModalEdit = useUIStore(
    (state) => state.activeModal === "editArticle"
  );
  const close = useUIStore((state) => state.close);
  const isModalDelete = useUIStore(
    (state) => state.activeModal === "deleteArticle"
  );
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticleCategories();
  }, [fetchArticleCategories]);
  const getArticle = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/article", {
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        setArticles(result.data);
        setLoading(false);
      } else {
        console.log("Gagal memuat data kategori artikel");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(
        "Terjadi kesalahan saat memuat data kategori artikel:",
        error
      );
    }
  };
  useEffect(() => {
    getArticle();
  }, []);
  const handleEditClick = (article: Article) => {
    setSelectedArticle(article);
    open("editArticle");
  };
  const handleDeleteClick = (article: Article) => {
    setSelectedArticle(article);
    open("deleteArticle");
  };
  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`/api/article/${selectedArticle?.id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        getArticle();
        close();
        toast.success("Artikel berhasil dihapus");
      } else {
        toast.error("Gagal menghapus artikel");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus artikel");
    }
  };
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header with Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Manajemen Artikel
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Kelola semua artikel Anda di sini
          </p>
        </div>
        <button
          onClick={() => open("addArticle")}
          className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium transition-colors w-full sm:w-auto"
        >
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
                  Kategori
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12">
                    <div className="flex justify-center">
                      <Lottie
                        animationData={loadingAnimation}
                        loop={true}
                        className="w-24 h-24"
                      />
                    </div>
                  </td>
                </tr>
              ) : articles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-12">
                    <p className="text-slate-600 text-lg">No articles yet</p>
                    <p className="text-slate-500 text-sm mt-1">
                      Click "Buat Artikel Baru" to add an article
                    </p>
                  </td>
                </tr>
              ) : (
                articles.map((article) => (
                  <tr
                    key={article.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <p className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2">
                        {article.title}
                      </p>
                      <p className="sm:hidden text-xs text-gray-600 mt-1">
                        {article.category.name}
                      </p>
                    </td>
                    <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600">
                      Admin
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-600">
                      {article.created_at.split("T")[0]}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                        <span>{article.category.name}</span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <button
                          onClick={() => handleEditClick(article)}
                          className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Edit2
                            size={14}
                            className="text-gray-600 sm:w-4 sm:h-4"
                          />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(article)}
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

      {/* Modal for Adding Article */}
      {isModalAdd && <ArticleModal onSuccess={getArticle} />}
      {isModalEdit && selectedArticle && (
        <ArticleModalEdit onSuccess={getArticle} article={selectedArticle} />
      )}
      {/* Modal for Deleting Article */}
      {isModalDelete && selectedArticle && (
        <ModalConfirmation
          title="Hapus Artikel"
          message={`Apakah Anda yakin ingin menghapus artikel "${selectedArticle.title}"? Tindakan ini tidak dapat dibatalkan.`}
          onConfirm={handleConfirmDelete}
          onClose={() => close()}
        />
      )}
    </div>
  );
}
