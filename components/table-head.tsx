import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type TableHeadType = {
  className?: string;
  leftSort?: boolean;
  rightSort?: boolean;
  showTableHead?: boolean;
  muiArrowDownwardFilled?: string;
  head?: string;
  showHead?: boolean;
  muiArrowDownwardFilled1?: string;

  /** Variant props */
  checkbox?: boolean;
  small?: boolean;

  /** Style props */
  tableHeadFlex?: CSSProperties["flex"];
  tableHeadHeight?: CSSProperties["height"];
  tableHeadJustifyContent?: CSSProperties["justifyContent"];
  tableHeadWidth?: CSSProperties["width"];
};

const TableHead: NextPage<TableHeadType> = ({
  className = "",
  checkbox = false,
  small = false,
  leftSort = false,
  rightSort = false,
  showTableHead,
  tableHeadFlex,
  tableHeadHeight,
  tableHeadJustifyContent = "flex-start",
  tableHeadWidth,
  muiArrowDownwardFilled,
  head,
  showHead,
  muiArrowDownwardFilled1,
}) => {
  const tableHeadStyle: CSSProperties = useMemo(() => {
    return {
      flex: tableHeadFlex,
      height: tableHeadHeight,
      justifyContent: tableHeadJustifyContent,
      width: tableHeadWidth,
    };
  }, [tableHeadFlex, tableHeadHeight, tableHeadJustifyContent, tableHeadWidth]);

  return (
    showTableHead && (
      <div
        className={`flex-1 bg-helpers-clickable-empty-areas h-[46px] flex flex-row items-center justify-start p-4 box-border z-[4] text-left text-sm text-text-secondary font-typography-body-2 ${className}`}
        style={tableHeadStyle}
      >
        {leftSort && (
          <div className="flex flex-row items-start justify-start py-0 px-1">
            <Image
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              width={18}
              height={18}
              alt=""
              src={muiArrowDownwardFilled}
            />
          </div>
        )}
        {showHead && (
          <div className="relative leading-[100%] font-medium">{head}</div>
        )}
        {rightSort && (
          <div className="flex flex-row items-start justify-start py-0 px-1">
            <Image
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              width={18}
              height={18}
              alt=""
              src={muiArrowDownwardFilled1}
            />
          </div>
        )}
      </div>
    )
  );
};

export default TableHead;
