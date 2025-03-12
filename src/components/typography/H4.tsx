import { FC } from "react";

type Props = {
  text: string;
};

const H3: FC<Props> = (props) => {
  return (
    <h4 className="text-text font-inter laptop:text-[18px] laptop:leading-[22px] laptop:tracking-[-0.9px] desktop:text-[20px] desktop:leading-[22px] desktop:tracking-[-1px] text-[16px] leading-[20px] font-normal tracking-[-0.8px]">
      {props.text}
    </h4>
  );
};

export default H3;
