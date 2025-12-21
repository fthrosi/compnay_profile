"use client";

import { useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { teamFormSchema, type TeamFormData } from "@/schema/teamSchema";
import { toast } from "sonner";
import Modal from "../modal";
import type { Role } from "@/types/role";
import type { TeamMember } from "@/types/team.type";

interface TeamFormProps {
  teamMember: TeamMember;
  onClose: () => void;
  onSuccess: () => void;
}

export default function TeamEdit({ teamMember, onClose, onSuccess }: TeamFormProps) {
  const [preview, setPreview] = useState<string>(teamMember.foto || "");
  const [roles, setRoles] = useState<Role[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<TeamFormData>({
    resolver: zodResolver(teamFormSchema),
    defaultValues: {
      name: teamMember.name,
      role_id: teamMember.jabatanId,
    },
  });

  const getRoles = async () => {
    try {
      const response = await fetch("/api/role", {
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        setRoles(result.data);
      } else {
        toast.error("Gagal memuat data role");
        return [];
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat memuat data role");
      return [];
    }
  };
  useEffect(() => {
    getRoles();
  }, []);
  useEffect(() => {
    if (roles.length > 0 && teamMember.jabatanId) {
      setValue("role_id", teamMember.jabatanId);
    }
  }, [roles, teamMember.jabatanId, setValue]);
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", e.target.files as FileList);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = async (data: TeamFormData) => {
    try {
      // ✅ Buat FormData (Web API)
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("role_id", data.role_id.toString());
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      // ✅ Submit ke API
      const response = await fetch(`/api/team/${teamMember.id}`, {
        method: "PUT",
        body: formData, // Kirim FormData, bukan JSON
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        reset();
        setPreview("");
        onClose();
        onSuccess();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Terjadi kesalahan");
    }
  };
  return (
    <Modal title="Edit Anggota Team">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Nama <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Masukkan nama anggota"
            className="w-full px-4 py-2 border text-neutral-black border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Role Select */}
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Role <span className="text-red-500">*</span>
          </label>
          <select
            id="role"
            {...register("role_id", { valueAsNumber: true })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none cursor-pointer appearance-none bg-white text-neutral-black"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <p className="text-red-500 text-sm mt-1">
              {errors.role_id.message}
            </p>
          )}
        </div>

        {/* Photo Upload */}
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Foto Profil <span className="text-red-500">*</span>
          </label>

          {preview ? (
            <div className="relative mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-40 object-cover rounded-lg border-2 border-blue-200"
              />
              <button
                type="button"
                onClick={() => {
                  // ✅ Reset ke foto awal, bukan empty string
                  setPreview(teamMember.foto || "");
                  setValue("image", undefined as any);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <label
                htmlFor="photo"
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
                id="photo"
                onChange={handlePhotoChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 text-slate-400 mb-2"
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
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">Klik untuk upload</span> atau
                  drag & drop
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  PNG, JPG, WEBP atau GIF (Max 1MB)
                </p>
              </div>
              <input
                type="file"
                id="photo"
                onChange={handlePhotoChange}
                accept="image/*"
                className="hidden"
              />
            </label>
          )}
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">
              {errors.image.message?.toString()}
            </p>
          )}
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
            "Simpan"
          )}
        </button>
      </form>
    </Modal>
  );
}
