import { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import { NavbarItems } from "@/components/constant/constant";
import { NavbarItemType } from "@/components/constant/types";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const contextValue = useAppContext();
  const { colorTheme } = contextValue || {};
  const router = useRouter();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

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
        <div id="container-image">
          <button
            onClick={() => {
              router.push("/");
            }}
            type="button"
            className="cursor-pointer h-full"
          >
            <img src="/assets/logo/main-logo-neon.png" className="h-16" />
          </button>
        </div>
        <div className="flex justify-center gap-4 ">
          {NavbarItems?.map((value: NavbarItemType, index: number) => {
            return (
              <a
                href={value.url}
                className={`cursor-pointer ${
                  scrolled ? `text-[${colorTheme?.secondary}]` : `text-[${colorTheme?.fontColor}]`
                } font-bold`}
                key={index}
              >
                {value.label}
              </a>
            );
          })}
        </div>
      </div>
      <div
        className={`md:hidden max-w-full px-12 py-2 h-[80px] w-full flex-wrap fixed top-0 z-30`}
        style={{ background: colorTheme?.main }}
      >
        <div id="container-image" className="">
          <a href={"/"} type="button" className="cursor-pointer h-full">
            <img src="/assets/logo/main-logo-neon.png" className="h-16" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
