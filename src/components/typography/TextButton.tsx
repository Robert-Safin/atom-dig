import { FC } from "react";

type Props = {
  text: string;
};

const TextButton: FC<Props> = (props) => {
  return (
    <p className="font-inter laptop:text-[20px] laptop:leading-[24px] laptop:tracking-[-1px] laptop:font-medium desktop:text-[20px] desktop:leading-[22px] text-[15px] leading-[18px] font-semibold tracking-[-0.75px]">
      {props.text}
    </p>
  );
};

export default TextButton;
