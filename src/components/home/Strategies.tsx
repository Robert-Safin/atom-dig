import { useTheme } from "next-themes";
import H2 from "../typography/H2";
import Card from "./Card";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Strategies = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mx-auto max-w-[1920px] text-center">
      <div className="laptop:w-[400px] laptop:mb-[58px] desktop:mb-[72px] relative mx-auto mb-[48px] w-[238px]">
        <div
          className="bg-purple absolute top-0 left-1/2 h-[202px] w-[285px] -translate-x-1/2 blur-[200px]"
          style={{
            willChange: "filter",
            borderRadius: "50% 50%",
          }}
        />
        <H2 text="Our Strategies and Philosophy" />
      </div>
      {isMounted && (
        <div className="tablet:grid-cols-2 desktop:grid-cols-3 tablet:px-[66px] laptop:px-[89px] desktop:px-[82px] tablet:gap-x-[24px] laptop:gap-x-[32px] tablet:gap-y-[36px] laptop:gap-y-[48px] desktop:gap-y-[64px] desktop:gap-x-[28px] desktop:max-w-[1520px] laptop:max-w-[1050px] tablet:max-w-[800px] relative mx-auto grid grid-cols-1 place-items-center gap-y-[24px] px-[34px]">
          <Card
            img={`/strategy/${resolvedTheme}/Active.png`}
            title="Active systematic trend"
            text="Long short directional strategies to take advantage of strong trending crypto markets"
          />
          <Card
            img={`/strategy/${resolvedTheme}/Delta-Neutral.png`}
            title="Active systematic trend"
            text="Long short directional strategies to take advantage of strong trending crypto markets"
          />
          <Card
            img={`/strategy/${resolvedTheme}/Diversified.png`}
            title="Active systematic trend"
            text="Long short directional strategies to take advantage of strong trending crypto markets"
          />
          <Card
            img={`/strategy/${resolvedTheme}/Automation.png`}
            title="Active systematic trend"
            text="Long short directional strategies to take advantage of strong trending crypto markets"
          />
          <Card
            img={`/strategy/${resolvedTheme}/Risk-Control.png`}
            title="Active systematic trend"
            text="Long short directional strategies to take advantage of strong trending crypto markets"
          />
          <Card
            img={`/strategy/${resolvedTheme}/Transparency.png`}
            title="Active systematic trend"
            text="Long short directional strategies to take advantage of strong trending crypto markets"
          />

          <motion.div
            className="bg-teal absolute -bottom-1/4 left-0 h-[202px] w-[285px]"
            initial={{ scale: 1, rotate: 0, filter: "blur(200px)" }}
            style={{
              willChange: "filter",
            }}
          />
          <div
            className="bg-teal absolute top-0 right-0 h-[202px] w-[285px] opacity-50 blur-[200px]"
            style={{
              willChange: "filter",
              borderRadius: "50% 50%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Strategies;
