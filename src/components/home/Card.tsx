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
      className="laptop:w-[406px] h-fit w-[305px] rounded-[21px] p-[1px] text-left"
      style={{ backgroundImage: "var(--strategy-stroke)" }}
    >
      <div className="bg-card-bg laptop:pt-[26px] laptop:pb-[38px] relative z-10 overflow-hidden rounded-[21px] pt-[19px] pb-[28px]">
        <div className="bg-purple left absolute top-0 -z-10 h-1/12 w-full blur-[100px]" />
        <Image
          src={props.img}
          alt={"strategy icon"}
          width={500}
          height={500}
          className="laptop:w-[334px] laptop:h-[252px] mx-auto h-[189px] w-[250px] object-contain"
        />
        <div className="laptop:px-[36px] px-[27px]">
          <div className="laptop:mt-[15px] laptop:mb-[12px] mt-[11px] mb-[9px]">
            <H3 text={props.title} />
          </div>
          <div className="laptop:w-[244px] w-[200px]">
            <Text text={props.text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
