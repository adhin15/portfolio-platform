"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../../app/globals.css";
import Navbar from "@/components/components/Layout/Navbar/Navbar";
import Footer from "@/components/components/Layout/Footer/Footer";
import { AppContext, useAppContext } from "@/components/components/Layout/Context";
import { useEffect, useMemo, useState } from "react";
import { colorPalette3 } from "@/components/constant/constant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultTheme = { color: ["#0D1F2D", "#1d2e3d", "#0D6E6E", "#4a9d9c", "#FF3D3D", "#FFFFFF"] };
  const [state, setState] = useState<any>(defaultTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("theme")) {
        setState(JSON.parse(sessionStorage.getItem("theme")));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && state) {
      if (sessionStorage.getItem("theme") !== state) sessionStorage.setItem("theme", JSON.stringify(state));
    }
  }, [state]);

  const handleResetTheme = () => {
    setState({ color: colorPalette3 });
  };

  const colorTheme = useMemo(() => {
    return {
      fontColor: state?.color?.[5],
      background: state?.color?.[0],
      secondaryBg: state?.color?.[2],
      main: state?.color?.[1],
      secondary: state?.color?.[4],
      secondaryAccent: state?.color?.[3],
    };
  }, [state]);

  const value = {
    state,
    setState,
    handleResetTheme,
    colorTheme,
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      document.body.style.cssText = `--color: ${colorTheme?.fontColor};
      --background-color: ${colorTheme?.background};
      --secondaryBg: ${colorTheme?.secondaryBg};
      --main: ${colorTheme?.main};
      --secondary: ${colorTheme?.secondary}
      `;
    }
  }, []);
  return (
    <html lang="en">
      <body>
        <div
          style={{
            backgroundColor: colorTheme?.background,
            color: colorTheme?.fontColor,
          }}
        >
          <AppContext.Provider value={value}>
            <Navbar />
            <div className="min-h-[1200px] pt-[90px] md:px-12 px-4 md:pt-[80px] mb-20">{children}</div>
            <Footer />
          </AppContext.Provider>
        </div>
      </body>
    </html>
  );
}
