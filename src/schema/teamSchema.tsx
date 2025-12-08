import {z} from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const teamFormSchema = z.object({
    name: z.string().min(1, "Nama wajib diisi").max(100, "Nama terlalu panjang"),
    role_id: z.number().int().positive("Role harus dipilih"),
    image: z
      .any()
      .refine(
          (files) => !files || files?.length === 1,
          "Gambar wajib diunggah."
      )
      .refine(
        (files) => !files || files?.[0]?.size <= MAX_FILE_SIZE,
        `Ukuran file maksimal 5MB.`
      )
      .refine(
        (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Hanya format .jpg, .jpeg, .png dan .webp yang didukung."
      ),
});

export const teamApiSchema = z.object({
    name: z.string().min(1, "Nama wajib diisi").max(100, "Nama terlalu panjang"),
    role_id: z.number().int().positive("Role harus dipilih"),
    image: z.instanceof(File, { message: "File gambar wajib diunggah" })
      .refine(
        (file) => file.size <= MAX_FILE_SIZE,
        `Ukuran file maksimal 1MB.`
      )
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Hanya format .jpg, .jpeg, .png dan .webp yang didukung."
      ),
})

export type TeamFormData = z.infer<typeof teamFormSchema>;
export type TeamApiData = z.infer<typeof teamApiSchema>;