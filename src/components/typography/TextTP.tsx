import { FC } from "react";

type Props = {
  text: string;
};

const TextTP: FC<Props> = (props) => {
  return (
    <p className="font-inter laptop:text-[12.8px] laptop:leading-[auto] laptop:tracking-[1.4px] desktop:text-[16px] desktop:leading-[auto] desktop:tracking-[1.7px] text-text text-[12px] leading-[auto] font-bold tracking-[1.3px]">
      {props.text}
    </p>
  );
};

export default TextTP;
