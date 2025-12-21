import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const URL_REGEX =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

const baseFields = {
  name: z.string().min(3, "Judul minimal 3 karakter"),
  category_id: z.number().int().positive("Kategori harus dipilih"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  techStack: z.array(z.string()).min(1, "Pilih minimal satu tech stack"),
  client_name: z.string().min(3, "Nama klien minimal 3 karakter"),
  link: z
    .string()
    .optional()
    .refine(
      (val) => !val || val === "" || URL_REGEX.test(val),
      { message: "Link harus berupa URL yang valid" }
    ),
  imageAdditional: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        return Array.from(files as FileList).every(
          (file: File) => file.size <= MAX_FILE_SIZE
        );
      },
      "Setiap file maksimal 2MB"
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        return Array.from(files as FileList).every(
          (file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type)
        );
      },
      "Hanya format .jpg, .jpeg, .png dan .webp yang didukung"
    ),
};



// ✅ Schema untuk Form (FileList)
export const PortfolioSchema = z.object({
  ...baseFields,
  thumbnail: z
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

export const EditPortfolioSchema = z.object({
  ...baseFields,
  thumbnail: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; 
        return files.length === 1; 
      },
      "Hanya 1 gambar yang diperbolehkan"
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        return files[0]?.size <= MAX_FILE_SIZE;
      },
      "Ukuran file maksimal 2MB"
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        return ACCEPTED_IMAGE_TYPES.includes(files[0]?.type);
      },
      "Hanya format .jpg, .jpeg, .png dan .webp yang didukung"
    ),
});

export type PortfolioSchemaType = z.infer<typeof PortfolioSchema>;
export type EditPortfolioSchemaType = z.infer<typeof EditPortfolioSchema>;

// ✅ Schema untuk API (File objects from FormData)
export const PortfolioAPISchema = z.object({
  name: z.string().min(3, "Judul minimal 3 karakter"),
  category_id: z.number().int().positive("Kategori harus dipilih"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  techStack: z.array(z.string()).min(1, "Pilih minimal satu tech stack"),
  client_name: z.string().min(3, "Nama klien minimal 3 karakter"),
  
  link: z
    .string()
    .optional()
    .refine(
      (val) => !val || val === "" || URL_REGEX.test(val),
      { message: "Link harus berupa URL yang valid" }
    ),

  // ✅ API receives File directly (not FileList)
  thumbnail: z
    .instanceof(File, { message: "Gambar wajib diunggah" })
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Ukuran file maksimal 2MB"
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Hanya format .jpg, .jpeg, .png dan .webp yang didukung"
    ),

  // ✅ API receives File[] (not FileList)
  imageAdditional: z
    .array(z.instanceof(File))
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        return files.every((file) => file.size <= MAX_FILE_SIZE);
      },
      "Setiap file maksimal 2MB"
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        return files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type));
      },
      "Hanya format .jpg, .jpeg, .png dan .webp yang didukung"
    ),
});

export type PortfolioAPISchemaType = z.infer<typeof PortfolioAPISchema>;
