import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HelperTextType = {
  className?: string;

  /** Variant props */
  hasValue?: boolean;
  size?: string;
  state?: string;

  /** Style props */
  helperTextDisplay?: CSSProperties["display"];
};

const HelperText: NextPage<HelperTextType> = ({
  className = "",
  hasValue = false,
  size = "Medium*",
  state = "Enabled",
  helperTextDisplay,
}) => {
  const helperTextStyle: CSSProperties = useMemo(() => {
    return {
      display: helperTextDisplay,
    };
  }, [helperTextDisplay]);

  return (
    <div
      className={`w-[220px] hidden flex-col items-start justify-start py-0 pl-3 pr-0 box-border text-left text-xs text-text-secondary font-typography-body-2 ${className}`}
      data-hasValue={hasValue}
      data-size={size}
      data-state={state}
      style={helperTextStyle}
    >
      <div className="w-[26px] h-5 relative tracking-[0.4px] leading-[20px] flex items-center">
        Helper text
      </div>
    </div>
  );
};

export default HelperText;
