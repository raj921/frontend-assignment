import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type CustomTableCustomCellType = {
  className?: string;
  type?: string;
  text?: string;
  image?: string;
  customTableCustomCellPosition?: CSSProperties["position"];
  customTableCustomCellTop?: CSSProperties["top"];
  customTableCustomCellLeft?: CSSProperties["left"];
  customTableCustomCellWidth?: CSSProperties["width"];
};

const CustomTableCustomCell: NextPage<CustomTableCustomCellType> = ({
  className = "",
  type = "Avatar + Text",
  text = "",
  image = "/default-icon.svg",
  customTableCustomCellPosition,
  customTableCustomCellTop,
  customTableCustomCellLeft,
  customTableCustomCellWidth,
}) => {
  const customTableCustomCellStyle: CSSProperties = useMemo(() => {
    return {
      position: customTableCustomCellPosition,
      top: customTableCustomCellTop,
      left: customTableCustomCellLeft,
      width: customTableCustomCellWidth,
    };
  }, [
    customTableCustomCellPosition,
    customTableCustomCellTop,
    customTableCustomCellLeft,
    customTableCustomCellWidth,
  ]);

  return (
    <div
      className={`flex flex-row items-center justify-start gap-3 text-left text-sm text-text-primary font-typography-body-2 ${className}`}
      style={customTableCustomCellStyle}
    >
      <Image
        className="h-8 w-8 relative rounded-lg object-cover"
        width={32}
        height={32}
        alt="Avatar"
        src={image}
      />
      <div className="relative tracking-[-0.01em] leading-[157%]">{text}</div>
    </div>
  );
};

export default CustomTableCustomCell;
