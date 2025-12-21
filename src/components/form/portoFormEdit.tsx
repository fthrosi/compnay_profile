"use client";

import { useState } from "react";
import { useDataStore } from "@/store/useDataStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditPortfolioSchema,
  type EditPortfolioSchemaType,
} from "@/schema/portfolioSchema";
import { useUIStore } from "@/store/useUiStore";
import { toast } from "sonner";
import { portofolioType } from "@/types/portofolio.type";

interface PortfolioFormProps {
  onSuccess: () => void;
  portfolio: portofolioType;
}

export default function PortfolioEditForm({
  onSuccess,
  portfolio,
}: PortfolioFormProps) {
  const { portfolioCategories, techStacks } = useDataStore();
  const close = useUIStore((state) => state.close);
  const [deletedImageIds, setDeletedImageIds] = useState<number[]>([]);
  const [isChangedThumbnail, setIsChangedThumbnail] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditPortfolioSchemaType>({
    resolver: zodResolver(EditPortfolioSchema),
    defaultValues: {
      name: portfolio.name,
      category_id: portfolio.category.id,
      description: portfolio.description,
      client_name: portfolio.client_name,
      link: portfolio.link || "",
      techStack: portfolio.portfolio_techstack.map((item) =>
        item.techstack.id.toString()
      ),
    },
  });
  const onSubmit = async (data: EditPortfolioSchemaType) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category_id", data.category_id.toString());
    formData.append("description", data.description);
    formData.append("client_name", data.client_name);
    if (data.link) {
      formData.append("link", data.link);
    }
    if (isChangedThumbnail && data.thumbnail && data.thumbnail[0]) {
      formData.append("thumbnail", data.thumbnail[0]);
    }
    data.techStack.forEach((techId) => {
      formData.append("techStack[]", techId);
    });
    if (data.imageAdditional && data.imageAdditional.length > 0) {
      Array.from(data.imageAdditional as FileList).forEach((file) => {
        formData.append("imageAdditional[]", file);
      });
    }
    if (deletedImageIds.length > 0) {
      deletedImageIds.forEach((id) => {
        formData.append("deletedImageIds[]", id.toString());
      });
    }
    try {
      const response = await fetch(`/api/portfolio/${portfolio.id}`, {
        method: "PUT",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        onSuccess();
        close();
        reset();
        toast.success("Portofolio berhasil diperbarui");
      } else {
        toast.error("Gagal memperbarui portofolio");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat memperbarui portofolio");
    }
  };

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(
    portfolio.thumbnail_url || null
  );
  const [additionalPreview, setAdditionalPreview] = useState<string[]>(
    portfolio.portfolio_images?.map((img) => img.image_url) || []
  );

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("thumbnail", e.target.files as FileList);
      setIsChangedThumbnail(true);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAdditionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const existingFiles = watch("imageAdditional");

      const mergedFiles = existingFiles
        ? [...Array.from(existingFiles), ...Array.from(files)]
        : Array.from(files);

      const convertFilesToFileList = new DataTransfer();
      mergedFiles.forEach((file) =>
        convertFilesToFileList.items.add(file as File)
      );

      setValue("imageAdditional", convertFilesToFileList.files);

      const previews: string[] = [];
      const fileArray = Array.from(files);

      let loadedCount = 0;
      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result as string);
          loadedCount++;

          // ✅ Set state setelah semua file selesai di-read
          if (loadedCount === fileArray.length) {
            setAdditionalPreview((prev) => [...prev, ...previews]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeAdditionalImage = (index: number) => {
    const existingImagesCount = portfolio.portfolio_images?.length || 0;

    if (index < existingImagesCount) {
      // ✅ Removing EXISTING image from server
      const imageId = portfolio.portfolio_images![index].id;
      setDeletedImageIds((prev) => [...prev, imageId]);
      console.log("🗑️ Mark for deletion (server):", imageId);
    } else {
      // ✅ Removing NEW uploaded file (not yet on server)
      const newFileIndex = index - existingImagesCount;

      const existingFiles = watch("imageAdditional");
      if (existingFiles) {
        const fileArray = Array.from(existingFiles as FileList);
        const filteredFiles = fileArray.filter((_, i) => i !== newFileIndex);

        const dataTransfer = new DataTransfer();
        filteredFiles.forEach((file) => dataTransfer.items.add(file));
        setValue("imageAdditional", dataTransfer.files);

        console.log("🗑️ Remove new file (local):", newFileIndex);
      }
    }

    // ✅ Always remove preview
    setAdditionalPreview((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 text-neutral-black"
    >
      {/* Title Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Judul Portofolio <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Masukkan judul portofolio"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Category Select */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Kategori <span className="text-red-500">*</span>
        </label>
        <select
          id="category"
          {...register("category_id", { valueAsNumber: true })}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none cursor-pointer appearance-none bg-white"
        >
          {portfolioCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <p className="text-red-500 text-sm mt-1">
            {errors.category_id.message}
          </p>
        )}
      </div>

      {/* Thumbnail Upload */}
      <div>
        <label
          htmlFor="thumbnail"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Thumbnail Gambar <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4">
          <div className="relative">
            <img
              src={thumbnailPreview || "/placeholder.svg"}
              alt="Thumbnail preview"
              className="w-full h-auto object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => {
                setThumbnailPreview(portfolio.thumbnail_url); // ✅ Reset to original
                setIsChangedThumbnail(false); // ✅ Mark as not changed
                setValue("thumbnail", undefined as any);
              }}
              className={`absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors ${
                isChangedThumbnail ? "" : "hidden"
              }`}
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
            <label
              htmlFor="thumbnail"
              className="absolute bottom-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors shadow-lg text-sm font-medium flex items-center gap-2"
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
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Ganti Foto
            </label>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="hidden"
            />
          </div>
        </div>
        {errors.thumbnail && (
          <p className="text-red-500 text-sm mt-1">
            {errors.thumbnail.message?.toString()}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Deskripsi <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          {...register("description")}
          placeholder="Jelaskan tentang proyek ini..."
          rows={4}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Client Name */}
      <div>
        <label
          htmlFor="clientName"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Nama Client <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="clientName"
          {...register("client_name")}
          placeholder="Masukkan nama client"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
        />
        {errors.client_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.client_name.message}
          </p>
        )}
      </div>

      {/* Tech Stack Checkboxes */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Tech Stack <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {techStacks.map((tech) => (
            <label
              key={tech.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                value={tech.id}
                {...register("techStack")}
                className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
              />
              <span className="text-sm text-slate-700">{tech.name}</span>
            </label>
          ))}
        </div>
        {errors.techStack && (
          <p className="text-red-500 text-sm mt-1">
            {errors.techStack.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="link"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Link
        </label>
        <input
          type="text"
          id="link"
          {...register("link")}
          placeholder="Masukkan link proyek"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
        />
        {errors.link && (
          <p className="text-red-500 text-sm mt-1">
            {errors.link.message?.toString()}
          </p>
        )}
      </div>

      {/* Additional Images */}
      <div>
        <label
          htmlFor="additionalImages"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Foto Tambahan
        </label>
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4">
          {additionalPreview.length > 0 ? (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                {additionalPreview.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt={`Additional preview ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeAdditionalImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <svg
                        className="w-3 h-3"
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
                ))}
              </div>
              <label className="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600"
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
                <span className="text-sm text-blue-600 font-medium">
                  Tambah Foto Lagi
                </span>
                <input
                  type="file"
                  id="additionalImages"
                  accept="image/*"
                  multiple
                  onChange={handleAdditionalChange}
                  className="hidden"
                />
              </label>
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
                Upload Foto Tambahan
              </span>
              <span className="text-sm text-slate-500">
                Drag & drop atau klik untuk memilih
              </span>
              <input
                type="file"
                id="additionalImages"
                accept="image/*"
                multiple
                onChange={handleAdditionalChange}
                className="hidden"
              />
            </label>
          )}
          {errors.imageAdditional && (
            <p className="text-red-500 text-sm mt-1">
              {errors.imageAdditional.message?.toString()}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors mt-6"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Menyimpan...
          </span>
        ) : (
          "Simpan Portofolio"
        )}
      </button>
    </form>
  );
}
