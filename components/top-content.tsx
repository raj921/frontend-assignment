import type { NextPage } from "next";
import Image from "next/image";

export type TopContentType = {
  className?: string;
};

const TopContent: NextPage<TopContentType> = ({ className = "" }) => {
  return (
    <header
      className={`border-divider border-b-[1px] border-solid flex flex-row items-center justify-start pt-6 pb-[22px] pl-10 pr-[971px] gap-3 top-[0] z-[99] sticky text-left text-lg text-text-disabled font-typography-caption1 lg:pr-[485px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pr-[242px] mq750:box-border ${className}`}
    >
      <button className="cursor-pointer [border:none] py-3 px-0 bg-success-shades-100 rounded-1181xl flex flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-start py-0 pl-3 pr-[11px] gap-3">
          <Image
            className="h-5 w-5 relative"
            width={20}
            height={20}
            alt=""
            src="/chartpieslice.svg"
          />
          <div className="relative text-lg tracking-[-0.01em] leading-[120%] font-medium font-typography-caption1 text-text-primary text-left">
            Summary
          </div>
        </div>
      </button>
      <div className="flex flex-col items-start justify-start py-3 px-0">
        <div className="flex flex-row items-center justify-start py-0 pl-3 pr-[11px] gap-3">
          <Image
            className="h-5 w-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src="/tag.svg"
          />
          <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[120%] font-medium font-[inherit]">
            Sales
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-3 px-0">
        <div className="flex flex-row items-center justify-start py-0 pl-3 pr-[11px] gap-3">
          <Image
            className="h-5 w-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src="/chatteardroptext.svg"
          />
          <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[120%] font-medium font-[inherit]">
            Chats
          </h3>
        </div>
      </div>
    </header>
  );
};

export default TopContent;
