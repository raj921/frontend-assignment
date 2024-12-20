import type { NextPage } from "next";
import Image from "next/image";

export type Icon1Type = {
  className?: string;

  /** Variant props */
  size?: string;
};

const Icon1: NextPage<Icon1Type> = ({ className = "", size = "Medium*" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start ${className}`}
      data-size={size}
    >
      <Image
        className="h-[35px] w-[35px] relative"
        loading="lazy"
        width={35}
        height={35}
        alt=""
        src="/trendup-1.svg"
      />
    </div>
  );
};

export default Icon1;
