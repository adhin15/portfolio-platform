import { useAppContext } from "@/components/components/Layout/Context";
import Button from "@/components/shared/Button";
import React from "react";
import { portfolioList } from "./Portfolio.constant";

const Portfolio = () => {
  const contextValue = useAppContext();
  const { colorTheme } = contextValue;
  return (
    <div id="portfolio-section" className="pt-16">
      <div className="container p-8 w-full flex flex-wrap">
        <h3 className="text-4xl w-full font-bold mb-6" style={{ color: colorTheme?.secondary }}>
          My Portfolio
        </h3>

        {/* -----------------Formal Projects----------------- */}
        <div className="flex flex-wrap justify-left mb-6">
          <h3 className="text-2xl w-full  font-bold mb-4">Formal Projects</h3>
          {/* -----------------card----------------- */}

          {portfolioList?.formal?.map((val, index) => {
            return (
              <div className="p-3 pl-0 max-w-[350px]" key={index}>
                <div
                  className="p-2 rounded-lg h-[300px] m-3 ml-0"
                  id="website-card"
                  style={{ background: colorTheme?.main }}
                >
                  <a href={val?.url} target="_blank" rel="noreferrer">
                    <img src={val?.imageUrl} />
                    <p className="text-sm text-center my-3" style={{ color: colorTheme?.fontColor }}>
                      {val?.url}
                    </p>
                    <div className="px-12 text-center">
                      <Button isFullWidth textSize={14}>
                        Visit
                      </Button>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* -----------------Private Projects----------------- */}
        <div className="flex flex-wrap justify-left">
          <h3 className="text-2xl w-full  font-bold mb-4">Private Projects</h3>
          {/* -----------------card----------------- */}
          {portfolioList?.private?.map((val, index) => {
            return (
              <div
                key={index}
                className="p-2 rounded-lg max-w-[350px] h-[300px] m-3 ml-0"
                id="website-card"
                style={{ background: colorTheme?.main }}
              >
                <a href={val?.url} target="_blank" rel="noreferrer">
                  <img src={val?.imageUrl} />
                  <p className="text-sm text-center my-3" style={{ color: colorTheme?.fontColor }}>
                    {val?.url}
                  </p>
                  <div className="px-4 text-center">
                    <Button isFullWidth textSize={14}>
                      Visit
                    </Button>
                  </div>
                </a>
              </div>
            );
          })}

          {/* -------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
