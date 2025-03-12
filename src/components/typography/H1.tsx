import { FC } from "react";

type Props = {
  text: string;
};

const H1: FC<Props> = (props) => {
  return (
    <h1 className="text-text font-inter laptop:text-[12px] laptop:leading-[auto] laptop:tracking-[-2.4px] desktop:text-[12px] desktop:leading-[auto] desktop:tracking-[-3.2px] text-[36px] leading-[36px] font-semibold tracking-[-1.8px]">
      {props.text}
    </h1>
  );
};

export default H1;
