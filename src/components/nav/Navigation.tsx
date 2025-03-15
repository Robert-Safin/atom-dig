"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import TextButton from "../typography/TextButton";

const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="z-0">
      <div className="tablet:px-[24px] laptop:px-[32px] laptop:mt-[36px] desktop:px-[42px] absolute top-0 left-1/2 z-50 mt-[18px] flex w-full max-w-[1920px] -translate-x-1/2 items-center justify-between px-[12px]">
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

        <div
          className="bg-teal-burger laptop:hidden flex h-[32px] w-[48px] items-center justify-center rounded-[26px]"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="font-extrabold text-white" />
        </div>

        <div className="laptop:flex hidden space-x-[24px]">
          <button className="border-text h-[46px] w-[152px] cursor-pointer rounded-[26px] border-[2px]">
            <a href="mailto:info@atomic-digital.io">
              <TextButton text="Contact Us" invertText={false} />
            </a>
          </button>

          <button className="border-text bg-text text-text-alt h-[46px] w-[152px] cursor-pointer rounded-[26px] border-[2px]">
            <a
              href="https://portal.navfundservices.com/navportalcore/login"
              target="_blank"
            >
              <TextButton text="Client Login" invertText={false} />
            </a>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-text-alt tablet:pt-[24px] tablet:pr-[24px] tablet:pl-[34px] laptop:hidden fixed top-0 right-0 z-50 flex h-screen w-[243px] flex-col pt-[12px] pr-[12px] pl-[26px]">
          <X
            onClick={() => setIsOpen(false)}
            className="tablet:w-[34px] tablet:h-[34px] h-[24px] w-[24px] self-end"
          />
          <div className="tablet:space-y-[32px] tablet:mt-[43px] mt-[24px] flex flex-col space-y-[24px]">
            <a href="mailto:info@atomic-digital.io">
              <TextButton text="Contact Us" invertText={false} />
            </a>
            <a
              href="https://portal.navfundservices.com/navportalcore/login"
              target="_blank"
            >
              <TextButton text="Client Login" invertText={false} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
