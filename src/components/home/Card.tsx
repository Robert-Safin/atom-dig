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
      <div className="bg-card-bg desktop:h-[420px] relative z-10 overflow-hidden rounded-[21px]">
        <div className="bg-purple/75 left absolute top-0 -z-10 h-1/12 w-full blur-[100px]" />
        <Image
          src={props.img}
          alt={"strategy icon"}
          width={500}
          height={500}
          className="tablet:px-[36px] tablet:pt-[26px] tablet:pb-[14px] laptop:h-[252px] h-[189px] object-contain px-[28px] pt-[20px] pb-[11px]"
        />
        <div className="laptop:space-y-[12px] laptop:pb-[38px] laptop:px-[24px] flex flex-col space-y-[9px] px-[18px] pb-[28px]">
          <H3 text={props.title} />

          <div className="tablet:w-[250px] laptop:w-[310px] desktop:w-[300px]">
            <Text text={props.text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
