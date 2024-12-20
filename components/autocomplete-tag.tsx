import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ChipOutlined from "./chip-outlined";

export type AutocompleteTagType = {
  className?: string;

  /** Variant props */
  hasValue?: boolean;
  size?: string;
  state?: string;

  /** Style props */
  autocompleteTagDisplay?: CSSProperties["display"];
};

const AutocompleteTag: NextPage<AutocompleteTagType> = ({
  className = "",
  hasValue = false,
  size = "Medium*",
  state = "Enabled",
  autocompleteTagDisplay,
}) => {
  const autocompleteTagStyle: CSSProperties = useMemo(() => {
    return {
      display: autocompleteTagDisplay,
    };
  }, [autocompleteTagDisplay]);

  return (
    <div
      className={`hidden flex-row items-start justify-start py-0 pl-0 pr-2 gap-2 z-[1] text-center text-xs text-text-primary font-typography-body-2 ${className}`}
      data-hasValue={hasValue}
      data-size={size}
      data-state={state}
      style={autocompleteTagStyle}
    >
      <ChipOutlined
        color="Default*"
        size="Small"
        state="Enabled"
        delete1
        thumbnail={false}
      />
      <ChipOutlined
        color="Default*"
        size="Small"
        state="Enabled"
        delete1
        thumbnail={false}
        muiCancelFilledIconMargin="0"
      />
    </div>
  );
};

export default AutocompleteTag;
