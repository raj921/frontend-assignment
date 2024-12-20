import type { NextPage } from "next";
import Icon from "./icon";
import Link from "./link";

export type BreadcrumbLinkType = {
  className?: string;
  icon?: boolean;

  /** Variant props */
  active?: boolean;
};

const BreadcrumbLink: NextPage<BreadcrumbLinkType> = ({
  className = "",
  active = false,
  icon = true,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-2 text-left text-base text-text-secondary font-typography-body-2 ${className}`}
      data-active={active}
    >
      <Icon
        size="Small"
        showIcon
        iconMargin="unset"
        iconPosition="unset"
        iconTop="unset"
        iconRight="unset"
        muiStarFilled="pending_I1:3406;9086:89996;10938:170588;10938:165808;6594:47654"
        muiStarFilledIconOverflow="hidden"
      />
      <Link color="Primary" />
    </div>
  );
};

export default BreadcrumbLink;
