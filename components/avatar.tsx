import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Badge from "./badge";

export type AvatarType = {
  className?: string;
  badge?: boolean;

  /** Variant props */
  content?: string;
  size?: string;
  variant?: string;

  /** Style props */
  avatarBorderRadius?: CSSProperties["borderRadius"];
};

const Avatar: NextPage<AvatarType> = ({
  className = "",
  content = "Image",
  size = "40px*",
  variant = "Circular*",
  badge = false,
  avatarBorderRadius,
}) => {
  const avatarStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: avatarBorderRadius,
    };
  }, [avatarBorderRadius]);

  return (
    <div
      className={`rounded-27xl flex flex-col items-center justify-center relative bg-[url('/avatar@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
      data-content={content}
      data-size={size}
      data-variant={variant}
      style={avatarStyle}
    >
      {badge && (
        <div className="w-3 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-81xl bg-background-default h-3 z-[0]">
          <Badge
            color="Success"
            variant="Dot"
            badgeHeight="66.67%"
            badgeTop="16.67%"
            badgeRight="16.67%"
            badgeBottom="16.67%"
            badgeLeft="16.67%"
          />
        </div>
      )}
      <div className="w-10 relative h-10 overflow-hidden shrink-0 z-[1]" />
    </div>
  );
};

export default Avatar;
