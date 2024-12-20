import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type LinkType = {
  className?: string;

  /** Variant props */
  color?: string;

  /** Style props */
  linkColor?: CSSProperties["color"];
};

const Link: NextPage<LinkType> = ({
  className = "",
  color = "Primary",
  linkColor,
}) => {
  const linkStyle: CSSProperties = useMemo(() => {
    return {
      color: linkColor,
    };
  }, [linkColor]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-base text-text-secondary font-typography-body-2 ${className}`}
      data-color={color}
    >
      <div
        className="w-[30px] h-6 relative leading-[150%] inline-block"
        style={linkStyle}
      >
        Link
      </div>
      <Image
        className="w-[30px] relative max-w-full overflow-hidden h-5 shrink-0 hidden"
        width={30}
        height={20}
        alt="Link Icon"
        src="/link-icon.svg"
      />
    </div>
  );
};

export default Link;
