"use client";
import useThemeSection from "./CuztomizeTheme.hook";
import Button from "../../shared/Button";
import CustomPlayground from "../CustomPlayground/CustomPlayground";
import { useAppContext } from "@/components/components/Layout/Context";
import LandingPage from "../CustomPlayground/LandingPage/LandingPage";

const CuztomizeTheme = () => {
  const contextValue = useAppContext();
  const { colorTheme } = contextValue || {};
  const {
    colorPallete,
    handleChangeColor,
    isLoading,
    colorList,
    setColorList,
    generatePrompt,
    setKeyword,
    collection,
    setCollection,
    handleRemovePallete,
    handleApplyasAppTheme,
    template,
    setTemplate,
  } = useThemeSection();

  const renderTemplate = (value) => {
    switch (value) {
      case "dashboard":
        return <CustomPlayground colorList={colorList} />;
      case "landingPage":
        return <LandingPage colorList={colorList} />;
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mt-4 mb-2">The Playground</h1>
      <div
        className={`w-[10%] border-t-[2px]`}
        style={{
          borderColor: colorTheme?.secondary,
          // borderTop: "2px",
        }}
      ></div>
      <div className="md:min-h-[100vh] h-full w-full flex flex-wrap mt-8">
        <div className="w-full md:w-1/3 p-4">
          <div className="flex mb-4 gap-4 md:flex-wrap">
            <div className="w-1/2 flex-col gap-4">
              <h3 className="font-bold text-xl">Choose Color</h3>
              <div className="flex flex-col gap-2">
                {collection?.map((val: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex w-fit justify-between items-center p-2 gap-2 cursor-pointer "
                      onClick={() => {
                        setColorList(collection[index]);
                      }}
                      style={{
                        background: val === colorList ? "#e6e3e3" : "#5e5d5d",
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemovePallete(index);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                      <div className="flex ">
                        {val?.map((value: any, indexNum: number) => {
                          return (
                            <div key={indexNum} className={`w-[16px] h-[16px]`} style={{ background: value }}></div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <Button className="mt-6 text-xs p-2 py-3" onClick={handleApplyasAppTheme}>
                  Apply Theme
                </Button>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h3 className="font-bold text-xl">Choose Template</h3>
              <div className="w-1/2 flex-col gap-4">
                <select
                  className="p-2 rounded-lg cursor-pointer"
                  style={{
                    background: colorTheme?.main,
                  }}
                  onChange={(e) => {
                    setTemplate(e.target.value);
                  }}
                  value={template}
                >
                  <option value="" disabled>
                    Choose One
                  </option>
                  <option value="dashboard">Dashboard</option>
                  <option value="landingPage">Landing Page</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 ps-2">
          <div className="p-2 relative w-[120%] origin-[0_0]" style={{ scale: 0.7 }}>
            {renderTemplate(template)}
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
          <h2 className="text-2xl font-bold gradient-fornt w-full text-center">
            Generate Your Own Color Pallette Using AI
          </h2>
          <h3 className="text-xl font-bold w-full text-center">
            Powered by <span className="blinking-font">Gemini</span>
          </h3>
          <input
            type="text"
            className="p-2 rounded text-[#121212] w-[30%]"
            placeholder="Input a keyword"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />

          <Button isLoading={isLoading} onClick={generatePrompt}>
            Generate Scheme
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap flex-col items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {colorPallete?.map((val: any, index: number) => {
            return (
              <div className="flex flex-wrap w-[160px] items-start flex-col gap-2" key={index}>
                <div className={`w-full h-[160px]`}>
                  <input
                    className="w-full h-full cursor-pointer"
                    type="color"
                    id="favcolor"
                    value={val}
                    onChange={(e) => {
                      handleChangeColor(e.target.value, index);
                    }}
                  />
                </div>
                <div className="px-4 w-full flex border-[1px] border-solid rounded-lg bg-[#121212]">
                  <span className="">#</span>
                  <input
                    className="w-full w-full text-[#fff] border-[0px] focus:outline-0 bg-[#121212]"
                    type="text"
                    onChange={(e) => {
                      handleChangeColor("#" + e.target.value.replace("#", ""), index);
                    }}
                    value={val.replace("#", "")}
                  />
                </div>
                <div className="w-full">
                  <p className={`text-center w-full text-[#fff] px-2 text-xs`}>
                    {index === 0 && "Main Background Color"}
                    {index === 1 && "Container Background Color"}
                    {index === 2 && "Secondary Background Color"}
                    {index === 3 && "Button Background Color"}
                    {index === 4 && "Accent Color"}
                    {index === 5 && "Font Color"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
          <Button
            onClick={() => {
              setCollection((prev) => [...prev, colorPallete]);
              setColorList(colorPallete);
              window.scrollTo(0, 0);
            }}
          >
            Assign Collection
          </Button>
        </div>
      </div>
    </>
  );
};

export default CuztomizeTheme;
