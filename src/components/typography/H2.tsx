import { FC } from "react";

type Props = {
  text: string;
};

const H2: FC<Props> = (props) => {
  return (
    <h2 className="text-text font-inter laptop:text-[38.4px] laptop:leading-[auto] laptop:tracking-[-1.9px] desktop:text-[48px] desktop:leading-[54px] desktop:tracking-[-2.4px] text-[28px] leading-[32px] font-semibold tracking-[-1.4px]">
      {props.text}
    </h2>
  );
};

export default H2;
