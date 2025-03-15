import { FC } from "react";

type Props = {
  text: string;
};

const Text: FC<Props> = (props) => {
  return (
    <p className="text-text font-inter laptop:text-[16px] laptop:leading-[22px] laptop:tracking-[-0.8px] desktop:text-[16px]\ desktop:leading-[22px] desktop:tracking-[-0.8px] text-[13px] leading-[16px] font-normal tracking-[-0.65px]">
      {props.text}
    </p>
  );
};

export default Text;
