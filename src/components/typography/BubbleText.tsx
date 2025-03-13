import { FC } from "react";

type Props = {
  text: string;
};

const TextBubble: FC<Props> = (props) => {
  return (
    <p className="text-text font-inter laptop:text-[12px] laptop:leading-[24px] laptop:tracking-[-2px] desktop:text-[12px] desktop:leading-[auto] desktop:tracking-[-0.6px] text-[12px] font-semibold tracking-[-0.5px] uppercase">
      {props.text}
    </p>
  );
};

export default TextBubble;
