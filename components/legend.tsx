import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LegendType = {
  className?: string;
  label?: string;

  /** Style props */
  legendWidth?: CSSProperties["width"];
  legendHeight?: CSSProperties["height"];
  dotBackgroundColor?: CSSProperties["backgroundColor"];
};

const Legend: NextPage<LegendType> = ({
  className = "",
  legendWidth,
  legendHeight,
  dotBackgroundColor,
  label,
}) => {
  const legendStyle: CSSProperties = useMemo(() => {
    return {
      width: legendWidth,
      height: legendHeight,
    };
  }, [legendWidth, legendHeight]);

  const dotStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dotBackgroundColor,
    };
  }, [dotBackgroundColor]);

  return (
    <div
      className={`w-[116px] flex flex-row items-center justify-start py-2 px-0 box-border gap-2 text-left text-xs text-text-secondary font-typography-caption1 ${className}`}
      style={legendStyle}
    >
      <div
        className="w-4 relative rounded-81xl bg-text-disabled h-1"
        style={dotStyle}
      />
      <div className="relative leading-[166%]">{label}</div>
      <div className="w-[137px] relative leading-[166%] text-right hidden">
        $45,120.00
      </div>
    </div>
  );
};

export default Legend;
