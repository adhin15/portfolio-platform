import { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import { NavbarItems } from "@/components/constant/constant";
import { NavbarItemType } from "@/components/constant/types";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ImageContainer from "@/components/shared/ImageContainer/ImageContainer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const contextValue = useAppContext();
  const { colorTheme } = contextValue || {};
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div
        className={`md:flex hidden items-center justify-between px-12 py-2 max-w-full h-[80px] w-full flex-wrap fixed top-0 transition ease-in delay-550 relative" z-30 ${
          scrolled ? "" : `bg-transparent`
        }`}
        id="container-navbar"
        style={{
          background: !scrolled ? "transparent" : colorTheme?.main,
        }}
      >
        <div id="container-image" className="h-full">
          <button
            onClick={() => {
              router.push("/");
            }}
            type="button"
            className="cursor-pointer h-full h-16 w-16 relative"
          >
            <ImageContainer src="/assets/logo/main-logo-white.png" alt="" />
          </button>
        </div>
        <div className="flex justify-center gap-4 ">
          {NavbarItems?.map((value: NavbarItemType, index: number) => {
            return (
              <div key={index}>
                {value?.type === "anchor" ? (
                  value?.page === pathname && (
                    <a
                      href={value.url}
                      className={`cursor-pointer ${
                        scrolled ? `text-[${colorTheme?.secondary}]` : `text-[${colorTheme?.fontColor}]`
                      } font-bold`}
                      key={index}
                    >
                      {value.label}
                    </a>
                  )
                ) : (
                  <button
                    onClick={() => {
                      router.push(value?.url);
                    }}
                    type="button"
                    className={`cursor-pointer ${
                      scrolled ? `text-[${colorTheme?.secondary}]` : `text-[${colorTheme?.fontColor}]`
                    } font-bold`}
                  >
                    {value?.label}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`md:hidden max-w-full px-4 md:px-12 py-2 h-[80px] w-full flex-wrap fixed top-0 z-30`}
        style={{ background: colorTheme?.main }}
      >
        <div id="container-image" className="h-full relative">
          <a href={"/"} type="button" className="cursor-pointer h-full block">
            <ImageContainer src="/assets/logo/main-logo-white.png" width="auto" height="100%" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
