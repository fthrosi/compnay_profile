import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Jasa Pembuatan Website & Aplikasi | Solusi Teknologi Digital",
    template: "%s | Talenta Digital Solutions",
  },
  description:
    "Perusahaan penyedia jasa teknologi digital profesional meliputi pembuatan website, aplikasi web, sistem informasi, dan solusi IT untuk bisnis.",
  keywords: [
    "jasa pembuatan website",
    "web development",
    "jasa aplikasi web",
    "software house",
    "solusi IT",
    "website perusahaan",
  ],
  authors: [{ name: "Talenta Digital Solutions" }],
  creator: "Talenta Digital Solutions",
  metadataBase: new URL("https://www.talentadigis.com"),
  openGraph: {
    type: "website",
    title: "Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Solusi teknologi digital terpercaya untuk website, aplikasi web, dan sistem informasi bisnis.",
    url: "https://www.talentadigis.com",
    siteName: "Talenta Digital Solutions",
    images: [
      {
        url: "/images/logo-new.svg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website & Aplikasi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        <Toaster position="top-center" richColors />
        <main>{children}</main>
      </body>
    </html>
  );
}
