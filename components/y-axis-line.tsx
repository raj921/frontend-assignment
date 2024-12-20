import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type YAxisLineType = {
  className?: string;
  label?: boolean;
  showLabelFalse?: boolean;
  labelFalseHeight?: CSSProperties["height"];
  labelFalseAlignSelf?: CSSProperties["alignSelf"];
  labelFalseWidth?: CSSProperties["width"];
  textInputContainer?: string;
};

const YAxisLine: NextPage<YAxisLineType> = ({
  className = "",
  label = true,
  showLabelFalse = true,
  labelFalseHeight,
  labelFalseAlignSelf,
  labelFalseWidth,
  textInputContainer = "/text-input-container.svg",
}) => {
  const labelFalseStyle: CSSProperties = useMemo(() => {
    return {
      height: labelFalseHeight,
      alignSelf: labelFalseAlignSelf,
      width: labelFalseWidth,
    };
  }, [labelFalseHeight, labelFalseAlignSelf, labelFalseWidth]);

  if (!showLabelFalse) {
    return null;
  }

  return (
    <div
      className={`flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[7px] ${className}`}
    >
      {label && (
        <div className="relative leading-[150%] inline-block">Label</div>
      )}
      <Image
        className="w-[30px] relative max-w-full overflow-hidden h-[30px] shrink-0"
        width={30}
        height={30}
        alt="Line"
        src={textInputContainer}
        style={labelFalseStyle}
      />
    </div>
  );
};

export default YAxisLine;
