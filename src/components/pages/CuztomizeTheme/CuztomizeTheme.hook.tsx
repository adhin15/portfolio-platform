import { useContext, useEffect, useState } from "react";
import { useAppContext } from "../../components/Layout/Context";
import { promptColor } from "@/components/services/api";

const useThemeSection = () => {
  const contextValue = useAppContext();
  const { state, setState, handleResetTheme, colorTheme } = contextValue;

  const [colorPallete, setColorPallete] = useState<any>([
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
  ]);

  const color1 = ["#fffefb", "#f5f4f1", "#d4eaf7", "#b6ccd8", "#00668c", "#1d1c1c"];
  const color2 = ["#0D1F2D", "#1d2e3d", "#0D6E6E", "#4a9d9c", "#FF3D3D", "#FFFFFF"];
  const color3 = ["#1A1A1A", "#373737", "#a64aff", "#00E5FF", "#00829b", "#fffefb"];

  const [selectedColor, setSelectedColor] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [colorList, setColorList] = useState(color1);
  const [template, setTemplate] = useState("dashboard");
  const [collection, setCollection] = useState<any>([color1, color2, color3]);

  const generatePrompt = () => {
    setIsloading(true);
    promptColor({
      text: keyword,
    }).then((res) => {
      const cleanedInput = res.replace(/'/g, '"').trim();
      setColorPallete(JSON.parse(cleanedInput));
      setIsloading(false);
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("color-collection")) {
        setCollection(JSON.parse(localStorage.getItem("color-collection")));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && collection) {
      if (localStorage.getItem("color-collection") !== collection)
        localStorage.setItem("color-collection", JSON.stringify(collection));
    }
  }, [collection]);

  const handleRemovePallete = (index: number) => {
    const updatedCollection = collection.filter((item, indexNUm) => indexNUm !== index);
    setCollection(updatedCollection);
  };

  const handleChangeColor = (e: any, index: number) => {
    const temp = colorPallete.map((val: any, i: number) => (i === index ? e : val));
    setColorPallete(temp);
  };

  const handleApplyasAppTheme = () => {
    setState({
      color: colorList,
    });
  };

  return {
    colorPallete,
    handleChangeColor,
    selectedColor,
    setSelectedColor,
    isLoading,
    handleResetTheme,
    colorList,
    setColorList,
    color1,
    color2,
    color3,
    generatePrompt,
    setKeyword,
    collection,
    setCollection,
    handleRemovePallete,
    handleApplyasAppTheme,
    template,
    setTemplate,
  };
};

export default useThemeSection;
