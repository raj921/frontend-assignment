import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type YAxisLineType = {
  className?: string;
  showLabelFalse?: boolean;
  textInputContainer: string;

  /** Variant props */
  label?: boolean;

  /** Style props */
  labelFalseHeight?: CSSProperties["height"];
  labelFalseAlignSelf?: CSSProperties["alignSelf"];
  labelFalseWidth?: CSSProperties["width"];
};

const YAxisLine: NextPage<YAxisLineType> = ({
  className = "",
  label = true,
  showLabelFalse,
  labelFalseHeight,
  labelFalseAlignSelf,
  labelFalseWidth,
  textInputContainer,
}) => {
  const labelFalseStyle: CSSProperties = useMemo(() => {
    return {
      height: labelFalseHeight,
      alignSelf: labelFalseAlignSelf,
      width: labelFalseWidth,
    };
  }, [labelFalseHeight, labelFalseAlignSelf, labelFalseWidth]);

  return (
    showLabelFalse && (
      <div
        className={`self-stretch h-[22px] flex flex-row items-center justify-start ${className}`}
        data-label={label}
        style={labelFalseStyle}
      >
        <Image
          className="h-px flex-1 relative max-w-full overflow-hidden"
          loading="lazy"
          width={519}
          height={1}
          alt=""
          src={textInputContainer}
        />
      </div>
    )
  );
};

export default YAxisLine;
