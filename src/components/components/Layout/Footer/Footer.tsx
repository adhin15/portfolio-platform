import Image from "next/image";
import { useAppContext } from "../Context";

const Footer = () => {
  const contextValue = useAppContext();

  return (
    <div className="relative bottom-0 py-4">
      <p className="text-center text-xs opacity-50">
        <span className="mr-2">
          <Image
            src="/assets/images/keyboard.png"
            width={24}
            height={24}
            className="inline mb-0.5"
            alt=""
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span>Coding the Future, One Page at a Time</span>
      </p>
    </div>
  );
};

export default Footer;
