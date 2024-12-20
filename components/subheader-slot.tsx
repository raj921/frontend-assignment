import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SubheaderSlotType = {
  className?: string;

  /** Variant props */
  content?: string;

  /** Style props */
  contentTextDisplay?: CSSProperties["display"];
};

const SubheaderSlot: NextPage<SubheaderSlotType> = ({
  className = "",
  content = "Replaceable",
  contentTextDisplay,
}) => {
  const contentTextStyle: CSSProperties = useMemo(() => {
    return {
      display: contentTextDisplay,
    };
  }, [contentTextDisplay]);

  return (
    <div
      className={`w-[867px] hidden flex-row items-start justify-start text-left text-sm text-text-secondary font-typography-body-2 ${className}`}
      data-content={content}
      style={contentTextStyle}
    >
      <div className="h-[22px] w-[867px] relative leading-[157%] flex items-center shrink-0">
        Description
      </div>
    </div>
  );
};

export default SubheaderSlot;
