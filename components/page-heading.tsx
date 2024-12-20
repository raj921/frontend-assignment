import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Breadcrumbs from "./breadcrumbs";
import SubheaderSlot from "./subheader-slot";
import ActionsSlot from "./actions-slot";

export type PageHeadingType = {
  className?: string;
  action?: boolean;
  breadcrumbs?: boolean;
  description?: boolean;
  pageHeader?: string;
  showPageHeader?: boolean;
  showDescription?: boolean;

  /** Variant props */
  smallScreen?: boolean;

  /** Style props */
  pageHeadingAlignSelf?: CSSProperties["alignSelf"];
  pageHeadingHeight?: CSSProperties["height"];
  pageHeadingFlex?: CSSProperties["flex"];
  horizontalContainerAlignItems?: CSSProperties["alignItems"];
};

const PageHeading: NextPage<PageHeadingType> = ({
  className = "",
  smallScreen = false,
  action = true,
  breadcrumbs = false,
  description = false,
  pageHeadingAlignSelf,
  pageHeadingHeight,
  pageHeadingFlex,
  horizontalContainerAlignItems,
  pageHeader,
  showPageHeader,
  showDescription,
}) => {
  const pageHeadingStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: pageHeadingAlignSelf,
      height: pageHeadingHeight,
      flex: pageHeadingFlex,
    };
  }, [pageHeadingAlignSelf, pageHeadingHeight, pageHeadingFlex]);

  const horizontalContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: horizontalContainerAlignItems,
    };
  }, [horizontalContainerAlignItems]);

  return (
    <div
      className={`self-stretch h-[86px] flex flex-col items-start justify-start pt-8 px-6 pb-4 box-border text-left text-base text-text-secondary font-typography-body-2 ${className}`}
      data-smallscreen={smallScreen}
      style={pageHeadingStyle}
    >
      <div
        className="self-stretch flex flex-row items-center justify-start gap-6"
        style={horizontalContainerStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-2">
          {breadcrumbs && <Breadcrumbs collapsed separator="Text*" />}
          {showPageHeader && (
            <h1 className="m-0 self-stretch relative text-13xl tracking-[-0.02em] leading-[120%] font-medium font-typography-caption1 text-text-primary">
              {pageHeader}
            </h1>
          )}
          {description && <SubheaderSlot content="Text" />}
        </div>
        <ActionsSlot
          smallScreen={false}
          showContentButtons
          maskedIcon="/default-icon.svg"
        />
      </div>
    </div>
  );
};

export default PageHeading;
