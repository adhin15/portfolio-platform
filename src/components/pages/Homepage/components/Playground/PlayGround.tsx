import { useAppContext } from "@/components/components/Layout/Context";
import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";

const PlayGround = () => {
  const contextValue = useAppContext();
  const { colorTheme } = contextValue;
  const router = useRouter();

  return (
    <div id="playground-section">
      <div className="py-8 w-full flex flex-wrap ">
        <h3
          className="text-3xl w-full font-bold"
          style={{
            color: colorTheme?.fontColor,
          }}
        >
          The Playground
        </h3>

        <div className="lg:w-2/3 w-full flex items-center">
          <div className=" p-4">
            <p className="text-[20px]">
              Discover our color palette feature! You can experiment with various color palettes on a template or try
              them out live. Powered by Gemini AI, the tool allows you to generate unique color palettes based on just a
              few keywords, matching the vibe you're after. To dive deeper into the experience, click the button below
              to head to the full page.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 w-full text-center p-4 ">
          <div className="">
            <img src="./assets/images/ai-development.png" className="h-[280px] m-auto object-cover" alt="" />
          </div>
        </div>
        <div>
          <Button
            textSize={"12px"}
            style={{
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            variant="neon"
            onClick={() => {
              router.push("/cuztomize-theme");
            }}
          >
            <span>Explore Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
