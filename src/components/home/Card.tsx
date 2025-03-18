import Image from "next/image";
import { FC } from "react";
import H3 from "../typography/H3";
import Text from "../typography/Text";

type Props = {
  img: string;
  title: string;
  text: string;
};

const Card: FC<Props> = (props) => {
  return (
    <div
      className="h-fit rounded-[21px] p-[1px] text-left"
      style={{ backgroundImage: "var(--strategy-stroke)" }}
    >
      <div className="bg-card-bg laptop:w-[407px] laptop:h-[449px] relative z-10 h-[336px] w-[305px] overflow-hidden rounded-[21px]">
        <div className="bg-purple/75 left absolute top-0 -z-10 h-1/12 w-full blur-[100px]" />
        <Image
          src={props.img}
          alt={"strategy icon"}
          width={500}
          height={500}
          className="laptop:w-[334px] laptop:h-[252px] laptop:mt-[26.5px] laptop:mb-[15px] mx-auto mt-[20px] mb-[11px] h-[189px] w-[250px] object-contain"
        />
        <div className="laptop:px-[24px] flex flex-col space-y-[3px] px-[18px]">
          <H3 text={props.title} />
          <Text text={props.text} />
        </div>
      </div>
    </div>
  );
};

export default Card;
