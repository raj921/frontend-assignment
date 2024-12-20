import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type IconType = {
  className?: string;
  size?: string;
  showIcon?: boolean;
  iconMargin?: CSSProperties["margin"];
  iconPosition?: CSSProperties["position"];
  iconTop?: CSSProperties["top"];
  iconRight?: CSSProperties["right"];
  muiStarFilled?: string;
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
  muiStarFilled = "/star.svg",
  muiStarFilledIconOverflow,
}) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
      position: iconPosition,
      top: iconTop,
      right: iconRight,
      overflow: muiStarFilledIconOverflow,
    };
  }, [iconMargin, iconPosition, iconTop, iconRight, muiStarFilledIconOverflow]);

  if (!showIcon) {
    return null;
  }

  return (
    <div
      className={`flex flex-row items-start justify-start ${className}`}
      data-size={size}
    >
      <Image
        className="w-5 relative h-5 overflow-hidden shrink-0"
        width={20}
        height={20}
        alt="Icon"
        src={muiStarFilled}
        style={iconStyle}
      />
    </div>
  );
};

export default Icon;
