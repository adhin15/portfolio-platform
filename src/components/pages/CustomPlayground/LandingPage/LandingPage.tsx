"use client";
import { useEffect, useMemo, useState } from "react";
import { BlockColors } from "../CustomPlayground.constant";
import { NavbarItemType } from "@/components/constant/types";
import Image from "next/image";
import ImageContainer from "@/components/shared/ImageContainer/ImageContainer";

const LandingPage = (props: any) => {
  const { colorList } = props;
  const defaultPallette = ["#0D1F2D", "#1d2e3d", "#0D6E6E", "#4a9d9c", "#FF3D3D", "#FFFFFF"];

  const defaultTheme = {
    color: colorList,
  };
  const [state, setState] = useState(defaultTheme);

  useEffect(() => {
    if (colorList) {
      setState({ color: colorList });
    } else {
      setState({ color: defaultPallette });
    }
  }, [colorList]);

  const colorTheme = useMemo(() => {
    return {
      fontColor: state?.color?.[5],
      background: state?.color?.[0],
      secondaryBg: state?.color?.[2],
      main: state?.color?.[1],
      accent: state?.color?.[4],
      secondaryAccent: state?.color?.[3],
    };
  }, [state]);

  const NavbarItems = ["Service", "Why Us", "Testimonial", "FAQ", "About"];

  return (
    <div
      className={`
          md:h-[1000px]
          relative 
          rounded-lg
          `}
      style={{
        color: colorTheme?.fontColor,
        background: colorTheme?.background,
        overflowY: "scroll",
      }}
    >
      <div className="w-full flex flex-wrap h-[36px] justify-start gap-4 items-center bg-[#8c8c8c] ps-4 rounded-t-lg absolute z-[1]">
        <div className="w-[16px] h-[16px] bg-[#ebebeb] rounded-full"></div>
        <div className="w-[16px] h-[16px] bg-[#ebebeb] rounded-full"></div>
        <div className="w-[16px] h-[16px] bg-[#ebebeb] rounded-full"></div>
      </div>

      <div className="flex flex-wrap relative h-full pt-[36px]">
        <div className="px-12 flex items-center justify-between w-full">
          <div className="flex gap-4">
            <button type="button" className="cursor-pointer h-full">
              <div className="relative h-16">
                <ImageContainer src="/assets/logo/main-logo-neon.png" height="100%" alt="" />
              </div>
            </button>
            <div className="hidden md:flex justify-center items-center gap-4 ">
              {NavbarItems?.map((value: string, index: number) => {
                return (
                  <span
                    key={index}
                    className={` font-bold`}
                    style={{
                      color: colorTheme?.fontColor,
                    }}
                  >
                    {value}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <button className="p-2 px-4 rounded" style={{ background: colorTheme?.accent }}>
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex flex-wrap relative p-12">
          <div className="md:w-1/2 p-2">
            <div
              className={`w-[10%] border-t`}
              style={{
                borderColor: colorTheme?.accent,
              }}
            ></div>
            <span
              style={{
                color: colorTheme?.accent,
              }}
            >
              Modern Business
            </span>
            <h1 className="text-5xl">We spend one-third of our life at work.</h1>
            <div className="flex justify-end">
              <div className="w-[40px] h-[40px]" style={{ background: colorTheme?.secondaryAccent }}></div>
            </div>
          </div>
          <div className="md:w-1/4 p-2">
            <div
              className="w-full h-full p-4 flex flex-col justify-center gap-4"
              style={{ background: colorTheme?.accent }}
            >
              <div className="w-[40px] h-[40px] relative">
                <Image src="/assets/images/avatar-blank.jpg" className="object-cover rounded-full" fill alt="" />
              </div>
              <span>"Your site is always my only go to option for fragrances"</span>
            </div>
          </div>
          <div className="md:w-1/4 p-2 flex flex-wrap">
            <BlockColors colorTheme={colorTheme} />
          </div>
          <div className="md:w-1/4 p-2 flex flex-wrap">
            <div className="relative">
              <ImageContainer src="/assets/images/circuit-board.jpg" height="100%" alt="" />
            </div>
          </div>
          <div className="md:w-1/4 p-2 flex flex-wrap">
            <div className="relative h-full w-full">
              <ImageContainer src="/assets/images/man-with-suit.jpg" alt="" />
            </div>
          </div>
          <div className="md:w-1/4 p-2 flex flex-wrap">
            <div
              className="w-full h-full flex justify-center items-center"
              style={{
                background: colorTheme?.secondaryAccent,
              }}
            >
              <h2 className="text-3xl">3.2x</h2>
              <span></span>
            </div>
          </div>
          <div className="md:w-1/4 p-2">
            <div
              className="w-1/3 h-1/3"
              style={{
                background: colorTheme?.accent,
              }}
            ></div>

            <div className="flex w-full h-1/3">
              <div className="w-1/3 h-full"></div>
              <div
                className="md:w-1/4 h-full"
                style={{
                  background: colorTheme?.accent,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="p-12 flex flex-wrap">
          <div className="p-4 w-full md:w-1/2 flex flex-col gap-4">
            <div>
              <div
                className={`w-[10%] border-t`}
                style={{
                  borderColor: colorTheme?.accent,
                }}
              ></div>
              <span
                style={{
                  color: colorTheme?.accent,
                }}
              >
                About Us
              </span>
            </div>
            <h2 className="text-2xl font-bold">We are at the forefront of technological innovation.</h2>
            <span>
              Our journey began cover a decade ago, driven by a passion for delivering cutting-edge solutions to
              business worldwide.
            </span>
            <div className="flex justify-start flex-wrap">
              <div className="w-1/2">
                <h2 className="text-2xl">15+</h2>
                <span>Years of Experience</span>
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl">5000+</h2>
                <span>Satisfied Clients</span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full md:w-1/2 flex flex-wrap items-end">
            <div className="h-1/3 w-1/6" style={{ background: colorTheme?.accent }}></div>
            <div className="w-5/6 h-full relative">
              <ImageContainer src="/assets/images/man-with-suit-2.jpg" height="100%" alt="" />
            </div>
            <div className="h-1/5 w-1/6" style={{ background: colorTheme?.secondaryAccent }}></div>
            <div className="h-1/5 md:w-1/4" style={{ background: colorTheme?.accent }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
