import { ClassValue } from "clsx";
import { FC } from "react";
import { motion } from "motion/react";

type Props = {
  className: ClassValue;
};
const Blob: FC<Props> = (props) => {
  const x = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
  const y = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
  x[0] = 0;
  x[x.length - 1] = 0;
  y[0] = 0;
  y[y.length - 1] = 0;

  return (
    <motion.div
      className={`pointer-events-none blur-[200px] ${props.className}`}
      style={{
        willChange: "filter",
        borderRadius: "50% 50%",
      }}
      animate={{
        x,
        y,
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
      }}
    />
  );
};

export default Blob;
