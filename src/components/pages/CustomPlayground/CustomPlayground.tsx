"use client";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRightIcon,
  ChartComponent,
  ChartDownIcon,
  ChartIcon,
  ChartUpIcon,
  LogoutIcon,
  PersonGearIcon,
  PersonLinesIcon,
  SendIcon,
  WalletIcon,
} from "./CustomPlayground.constant";
import Image from "next/image";

const CustomPlayground = (props: any) => {
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

  return (
    <div
      className={`
        md:h-[800px]
        relative 
        rounded-lg
        `}
      style={{
        color: colorTheme?.fontColor,
        background: colorTheme?.background,
        overflowY: "scroll",
      }}
    >
      {/* DESKTOP NAVBAR */}
      <div className="w-full flex flex-wrap h-[36px] justify-start gap-4 items-center bg-[#8c8c8c] ps-4 rounded-t-lg absolute z-[1]">
        <div className="w-[16px] h-[16px] bg-[#ebebeb] rounded-full"></div>
        <div className="w-[16px] h-[16px] bg-[#ebebeb] rounded-full"></div>
        <div className="w-[16px] h-[16px] bg-[#ebebeb] rounded-full"></div>
      </div>
      <div className="flex flex-wrap relative h-full pt-[36px]">
        <div className="hidden md:block md:w-[20%] border-r-[2px] h-full relative p-12">
          <div className="flex flex-col items-center h-full">
            <div className="text-center">
              <div className=" w-[80px] h-[80px] relative">
                <Image src="/assets/images/avatar-blank.jpg" fill className="rounded-full object-cover" alt="" />
              </div>
              <h4 className="text-xl font-bold">John Doe</h4>
              <span className={`text-md`}>Designer</span>
            </div>

            <div className="flex flex-wrap flex-col mt-12 gap-8 h-full">
              <div className="flex gap-5 items-center">
                <div className={`p-2 rounded-md`} style={{ background: colorTheme?.secondaryBg }}>
                  <WalletIcon />
                </div>
                <span className="font-bold text-sm">Wallet</span>
              </div>

              <div className="flex gap-5 items-center">
                <div className={`p-2 rounded-md`} style={{ background: colorTheme?.main }}>
                  <ChartIcon />
                </div>
                <span className="font-bold text-sm">Portfolio</span>
              </div>

              <div className="flex gap-5 items-center">
                <div className={`p-2 rounded-md`} style={{ background: colorTheme?.main }}>
                  <PersonGearIcon />
                </div>

                <span className="font-bold text-sm">Projects</span>
              </div>

              <div className="flex gap-5 items-center">
                <div className={`p-2 rounded-md`} style={{ background: colorTheme?.main }}>
                  <SendIcon />
                </div>

                <span className="font-bold text-sm">Transfer</span>
              </div>

              <div className="flex flex-wrap gap-5 items-center mt-auto">
                <div className="p-2">
                  <LogoutIcon />
                </div>

                <span className="font-bold text-sm">Logout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[80%] h-full relative p-4 md:p-12 flex flex-col gap-4">
          <div className={`w-fit p-2 px-5 text-center px-4 rounded-full`} style={{ background: colorTheme?.main }}>
            <span className={`text-sm`}>Open a deposit and get a 1% instant bonus</span>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-start gap-4">
            <div className="flex flex-col gap-4 w-full md:w-[50%]">
              <div
                className={`px-6 py-10 rounded-lg`}
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorTheme?.secondaryBg} , ${colorTheme?.secondaryAccent})`,
                }}
              >
                <h4 className="text-sm lg:text-lg">Total Balance</h4>
                <div className="flex gap-4 items-end">
                  <span>$</span>
                  <span className="text-xl lg:text-3xl">439,177</span>
                </div>
              </div>

              <div className={`px-6 py-10 rounded-lg flex flex-col gap-3`} style={{ background: colorTheme?.main }}>
                <h4 className="text-lg">Income</h4>
                <ul className="flex flex-col gap-3 relative">
                  <div className="flex w-full">
                    <div className="flex gap-4 justify-between w-full">
                      <div className="flex gap-4">
                        <div className={`p-3 rounded-md h-fit w-fit`} style={{ background: colorTheme?.secondaryBg }}>
                          <PersonLinesIcon />
                        </div>
                        <div className="flex flex-col">
                          <span>Kriti Sharma</span>
                          <span className="text-[10px] lg:text-xs">2 minutes ago</span>
                        </div>
                      </div>
                      <div className="flex text-center items-center justify-end md:justify-end">
                        <span>+$1000</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full">
                    <div className="flex gap-4 justify-between w-full">
                      <div className="flex gap-4">
                        <div className={`p-3 rounded-md h-fit w-fit`} style={{ background: colorTheme?.secondaryBg }}>
                          <PersonLinesIcon />
                        </div>
                        <div className="flex flex-col">
                          <span>James Hudson </span>
                          <span className="text-[10px] lg:text-xs">4 day ago</span>
                        </div>
                      </div>
                      <div className="flex text-center items-center justify-end md:justify-end">
                        <span>+$2500 </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full">
                    <div className="flex gap-4 justify-between w-full">
                      <div className="flex gap-4">
                        <div className={`p-3 rounded-md h-fit w-fit`} style={{ background: colorTheme?.secondaryBg }}>
                          <PersonLinesIcon />
                        </div>
                        <div className="flex flex-col">
                          <span>Jackie</span>
                          <span className="text-[10px] lg:text-xs">1 week ago </span>
                        </div>
                      </div>
                      <div className="flex text-center items-center justify-end md:justify-end">
                        <span>+$6900</span>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-[36%]">
              <div className="h-[70%] rounded-lg" style={{ background: colorTheme.main }}>
                <ChartComponent colorTheme={colorTheme} />
              </div>
              <div className={`rounded-lg px-6 py-8 flex items-center`} style={{ background: colorTheme?.main }}>
                <div className="flex flex-wrap h-full justify-center gap-4 md:gap-0 md:justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-xs">Income</p>
                      <span>$3500</span>
                    </div>
                    <div className={`rounded-full p-2`} style={{ background: colorTheme?.background }}>
                      <ChartUpIcon />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-xs">Spendings</p>
                      <span>$937</span>
                    </div>
                    <div className={`rounded-full p-2`} style={{ background: colorTheme?.background }}>
                      <ChartDownIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`p-4 w-full md:w-[88%] rounded-lg py-4 px-4 flex flex-wrap justify-center gap-2`}
            style={{ background: colorTheme?.main }}
          >
            <div className="flex flex-col justify-center">
              <p className="font-bold">Investments</p>
              <p className="text-sm">Change since last login</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div
                className={`p-4 flex flex-col text-xs gap-3 rounded-lg text-center`}
                style={{ background: colorTheme?.background }}
              >
                <div className={`rounded-full`} style={{ background: colorTheme?.secondaryBg }}>
                  <span className="p-2">APPL</span>
                </div>
                <div>
                  <span>Apple Inc</span>
                </div>
                <div>
                  <span className="text-lg">+3%</span>
                </div>
              </div>

              <div
                className={`p-4 flex flex-col text-xs gap-3 rounded-lg text-center`}
                style={{ background: colorTheme?.background }}
              >
                <div className={`rounded-full`} style={{ background: colorTheme?.secondaryBg }}>
                  <span className="p-2">APPL</span>
                </div>
                <div>
                  <span>Apple Inc</span>
                </div>
                <div>
                  <span className="text-lg">+3%</span>
                </div>
              </div>

              <div
                className={`p-4 flex flex-col text-xs gap-3 rounded-lg text-center`}
                style={{ background: colorTheme?.background }}
              >
                <div className={`rounded-full`} style={{ background: colorTheme?.secondaryBg }}>
                  <span className="p-2">APPL</span>
                </div>
                <div>
                  <span>Apple Inc</span>
                </div>
                <div>
                  <span className="text-lg">+3%</span>
                </div>
              </div>

              <div
                className={`p-4 flex flex-col text-xs gap-2 rounded-lg text-center justify-center cursor-pointer`}
                style={{ background: colorTheme?.secondaryBg }}
              >
                <span>View All</span>
                <div className={`h-fit w-fit rounded-full`} style={{ background: colorTheme?.background }}>
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPlayground;
