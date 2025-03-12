import { FC } from "react";

type Props = {
  text: string;
};

const H3: FC<Props> = (props) => {
  return (
    <h3 className="text-text font-inter laptop:text-[32px] laptop:leading-[auto] laptop:tracking-[-1.6px] desktop:text-[32px] desktop:leading-[auto] desktop:tracking-[-1.6px] text-[24px] leading-[auto] font-medium tracking-[-1.2px]">
      {props.text}
    </h3>
  );
};

export default H3;
