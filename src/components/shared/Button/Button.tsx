"use client";
import { useAppContext } from "../../components/Layout/Context";
import Loader from "../Loader";
import { ButtonProps } from "./type";

const Button = ({
  className = "",
  children = "",
  color = "primary",
  disabled = false,
  endIcon = "",
  startIcon = "",
  isFullWidth = false,
  isLoading = false,
  onClick = () => {},
  style = {},
  textSize = "14px",
  textWeight = 400,
  textVariant = "button",
  variant = "regular",
  textColor = "#fff",
  type = "",
  ...rest
}: ButtonProps) => {
  let bgcolor;
  const contextValue = useAppContext();
  const { state, setState, handleResetTheme, colorTheme } = contextValue || {};
  switch (color) {
    case "primary":
      bgcolor = colorTheme?.secondaryAccent;
  }

  return (
    <div className={`flex h-full ${isFullWidth ? "w-full" : "w-fit"} `}>
      <button
        className={`
          ${className}
          px-6 py-2 rounded-lg font-semibold h-fit w-full flex flex-wrap justify-center items-center gap-2
          active:opacity-100 hover:opacity-80 transition ease-in-out delay-50
                ${
                  variant === "regular"
                    ? `bg-[${bgcolor}] text-[${colorTheme?.fontColor}]`
                    : variant === "outlined"
                    ? `bg-transparent border-solid border-2 border-[${colorTheme?.fontColor}] text-[${colorTheme?.fontColor}]`
                    : variant === "text"
                    ? `bg-transparent`
                    : variant === "neon"
                    ? "box b"
                    : ``
                } `}
        style={
          variant === "neon"
            ? {
                background: `linear-gradient(${colorTheme?.main}, ${colorTheme?.main}) padding-box, conic-gradient(from var(--border-angle), transparent 0%, ${colorTheme?.secondary}) border-box`,
                fontSize: textSize,
                minHeight: "38px",
                ...style,
              }
            : variant === "regular"
            ? {
                background: bgcolor,
                color: colorTheme?.fontColor,
                fontSize: textSize,
              }
            : variant === "outlined"
            ? {
                background: "transparent",
                border: `solid 1px ${colorTheme?.fontColor}`,
                color: colorTheme?.fontColor,
              }
            : variant === "text"
            ? {
                background: "transparent",
              }
            : {
                fontSize: textSize,
                minHeight: "38px",
                ...style,
              }
        }
        onClick={onClick}
        {...rest}
      >
        {isLoading ? <Loader size={textSize} /> : children}
      </button>
    </div>
  );
};

export default Button;
