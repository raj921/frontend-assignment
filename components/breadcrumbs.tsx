import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import BreadcrumbLink from "./breadcrumb-link";

export type BreadcrumbsType = {
  className?: string;

  /** Variant props */
  collapsed?: boolean;
  separator?: string;

  /** Style props */
  darkModeFalseSeparatorTexDisplay?: CSSProperties["display"];
};

const Breadcrumbs: NextPage<BreadcrumbsType> = ({
  className = "",
  collapsed = false,
  separator = "Text*",
  darkModeFalseSeparatorTexDisplay,
}) => {
  const darkModeFalseSeparatorTexStyle: CSSProperties = useMemo(() => {
    return {
      display: darkModeFalseSeparatorTexDisplay,
    };
  }, [darkModeFalseSeparatorTexDisplay]);

  return (
    <div
      className={`hidden flex-row items-center justify-start text-left text-base text-text-secondary font-typography-body-2 ${className}`}
      data-collapsed={collapsed}
      data-separator={separator}
      style={darkModeFalseSeparatorTexStyle}
    >
      <BreadcrumbLink active={false} icon />
      <div className="w-[23px] flex flex-col items-center justify-start">
        <div className="w-[7px] h-6 relative leading-[150%] inline-block shrink-0">
          <Image
            className="w-8 relative rounded-lg h-4 overflow-hidden shrink-0"
            width={32}
            height={16}
            alt="Divider"
            src="/divider.svg"
          />
        </div>
      </div>
      <Image
        className="w-8 relative rounded-lg h-4 overflow-hidden shrink-0"
        width={32}
        height={16}
        alt="Icon"
        src="/icon.svg"
      />
      <div className="w-[23px] flex flex-col items-center justify-start">
        <div className="w-[7px] h-6 relative leading-[150%] inline-block shrink-0">
          <Image
            className="w-8 relative rounded-lg h-4 overflow-hidden shrink-0"
            width={32}
            height={16}
            alt="Divider"
            src="/divider.svg"
          />
        </div>
      </div>
      <BreadcrumbLink active icon />
    </div>
  );
};

export default Breadcrumbs;
