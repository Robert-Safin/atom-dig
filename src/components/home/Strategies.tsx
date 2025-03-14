import { useTheme } from "next-themes";
import H2 from "../typography/H2";
import Card from "./Card";
import { useEffect, useState } from "react";

const Strategies = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mx-auto max-w-[1920px] text-center">
      <div className="laptop:w-[400px] laptop:mb-[58px] desktop:mb-[72px] mx-auto mb-[48px] w-[238px]">
        <H2 text="Our Strategies and Philosophy" />
      </div>
      {isMounted && (
        <div className="tablet:grid-cols-2 desktop:grid-cols-3 tablet:px-[66px] laptop:px-[89px] desktop:px-[82px] tablet:space-y-[36px] laptop:space-y-[48px] desktop:space-y-[64px] tablet:gap-x-[24px] laptop:gap-x-[32px] desktop:gap-x-[28px] mx-auto grid grid-cols-1 place-items-center space-y-[24px] px-[34px]">
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
        </div>
      )}
    </div>
  );
};

export default Strategies;
