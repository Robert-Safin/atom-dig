"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import TextButton from "../typography/TextButton";

const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="tablet:px-[24px] laptop:px-[32px] laptop:mt-[36px] desktop:px-[42px] absolute top-0 left-1/2 mt-[18px] flex w-full max-w-[1920px] -translate-x-1/2 items-center justify-between px-[12px]">
      {isMounted && resolvedTheme ? (
        <Image
          src={`/logo/${resolvedTheme}-logo.svg`}
          width={400}
          height={300}
          alt="logo"
          className="tablet:h-[38px] laptop:h-[51px] desktop:h-[64px] h-[32px] w-auto object-cover"
        />
      ) : (
        <div className="tablet:w-[123px] tablet:h-[38px] laptop:w-[164px] laptop:h-[51px] desktop:w-[205px] desktop:h-[64px] h-[32px] w-[74px]" />
      )}

      <div className="bg-teal-burger laptop:hidden flex h-[32px] w-[48px] items-center justify-center rounded-[26px]">
        <Menu className="font-extrabold text-white" />
      </div>

      <div className="laptop:flex hidden space-x-[24px]">
        <button className="border-text h-[46px] w-[152px] cursor-pointer rounded-[26px] border-[2px]">
          <TextButton text="Contact Us" />
        </button>

        <button className="border-text bg-text text-text-alt h-[46px] w-[152px] cursor-pointer rounded-[26px] border-[2px]">
          <TextButton text="Client Login" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
