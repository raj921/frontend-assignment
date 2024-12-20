import type { NextPage } from "next";
import Image from "next/image";

export type Top1Type = {
  className?: string;
};

const Top1: NextPage<Top1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[60px] overflow-hidden flex flex-col items-center justify-center py-6 px-4 box-border gap-[30px] ${className}`}
    >
      <Image
        className="w-[33.2px] h-[33.2px] relative rounded-7xs-2 overflow-hidden shrink-0"
        loading="lazy"
        width={33}
        height={33}
        alt=""
        src="/logo.svg"
      />
      <div className="self-stretch relative border-success-shades-900 border-t-[1px] border-solid box-border h-px" />
      <div className="flex flex-col items-center justify-center gap-[22px]">
        <div className="rounded-lg bg-background-default flex flex-col items-center justify-center p-2">
          <Image
            className="w-5 h-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src="/house.svg"
          />
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center p-2">
          <Image
            className="w-5 h-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src="/chatteardrop.svg"
          />
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center p-2">
          <Image
            className="w-5 h-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src="/usersfour.svg"
          />
        </div>
      </div>
      <div className="w-[29px] relative border-success-shades-900 border-t-[1px] border-solid box-border h-px hidden" />
    </div>
  );
};

export default Top1;
