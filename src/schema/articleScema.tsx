import { z } from "zod";
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const baseFields = {
  title: z.string().min(3, "Judul minimal 3 karakter").max(200, "Judul terlalu panjang"),
  category_id: z.number().int().positive("Kategori harus dipilih"),
  content: z.string().min(10, "Konten minimal 10 karakter"),
};

export const ArticleSchema = z.object({
  ...baseFields,
  image: z
      .any()
      .refine((files) => files?.length === 1, "Gambar wajib diunggah")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran file maksimal 2MB"
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Hanya format .jpg, .jpeg, .png dan .webp yang didukung"
      ),
});

export type ArticleType = z.infer<typeof ArticleSchema>;

export const ArticleEditSchema = z.object({
  ...baseFields,
  image: z
      .any()
      .optional()
      .refine((files) => {
        if (!files || files.length === 0) return true; 
        return files.length === 1; 
      }, "Gambar wajib diunggah")
      .refine(
        (files) => !files || files?.[0]?.size <= MAX_FILE_SIZE,
        `Ukuran file maksimal 5MB.`
      )
      .refine(
        (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Hanya format .jpg, .jpeg, .png dan .webp yang didukung."
      ),
});

export type ArticleEditType = z.infer<typeof ArticleEditSchema>;

export const ArticleAPISchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter"),
  category_id: z.number().int().positive("Role harus dipilih"),
  content: z.string().min(10, "Konten minimal 10 karakter"),

  // ✅ API receives File directly (not FileList)
  image: z
    .instanceof(File, { message: "Gambar wajib diunggah" })
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Ukuran file maksimal 2MB"
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Hanya format .jpg, .jpeg, .png dan .webp yang didukung"
    ),

});

export type ArticleAPISchemaType = z.infer<typeof ArticleAPISchema>;