import { useEffect, useState } from "react";
import TextButton from "../typography/TextButton";
import TextHero from "../typography/TextHero";
import TextTP from "../typography/TextTP";
import { useTheme } from "next-themes";
import Image from "next/image";
import Blob from "../common/Blob";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="tablet:pb-[20px] laptop:pb-[26px] desktop:pb-[32px] tablet:px-[24px] tablet:pt-[100px] desktop:pt-[200px] laptop:px-[56px] desktop:px-[72px] tablet:h-[540px] laptop:h-[720px] desktop:h-screen relative z-0 mx-auto flex h-[630px] max-w-[1920px] flex-col justify-between px-[21px] pt-[82px] pb-[32px]">
      <div className="absolute top-0 left-0 -z-10 flex h-full w-full max-w-screen flex-col justify-between">
        <Blob
          className={
            "bg-teal relative top-[48px] -right-[24px] -z-10 h-[120px] w-[1200px] self-end"
          }
        />

        <Blob className={"bg-purple relative -z-10 h-[140px] w-[720px]"} />
      </div>

      <div className="absolute top-0 right-0 flex h-full w-full max-w-screen items-center justify-between">
        <Blob className={"bg-teal relative -z-10 h-[140px] w-[520px]"} />

        <Blob className={"bg-purple relative -z-10 h-[140px] w-[520px]"} />
      </div>

      <Image
        src={"/ghost.svg"}
        alt="background blocks"
        width={800}
        height={1000}
        className="tablet:w-[440px] laptop:w-[600px] desktop:-right-[72px] desktop:w-1/2 desktop:-bottom-[110px] tablet:-bottom-1/12 absolute -right-[80px] bottom-0 w-[310px] object-cover opacity-70"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
        }}
      />

      <div>
        <div className="tablet:w-[474px] laptop:w-[700px] desktop:w-[791px] laptop:mt-[80px] desktop:mt-0 w-full text-balance">
          <TextHero
            text="A Boutique Digital Asset Fund Specializing in Quantitative Trading
        Strategies"
          />
        </div>

        {isMounted && (
          <button
            className={`laptop:w-[196px] laptop:h-[56px] tablet:mt-[48px] laptop:mt-[64px] desktop:mt-[84px] relative z-10 mt-[34px] h-[42px] w-[146px] !cursor-pointer rounded-[26px] transition-all duration-700 ${resolvedTheme === "dark" ? "border-accent text-accent hover:bg-accent hover:text-text-alt border-[1px]" : "bg-accent border-accent hover:text-accent border-[1px] text-white hover:bg-[rgba(0,0,0,0)]"} `}
          >
            <TextButton invertText={false} text="Get Started" />
          </button>
        )}
      </div>

      <div className="tablet:items-end tablet:space-y-[10px] laptop:space-y-[20px] desktop:space-y-[24px] flex flex-col items-center space-y-[16px]">
        <TextTP text="OUR TRUSTED PARTNERS" />
        {isMounted && resolvedTheme ? (
          <div className="tablet:space-x-[32px] laptop:space-x-[42px] desktop:space-x-[52px] flex items-center space-x-[19px]">
            <Image
              src={`/partners/${resolvedTheme}/binance.png`}
              width={400}
              height={300}
              alt="binance logo"
              className="tablet:h-[20px] laptop:h-[27px] desktop:h-[33px] h-[13px] w-auto object-cover"
            />

            <Image
              src={`/partners/${resolvedTheme}/northern-trust.png`}
              width={400}
              height={300}
              alt="binance logo"
              className="tablet:h-[55px] laptop:h-[74px] desktop:h-[92px] h-[35px] w-auto object-cover"
            />
            <Image
              src={`/partners/${resolvedTheme}/nav.png`}
              width={400}
              height={300}
              alt="binance logo"
              className="tablet:h-[44px] laptop:h-[59px] desktop:h-[74px] h-[28px] w-auto object-cover"
            />
            <Image
              src={`/partners/${resolvedTheme}/bybit.png`}
              width={400}
              height={300}
              alt="binance logo"
              className="tablet:h-[25px] laptop:h-[33px] desktop:h-[42px] h-[16px] w-auto object-cover"
            />
            <Image
              src={`/partners/${resolvedTheme}/kraken.png`}
              width={400}
              height={300}
              alt="binance logo"
              className="tablet:h-[25px] laptop:h-[33px] desktop:h-[42px] h-[16px] w-auto object-cover"
            />
          </div>
        ) : (
          <div className="flex h-[40px]" />
        )}
      </div>
    </div>
  );
};

export default Hero;
