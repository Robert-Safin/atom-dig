import { FC } from "react";

type Props = {
  text: string;
};

const TextFooter: FC<Props> = (props) => {
  return (
    <p className="text-text font-geist-mono laptop:text-[9.6px] laptop:leading-[12.8px] desktop:text-[12px] desktop:leading-[16px] text-[12px] leading-[12px] font-medium">
      {props.text}
    </p>
  );
};

export default TextFooter;
