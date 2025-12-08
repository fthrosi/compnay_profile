"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArticleSchema, type ArticleType } from "@/schema/articleScema";
import ReactQuil from "../insight/editor";
import { useState } from "react";
import { useDataStore } from "@/store/useDataStore";
import { toast } from "sonner";
import { useUIStore } from "@/store/useUiStore";

interface ArticleFormProps {
  onSuccess: () => void;
}
export default function ArticleForm({ onSuccess }: ArticleFormProps) {
  const { articleCategories } = useDataStore();
  const close = useUIStore((state) => state.close);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors,isSubmitting },
  } = useForm<ArticleType>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      title: "",
      category_id: 0,
      content: "",
    },
  });

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", e.target.files as FileList);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ArticleType) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category_id", data.category_id.toString());
    formData.append("content", data.content);
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    try {
      const response = await fetch("/api/article", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Artikel berhasil dibuat");
        onSuccess();
        close();
      } else {
        toast.error("Gagal membuat artikel");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat membuat artikel");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label
          htmlFor="thumbnail"
          className="block text-sm text-neutral-black font-semibold mb-2"
        >
          Thumbnail Gambar <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4">
          {thumbnailPreview ? (
            <div className="relative">
              <img
                src={thumbnailPreview || "/placeholder.svg"}
                alt="Thumbnail preview"
                className="w-full h-auto object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setThumbnailPreview(null);
                  setValue("image", undefined as any);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center cursor-pointer py-8">
              <svg
                className="w-12 h-12 text-slate-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="text-slate-600 font-medium">
                Upload Thumbnail
              </span>
              <span className="text-sm text-slate-500">
                Drag & drop atau klik untuk memilih
              </span>
              <input
                type="file"
                id="thumbnail"
                accept="image/*"
                onChange={handleThumbnailChange}
                className="hidden"
              />
            </label>
          )}
        </div>
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">
            {errors.image.message?.toString()}
          </p>
        )}
      </div>

      {/* TITLE */}
      <div className="text-neutral-black">
        <label className="block font-semibold mb-2">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          {...register("title")}
          className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          placeholder="Masukkan judul artikel"
        />
        {errors.title && (
          <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* CATEGORY */}
      <div className="text-neutral-black">
        <label className="block font-semibold mb-2">
          Kategori <span className="text-red-500">*</span>
        </label>

        <select
          {...register("category_id", { valueAsNumber: true })}
          
          className="w-full border border-slate-300 p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        >
          <option value="">-- Pilih kategori --</option>
          {articleCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {errors.category_id && (
          <p className="text-red-600 text-sm mt-1">
            {errors.category_id.message}
          </p>
        )}
      </div>

      {/* EDITOR */}
      <div className="space-y-3 text-neutral-black">
        <label className="block font-semibold">
          Konten Artikel <span className="text-red-500">*</span>
        </label>
        <ReactQuil
          defaultValue={watch("content")}
          onChange={(value: string) => setValue("content", value)}
        />
      </div>

      {errors.content && (
        <p className="text-red-600 text-sm">{errors.content.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {isSubmitting ? "Menyimpan..." : "Simpan Artikel"}
      </button>
    </form>
  );
}
