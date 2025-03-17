import { useTheme } from "next-themes";
import H2 from "../typography/H2";
import Card from "./Card";
import { useEffect, useState } from "react";
import Blob from "../common/Blob";

const Strategies = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mx-auto max-w-[1920px] text-center">
      <div className="laptop:w-[400px] laptop:mb-[58px] desktop:mb-[72px] relative mx-auto mb-[48px] w-[238px]">
        <Blob
          className={
            "bg-purple absolute top-0 left-1/2 h-[202px] w-[285px] -translate-x-1/2"
          }
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
          <Blob
            className={
              "bg-teal absolute -bottom-1/4 left-0 h-[202px] w-[285px]"
            }
          />

          <Blob
            className={
              "bg-teal absolute top-0 right-0 h-[202px] w-[285px] opacity-50"
            }
          />
        </div>
      )}
    </div>
  );
};

export default Strategies;
