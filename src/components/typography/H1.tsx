import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

type Props = {
  text: string;
};

const H1: FC<Props> = (props) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted && (
        <h1
          className={`text-gradient font-inter laptop:text-[48px] laptop:leading-[48px] laptop:tracking-[-2.4px] desktop:text-[64px] desktop:leading-[64px] desktop:tracking-[-3.2px] pb-2 text-center text-[36px] leading-[36px] font-semibold tracking-[-1.8px] text-pretty ${theme === "dark" ? "text-gradient-dm" : "text-gradient-lm"} `}
        >
          {props.text}
        </h1>
      )}
    </>
  );
};

export default H1;
