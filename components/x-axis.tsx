import type { NextPage } from "next";

export type XAxisType = {
  className?: string;

  /** Variant props */
  breakpoint?: string;
  data?: string;
};

const XAxis: NextPage<XAxisType> = ({
  className = "",
  breakpoint = "Desktop",
  data = "12 months",
}) => {
  return (
    <div
      className={`w-[457px] h-[18px] flex flex-row items-center justify-between text-center text-xs text-text-secondary font-typography-caption1 ${className}`}
      data-breakpoint={breakpoint}
      data-data={data}
    >
      <div className="relative leading-[18px]">Mon</div>
      <div className="relative leading-[18px]">Tue</div>
      <div className="relative leading-[18px]">Wed</div>
      <div className="relative leading-[18px]">Thu</div>
      <div className="relative leading-[18px]">Fri</div>
      <div className="relative leading-[18px]">Sat</div>
      <div className="relative leading-[18px]">Sun</div>
      <div className="relative leading-[18px] hidden">8 AM</div>
      <div className="relative leading-[18px] hidden">Sep</div>
      <div className="relative leading-[18px] hidden">Oct</div>
      <div className="relative leading-[18px] hidden">Nov</div>
      <div className="relative leading-[18px] hidden">Dec</div>
    </div>
  );
};

export default XAxis;
