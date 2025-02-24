import { Metadata, Viewport } from "next";

export { default } from "@/components/components/Layout";

export const viewport: Viewport = {
  maximumScale: 1.0,
  userScalable: false,
};
export const metadata: Metadata = {
  title: "Adhin Alifarchan - Movie Database",
  description:
    "Welcome to my portfolio, where you can explore my work across private and formal projects. Dive into detailed case studies, project highlights, and ongoing creations. There's also an exciting feature I'm currently building that you won't want to miss!",
  icons: "https://mo-flixx.vercel.app/assets/logo/main-logo-black.png",
  openGraph: {
    title: "MoFlixx - Movie Database",
    siteName: "MoFlixx - Movie Database",
    description:
      "Welcome to MoFlixx, explore information about movies and TV shows. You can browse through various titles, details like  as release dates, genres, and synopses, and watch trailers.",
    images: "https://mo-flixx.vercel.app/assets/logo/website-thumbnail.png",
    type: "website",
    url: "https://mo-flixx.vercel.app",
  },
};
