import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Icon from "./icon";
import AutocompleteTag from "./autocomplete-tag";
import HelperText from "./helper-text";

export type SelectFilledType = {
  className?: string;
  label?: boolean;
  placeholder?: boolean;
  adornStart?: boolean;
  helper?: boolean;
  value?: boolean;
  showAutocompleteTag?: boolean;
  value1?: string;
  placeholder1?: string;
  showMinWidth?: boolean;
  showAutocompleteClose?: boolean;
  showCaretDown?: boolean;
  underline: string;
  showUnderlineIcon?: boolean;
  minWidthVisible?: boolean;

  /** Variant props */
  hasValue?: boolean;
  size?: string;
  state?: string;

  /** Style props */
  minHeightWidth?: CSSProperties["width"];
  minHeightFontSize?: CSSProperties["fontSize"];
  minHeightFontFamily?: CSSProperties["fontFamily"];
  minHeightColor?: CSSProperties["color"];
  minHeightTextAlign?: CSSProperties["textAlign"];
  minHeightDisplay?: CSSProperties["display"];
  minHeightAlignItems?: CSSProperties["alignItems"];
  valueFontFamily?: CSSProperties["fontFamily"];
  valueColor?: CSSProperties["color"];
  valueWidth?: CSSProperties["width"];
  placeholderWidth?: CSSProperties["width"];
  placeholderFontSize?: CSSProperties["fontSize"];
  placeholderFontFamily?: CSSProperties["fontFamily"];
  placeholderColor?: CSSProperties["color"];
  placeholderTextAlign?: CSSProperties["textAlign"];
  placeholderHeight?: CSSProperties["height"];
  caretDownHeight?: CSSProperties["height"];
  caretDownTop?: CSSProperties["top"];
  caretDownRight?: CSSProperties["right"];
  caretDownBottom?: CSSProperties["bottom"];
  caretDownLeft?: CSSProperties["left"];
  caretDownOverflow?: CSSProperties["overflow"];
  underlineIconPosition?: CSSProperties["position"];
  underlineIconMargin?: CSSProperties["margin"];
  underlineIconRight?: CSSProperties["right"];
  underlineIconBottom?: CSSProperties["bottom"];
  underlineIconLeft?: CSSProperties["left"];
  underlineIconOverflow?: CSSProperties["overflow"];
};

const SelectFilled: NextPage<SelectFilledType> = ({
  className = "",
  hasValue = false,
  size = "Medium*",
  state = "Enabled",
  label = false,
  placeholder = false,
  adornStart = false,
  helper = false,
  value = true,
  showAutocompleteTag,
  minHeightWidth,
  minHeightFontSize,
  minHeightFontFamily,
  minHeightColor,
  minHeightTextAlign,
  minHeightDisplay,
  minHeightAlignItems,
  value1,
  valueFontFamily,
  valueColor,
  valueWidth,
  placeholder1,
  placeholderWidth,
  placeholderFontSize,
  placeholderFontFamily,
  placeholderColor,
  placeholderTextAlign,
  placeholderHeight,
  showMinWidth,
  showAutocompleteClose,
  showCaretDown,
  caretDownHeight,
  caretDownTop,
  caretDownRight,
  caretDownBottom,
  caretDownLeft,
  caretDownOverflow,
  underline,
  showUnderlineIcon,
  underlineIconPosition,
  underlineIconMargin,
  underlineIconRight,
  underlineIconBottom,
  underlineIconLeft,
  underlineIconOverflow,
  minWidthVisible,
}) => {
  const minHeightStyle: CSSProperties = useMemo(() => {
    return {
      width: minHeightWidth,
      fontSize: minHeightFontSize,
      fontFamily: minHeightFontFamily,
      color: minHeightColor,
      textAlign: minHeightTextAlign,
      display: minHeightDisplay,
      alignItems: minHeightAlignItems,
    };
  }, [
    minHeightWidth,
    minHeightFontSize,
    minHeightFontFamily,
    minHeightColor,
    minHeightTextAlign,
    minHeightDisplay,
    minHeightAlignItems,
  ]);

  const valueStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: valueFontFamily,
      color: valueColor,
      width: valueWidth,
    };
  }, [valueFontFamily, valueColor, valueWidth]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      width: placeholderWidth,
      fontSize: placeholderFontSize,
      fontFamily: placeholderFontFamily,
      color: placeholderColor,
      textAlign: placeholderTextAlign,
      height: placeholderHeight,
    };
  }, [
    placeholderWidth,
    placeholderFontSize,
    placeholderFontFamily,
    placeholderColor,
    placeholderTextAlign,
    placeholderHeight,
  ]);

  const caretDownStyle: CSSProperties = useMemo(() => {
    return {
      height: caretDownHeight,
      top: caretDownTop,
      right: caretDownRight,
      bottom: caretDownBottom,
      left: caretDownLeft,
      overflow: caretDownOverflow,
    };
  }, [
    caretDownHeight,
    caretDownTop,
    caretDownRight,
    caretDownBottom,
    caretDownLeft,
    caretDownOverflow,
  ]);

  const underlineIconStyle: CSSProperties = useMemo(() => {
    return {
      position: underlineIconPosition,
      margin: underlineIconMargin,
      right: underlineIconRight,
      bottom: underlineIconBottom,
      left: underlineIconLeft,
      overflow: underlineIconOverflow,
    };
  }, [
    underlineIconPosition,
    underlineIconMargin,
    underlineIconRight,
    underlineIconBottom,
    underlineIconLeft,
    underlineIconOverflow,
  ]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[3px] text-left text-sm text-text-primary font-typography-body-2 ${className}`}
      data-hasValue={hasValue}
      data-size={size}
      data-state={state}
    >
      {label && (
        <div className="relative leading-[150%] font-medium">Label</div>
      )}
      <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] rounded-lg bg-background-default border-divider border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start relative text-base">
        <div className="flex flex-col items-start justify-center py-1.5 px-3 box-border relative gap-0.5 min-h-[36px] z-[0]">
          <div className="flex flex-row items-center justify-start relative z-[0]">
            {adornStart && (
              <div className="w-6 h-px flex flex-row items-center justify-start py-0 pl-0 pr-2 box-border z-[0]">
                <div className="hidden flex-row items-center justify-start">
                  <Icon
                    size="Medium*"
                    showIcon
                    muiStarFilled="pending_I1:3406;9086:89999;10938:174686;10100:140738;6569:39809;6594:47652"
                  />
                </div>
              </div>
            )}
            {showAutocompleteTag && (
              <AutocompleteTag hasValue size="Small" state="Enabled" />
            )}
            <div className="w-0 relative h-6 z-[2]" style={minHeightStyle} />
            {value && (
              <div
                className="relative tracking-[-0.01em] leading-[150%] font-typography-caption1 z-[3]"
                style={valueStyle}
              >
                {value1}
              </div>
            )}
            {placeholder && (
              <div
                className="w-[94px] relative tracking-[0.15px] leading-[24px] text-text-disabled z-[4]"
                style={placeholderStyle}
              >
                {placeholder1}
              </div>
            )}
            {showMinWidth && <div className="w-6 relative h-0 z-[5]" />}
            <Icon
              size="Small"
              showIcon={false}
              iconMargin="0 !important"
              iconPosition="absolute"
              iconTop="calc(50% - 18px)"
              iconRight="2px"
              muiStarFilled="pending_I1:3406;9086:89999;10938:174686;6570:40066;6594:47654"
              muiStarFilledIconOverflow="hidden"
            />
          </div>
          {showCaretDown && (
            <input
              className="!m-[0] w-4 h-4 absolute top-[calc(50%_-_8px)] right-[12px] z-[1]"
              type="checkbox"
              style={caretDownStyle}
            />
          )}
        </div>
        {showUnderlineIcon && (
          <Image
            className="w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-px shrink-0 z-[1]"
            width={220}
            height={1}
            alt=""
            src={underline}
            style={underlineIconStyle}
          />
        )}
        {minWidthVisible && <div className="w-20 relative h-0 z-[2]" />}
      </div>
      {helper && <HelperText hasValue size="Small" state="Enabled" />}
    </div>
  );
};

export default SelectFilled;
