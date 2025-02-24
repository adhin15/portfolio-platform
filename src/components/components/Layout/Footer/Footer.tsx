import { FooterItems } from "@/components/constant/constant";
import { useAppContext } from "../Context";

const Footer = () => {
  const contextValue = useAppContext();
  const { colorTheme } = contextValue || {};
  return (
    <div className="relative bottom-0 py-4">
      <p className="text-center text-xs opacity-50">
        <span className="mr-2">
          <img src="./assets/images/keyboard.png" width={24} className="inline mb-0.5" />
        </span>
        <span>Coding the Future, One Page at a Time</span>
      </p>
    </div>
  );
};

export default Footer;
