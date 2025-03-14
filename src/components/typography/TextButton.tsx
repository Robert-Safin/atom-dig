import { FC } from "react";

type Props = {
  text: string;
  invertText: boolean;
};

const TextButton: FC<Props> = (props) => {
  return (
    <p
      className="font-inter laptop:text-[20px] laptop:leading-[24px] laptop:tracking-[-1px] laptop:font-medium desktop:text-[20px] desktop:leading-[22px] text-[15px] leading-[18px] font-semibold tracking-[-0.75px]"
      style={props.invertText === true ? { filter: "invert(100%)" } : {}}
    >
      {props.text}
    </p>
  );
};

export default TextButton;
