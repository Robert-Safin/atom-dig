"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="tablet:px-[24px] tablet:mt-[28px] laptop:px-[32px] laptop:mt-[36px] desktop:px-[42px] desktop:mt-[48px] mt-[18px] flex justify-between px-[12px]">
      {isMounted && resolvedTheme ? (
        <Image
          src={`/logo/${resolvedTheme}-logo.png`}
          width={400}
          height={300}
          alt="logo"
          className="tablet:w-[123px] tablet:h-[38px] laptop:w-[164px] laptop:h-[51px] desktop:w-[205px] desktop:h-[64px] h-[32px] w-[74px] object-cover"
        />
      ) : (
        <div className="tablet:w-[123px] tablet:h-[38px] laptop:w-[164px] laptop:h-[51px] desktop:w-[205px] desktop:h-[64px] h-[32px] w-[74px]" />
      )}

      <div className="bg-teal-burger laptop:hidden flex h-[32px] w-[48px] items-center justify-center rounded-[26px]">
        <Menu className="font-extrabold text-white" />
      </div>

      <div className="laptop:flex hidden space-x-[24px]">
        <button className="border-text cursor-pointer rounded-[26px] border-[2px] px-[32px] py-[8px]">
          <p>Contact Us</p>
        </button>

        <button className="border-text bg-text text-text-alt cursor-pointer rounded-[26px] border-[2px] px-[32px] py-[8px]">
          <p>Client Login</p>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
