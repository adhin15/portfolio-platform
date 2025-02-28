import { Metadata, Viewport } from "next";

export { default } from "@/components/components/Layout";

export const viewport: Viewport = {
  maximumScale: 5.0,
};
export const metadata: Metadata = {
  title: "Adhin Alifarchan",
  description:
    "Welcome to my portfolio, where you can explore my work across private and formal projects. Dive into detailed case studies, project highlights, and ongoing creations. There's also an exciting feature I'm currently building that you won't want to miss!",
  icons: "https://adhin.vercel.app//assets/logo/main-logo-black.png",
  openGraph: {
    title: "Adhin - Portfolio",
    siteName: "Adhin - Portfolio",
    description:
      "Welcome to my portfolio, where you can explore my work across private and formal projects. Dive into detailed case studies, project highlights, and ongoing creations. There's also an exciting feature I'm currently building that you won't want to miss!",
    images: "https://adhin.vercel.app//assets/logo/website-thumbnail.png",
    type: "website",
    url: "https://adhin.vercel.app/",
  },
};
