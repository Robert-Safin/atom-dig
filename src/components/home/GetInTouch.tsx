import { useTheme } from "next-themes";
import H1 from "../typography/H1";
import H4 from "../typography/H4";
import TextButton from "../typography/TextButton";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Blob from "../common/Blob";

const GetInTouch = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted && (
        <>
          <div
            className={`desktop:max-w-[1260px] laptop:max-w-[840px] tablet:max-w-[630px] tablet:px-[130px] laptop:px-[220px] desktop:px-[400px] desktop:py-[134px] tablet:mt-[82px] laptop:mt-[131px] desktop:mt-[164px] tablet:mb-[60px] desktop:mb-[76px] relative mx-auto mt-[72px] mb-[80px] max-w-[304px] rounded-[36px] border-[1px] border-teal-400/10 px-[36px] py-[96px] ${resolvedTheme === "dark" ? "bg-[rgba(20,26,36,0.5)]" : "bg-[rgba(187,204,214,0.5)]"} `}
          >
            <Blob className="bg-blue desktop:opacity-50 absolute right-1/12 bottom-0 -z-10 h-[202px] w-[285px]" />
            <a href="mailto:info@atomic-digital.io">
              <H1 text="Get in Touch" />
            </a>
            <div className="tablet:mb-[46px] laptop:mb-[64px] desktop:mb-[70px] mt-[16px] mb-[72px] text-center">
              <H4 text="Send us an email or reach out to us on social media" />
            </div>
            <div className="flex justify-center">
              <button
                className={`laptop:w-[196px] laptop:h-[56px] relative z-10 h-[42px] w-[146px] !cursor-pointer rounded-[26px] transition-all duration-700 ${resolvedTheme === "dark" ? "border-accent text-accent hover:bg-accent hover:text-text-alt border-[1px]" : "bg-accent border-accent hover:text-accent border-[1px] text-white hover:bg-[rgba(0,0,0,0)]"} `}
              >
                <TextButton invertText={false} text="Contact Us" />
              </button>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default GetInTouch;
