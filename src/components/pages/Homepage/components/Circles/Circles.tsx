import { useAppContext } from "@/components/components/Layout/Context";
import React, { useState } from "react";

const Circles = () => {
  const contextValue = useAppContext();
  const { colorTheme } = contextValue;
  const [active, setActive] = useState(false);
  return (
    <div className="main-container" id="circle container">
      <div className={`logo-container ${active ? "active" : ""}`}>
        <div className="main-logo text-center" style={{ borderColor: colorTheme?.secondaryBg }}>
          <img
            src="./assets/logo/skill-logo.png"
            onClick={() => {
              setActive(!active);
            }}
            style={{ width: "100%" }}
          />
          <h3
            className={`text-2xl animate-up-down mt-4 ${active ? "hidden" : "block"}`}
            style={{
              color: colorTheme?.secondary,
            }}
          >
            Click Me!
          </h3>
        </div>
        <div className="item-logo-1" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/html-logo.png" style={{ width: "100%" }} />
        </div>
        <div className="item-logo-2" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/css-logo.png" style={{ width: "100%" }} />
        </div>
        <div className="item-logo-3" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/js-logo.png" style={{ width: "100%" }} />
        </div>
        <div className="item-logo-4" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/react-logo.png" style={{ width: "100%" }} />
        </div>
        <div className="item-logo-5" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/github-logo.png" style={{ width: "100%" }} />
        </div>
        <div className="item-logo-6" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/nextjs-logo.png" style={{ width: "100%" }} />
        </div>
        <div className="item-logo-7" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/typescript-logo.png" style={{ width: "100%" }} />
        </div>
        <div className="item-logo-8" style={{ borderColor: colorTheme?.secondary }}>
          <img src="./assets/logo/vscode-logo.png" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Circles;
