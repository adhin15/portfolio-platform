import { useEffect, useState } from "react";
import { colorPalette3 } from "../constant/constant";

const useThemeStorage = () => {
  const defaultTheme = { color: colorPalette3 };
  const [state, setState] = useState<any>(JSON.parse(sessionStorage.getItem("theme") || null) || defaultTheme);

  useEffect(() => {
    sessionStorage.setItem("theme", JSON.stringify(state || {}));
  }, [state]);

  const handleResetTheme = () => {
    setState({ color: colorPalette3 });
    window.location.reload();
  };

  return {
    state,
    setState,
    handleResetTheme,
  };
};

export default useThemeStorage;
