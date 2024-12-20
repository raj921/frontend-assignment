import type { NextPage } from "next";
import Image from "next/image";
import SelectFilled from "./select-filled";

export type ActionsSlotType = {
  className?: string;
  showContentButtons?: boolean;
  maskedIcon: string;

  /** Variant props */
  smallScreen?: boolean;
};

const ActionsSlot: NextPage<ActionsSlotType> = ({
  className = "",
  smallScreen = false,
  showContentButtons,
  maskedIcon,
}) => {
  return (
    showContentButtons && (
      <div
        className={`flex flex-row items-center justify-start gap-4 text-center text-xs text-primary-main font-typography-body-2 ${className}`}
        data-smallscreen={smallScreen}
      >
        <div className="bg-primary-states-selected border-primary-main border-[1px] border-dashed overflow-hidden hidden flex-row items-start justify-start py-0 px-4">
          <div className="h-[30px] w-2 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block">
            5
          </div>
        </div>
        <div className="bg-primary-states-selected border-primary-main border-[1px] border-dashed overflow-hidden hidden flex-row items-start justify-start py-0 px-4">
          <div className="h-[30px] w-2 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block">
            4
          </div>
        </div>
        <div className="bg-primary-states-selected border-primary-main border-[1px] border-dashed overflow-hidden hidden flex-row items-start justify-start py-0 px-4">
          <div className="h-[30px] w-2 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block">
            3
          </div>
        </div>
        <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] rounded-lg [background:linear-gradient(180deg,_#635bff,_#4e36f5)] border-primary-dark border-[1px] border-solid overflow-hidden hidden flex-col items-center justify-center text-left text-sm text-background-default">
          <div className="rounded-lg border-helpers-buttoncontinsideborder border-t-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-1.5 px-4 gap-2">
            <input className="m-0 h-5 w-4 relative" type="checkbox" />
            <div className="h-6 w-[113px] relative leading-[24px] font-medium inline-block">
              Download Report
            </div>
            <Image
              className="w-4 relative h-5 hidden"
              width={16}
              height={20}
              alt=""
              src={maskedIcon}
            />
          </div>
        </div>
        <SelectFilled
          hasValue
          size="Small"
          state="Enabled"
          label={false}
          placeholder={false}
          adornStart={false}
          helper={false}
          value
          showAutocompleteTag={false}
          value1="7 days"
          placeholder1="Placeholder"
          showMinWidth
          showAutocompleteClose={false}
          showCaretDown
          underline="pending_I1:3406;9086:89999;10938:174686;6570:40068"
          showUnderlineIcon={false}
          minWidthVisible
        />
      </div>
    )
  );
};

export default ActionsSlot;
