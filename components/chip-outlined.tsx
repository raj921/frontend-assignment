import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Badge from "./badge";

export type ChipOutlinedType = {
  className?: string;
  delete1?: boolean;
  thumbnail?: boolean;

  /** Variant props */
  color?: string;
  size?: string;
  state?: string;

  /** Style props */
  muiCancelFilledIconMargin?: CSSProperties["margin"];
};

const ChipOutlined: NextPage<ChipOutlinedType> = ({
  className = "",
  color = "Default*",
  size = "Medium*",
  state = "Enabled",
  delete1 = true,
  thumbnail = false,
  muiCancelFilledIconMargin,
}) => {
  const muiCancelFilledIconStyle: CSSProperties = useMemo(() => {
    return {
      margin: muiCancelFilledIconMargin,
    };
  }, [muiCancelFilledIconMargin]);

  return (
    <div
      className={`rounded-lg overflow-hidden flex flex-col items-start justify-start text-center text-xs text-text-primary font-typography-body-2 ${className}`}
      data-color={color}
      data-size={size}
      data-state={state}
    >
      <div className="rounded-lg border-chip-outlined-border border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-[3px] px-1">
        {thumbnail && (
          <div className="rounded-81xl bg-divider flex flex-col items-center justify-center relative">
            <div className="w-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-81xl bg-background-default h-2 hidden z-[0]">
              <Badge color="Success" variant="Dot" />
            </div>
            <div className="w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] leading-[166%] flex items-center justify-center z-[1]">
              OP
            </div>
            <div className="w-6 relative h-6 overflow-hidden shrink-0 z-[2]" />
          </div>
        )}
        <div className="flex flex-col items-start justify-start py-0 px-1.5 text-left text-smi">
          <div className="w-[29px] h-[18px] relative tracking-[0.16px] leading-[18px] font-medium inline-block">
            Chip
          </div>
        </div>
        {delete1 && (
          <Image
            className="w-4 relative h-4"
            width={16}
            height={16}
            alt="Delete"
            src="/close.svg"
            style={muiCancelFilledIconStyle}
          />
        )}
      </div>
    </div>
  );
};

export default ChipOutlined;
