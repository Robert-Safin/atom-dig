import { FC } from "react";

type Props = {
  text: string;
};

const TextBubble: FC<Props> = (props) => {
  return (
    <p className="text-text font-inter laptop:text-[12px] laptop:leading-[auto] laptop:tracking-[-0.5px] desktop:text-[12px] desktop:leading-[auto] desktop:tracking-[-0.5px] text-[12px] leading-[auto] font-semibold tracking-[-0.5px]">
      {props.text}
    </p>
  );
};

export default TextBubble;
