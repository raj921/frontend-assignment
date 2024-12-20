import type { NextPage } from "next";
import Icon1 from "./icon1";

export type InputFormType = {
  className?: string;
  prop?: string;
  forecastedIncreaseInYourSales?: string;
};

const InputForm: NextPage<InputFormType> = ({
  className = "",
  prop,
  forecastedIncreaseInYourSales,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start z-[2] text-left text-37xl text-background-default font-typography-caption1 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-3">
        <div className="self-stretch flex flex-row items-start justify-center gap-2 mq450:flex-wrap">
          <div className="flex-1 relative tracking-[-0.01em] leading-[120%] font-medium inline-block [text-shadow:0px_3px_14px_rgba(0,_0,_0,_0.08)] min-w-[110px] mq450:text-15xl mq450:leading-[40px] mq1050:text-26xl mq1050:leading-[54px]">
            {prop}
          </div>
          <Icon1 size="Large" />
        </div>
        <div className="relative text-sm tracking-[-0.01em] leading-[157%]">
          {forecastedIncreaseInYourSales}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
