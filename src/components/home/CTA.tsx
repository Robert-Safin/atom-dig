import { useTheme } from "next-themes";
import { BorderBeam } from "../magicui/border-beam";
import TextBubble from "../typography/BubbleText";
import H1 from "../typography/H1";
import { useEffect, useState } from "react";
import Text from "../typography/Text";

const CTA = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="border-text-stroke tablet:my-[96px] laptop:my-[147px] desktop:mt-[168px] my-[86px] w-full border-y-[1px]">
      <div className="flex w-full items-center justify-center px-12">
        <div className="border-text-stroke relative border-x-[1px]">
          <div className="laptop:-top-[10px] laptop:-left-[10px] border-ring bg-background tablet:h-[9px] tablet:w-[9px] laptop:h-[12px] laptop:w-[12px] desktop:w-[17px] desktop:h-[17px] absolute -top-[4px] -left-[4px] h-[7px] w-[7px] rounded-full border-[1px]" />
          <div className="laptop:-top-[10px] laptop:-right-[10px] border-ring bg-background tablet:h-[9px] tablet:w-[9px] laptop:h-[12px] laptop:w-[12px] desktop:w-[17px] desktop:h-[17px] absolute -top-[4px] -right-[4px] h-[7px] w-[7px] rounded-full border-[1px]" />
          <div className="laptop:-right-[10px] laptop:-bottom-[10px] border-ring bg-background tablet:h-[9px] tablet:w-[9px] laptop:h-[12px] laptop:w-[12px] desktop:w-[17px] desktop:h-[17px] absolute -right-[4px] -bottom-[4px] h-[7px] w-[7px] rounded-full border-[1px]" />
          <div className="laptop:-bottom-[10px] laptop:-left-[10px] border-ring bg-background tablet:h-[9px] tablet:w-[9px] laptop:h-[12px] laptop:w-[12px] desktop:w-[17px] desktop:h-[17px] absolute -bottom-[4px] -left-[4px] h-[7px] w-[7px] rounded-full border-[1px]" />
          <div className="cta-shadow-dm border-text-stroke-shine bg-background-opaque tablet:pt-[48px] tablet:px-[58px] laptop:pt-[64px] laptop:px-[78px] desktop:pt-[78px] desktop:px-[135px] tablet:space-y-[28px] laptop:space-y-[24px] desktop:space-y-[42px] tablet:pb-[48px] laptop:pb-[64px] relative flex h-full w-full max-w-[1420px] flex-col space-y-[24px] overflow-hidden rounded-[64px] border-[1px] px-[17px] pt-[40px] pb-[24px]">
            {isMounted && (
              <div
                className={
                  theme === "dark"
                    ? `bg-text-stroke border-ring mx-auto w-fit rounded-[26px] border-[2px] px-[16px] py-[8px] text-center`
                    : `border-ring mx-auto w-fit rounded-[26px] border-[2px] px-[18px] py-[8px] text-center`
                }
              >
                <TextBubble text="Low-Risk, High-Precision" />
              </div>
            )}

            <H1 text="Data-driven strategies designed to outperform traditional markets in a fast-evolving crypto landscape" />

            <div className="tablet:w-[500px] laptop:w-[650px] desktop:w-[790px] mx-auto w-[190px] text-center text-pretty">
              <Text text="Atomic Digital is a cutting-edge hedge fund specializing in quantitative trading strategies for digital assets. In a market known for extreme volatility, we focus on delivering stable, low-risk returns while capitalizing on the inefficiencies of this emerging space. " />
            </div>

            <BorderBeam
              className="via-ring-glow from-transparent to-transparent"
              duration={4}
              size={400}
              transition={{
                type: "spring",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
