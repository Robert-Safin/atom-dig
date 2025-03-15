import { FC} from "react";

type Props = {
  text: string;
};

const TextHero: FC<Props> = (props) => {

  return (
    <>

        <h1
          className={`text-text laptop:tracking-[-2.9px] font-inter laptop:text-[57.6px] laptop:leading-[57.6px] desktop:text-[72px] desktop:leading-[84px] desktop:tracking-[-3.6px] bg-clip-text pb-[5px] text-[40px] leading-[44px] font-semibold tracking-[-2px] opacity-80  `}
        >
          {props.text}
        </h1>

    </>
  );
};

export default TextHero;
