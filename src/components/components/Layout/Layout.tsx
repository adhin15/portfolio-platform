"use client";
import "../../../app/globals.css";
import Navbar from "@/components/components/Layout/Navbar/Navbar";
import Footer from "@/components/components/Layout/Footer/Footer";
import { AppContext } from "@/components/components/Layout/Context";
import { useMemo, useState } from "react";
import { colorPalette3 } from "@/components/constant/constant";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const defaultTheme = { color: ["#0D1F2D", "#1d2e3d", "#0D6E6E", "#4a9d9c", "#FF3D3D", "#FFFFFF"] };
  const [state, setState] = useState<any>(defaultTheme);

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
