import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type IconType = {
  className?: string;
  showIcon?: boolean;
  muiStarFilled: string;

  /** Variant props */
  size?: "Medium*" | "Small";

  /** Style props */
  iconMargin?: CSSProperties["margin"];
  iconPosition?: CSSProperties["position"];
  iconTop?: CSSProperties["top"];
  iconRight?: CSSProperties["right"];
  muiStarFilledIconOverflow?: CSSProperties["overflow"];
};

const Icon: NextPage<IconType> = ({
  className = "",
  size = "Medium*",
  showIcon,
  iconMargin,
  iconPosition,
  iconTop,
  iconRight,
  muiStarFilled,
  muiStarFilledIconOverflow,
}) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
      position: iconPosition,
      top: iconTop,
      right: iconRight,
    };
  }, [iconMargin, iconPosition, iconTop, iconRight]);

  const muiStarFilledIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: muiStarFilledIconOverflow,
    };
  }, [muiStarFilledIconOverflow]);

  return (
    showIcon && (
      <div
        className={`flex flex-row items-start justify-start [&_.muistarfilled-icon]:data-[size='Small']:h-5 [&_.muistarfilled-icon]:data-[size='Small']:w-5 ${className}`}
        data-size={size}
        style={iconStyle}
      >
        <Image
          className="muistarfilled-icon h-6 w-6 relative overflow-hidden shrink-0"
          width={24}
          height={24}
          alt=""
          src={muiStarFilled}
          style={muiStarFilledIconStyle}
        />
      </div>
    )
  );
};

export default Icon;
