import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Avatar from "./avatar";

export type CustomTableCustomCellType = {
  className?: string;

  /** Variant props */
  type?: string;

  /** Style props */
  customTableCustomCellAlignSelf?: CSSProperties["alignSelf"];
};

const CustomTableCustomCell: NextPage<CustomTableCustomCellType> = ({
  className = "",
  type = "Chips",
  customTableCustomCellAlignSelf,
}) => {
  const customTableCustomCellStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: customTableCustomCellAlignSelf,
    };
  }, [customTableCustomCellAlignSelf]);

  return (
    <div
      className={`w-full flex flex-row items-center justify-start gap-4 text-left text-base text-text-primary font-typography-caption1 ${className}`}
      data-type={type}
      style={customTableCustomCellStyle}
    >
      <Avatar content="Image" size="40px*" variant="Rounded" badge={false} />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="w-[75px] relative tracking-[-0.01em] leading-[150%] flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
          Product Name goes here
        </div>
        <div className="relative text-sm leading-[157%] font-typography-body-2 text-text-secondary hidden">
          Description
        </div>
      </div>
    </div>
  );
};

export default CustomTableCustomCell;
