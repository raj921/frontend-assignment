import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BadgeType = {
  className?: string;

  /** Variant props */
  color?: string;
  variant?: string;

  /** Style props */
  badgeHeight?: CSSProperties["height"];
  badgeTop?: CSSProperties["top"];
  badgeRight?: CSSProperties["right"];
  badgeBottom?: CSSProperties["bottom"];
  badgeLeft?: CSSProperties["left"];
};

const Badge: NextPage<BadgeType> = ({
  className = "",
  color = "Default*",
  variant = "Standard*",
  badgeHeight,
  badgeTop,
  badgeRight,
  badgeBottom,
  badgeLeft,
}) => {
  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      height: badgeHeight,
      top: badgeTop,
      right: badgeRight,
      bottom: badgeBottom,
      left: badgeLeft,
    };
  }, [badgeHeight, badgeTop, badgeRight, badgeBottom, badgeLeft]);

  return (
    <div
      className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl overflow-hidden flex flex-row items-start justify-start ${className}`}
      data-color={color}
      data-variant={variant}
      style={badgeStyle}
    >
      <div className="w-2 relative rounded-[50%] bg-success-main h-2" />
    </div>
  );
};

export default Badge;
