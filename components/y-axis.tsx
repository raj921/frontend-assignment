import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import YAxisLine from "./y-axis-line";

export type YAxisType = {
  className?: string;

  /** Variant props */
  label?: boolean;

  /** Style props */
  yAxisPosition?: CSSProperties["position"];
  yAxisTop?: CSSProperties["top"];
  yAxisLeft?: CSSProperties["left"];
  yAxisWidth?: CSSProperties["width"];
  yAxisHeight?: CSSProperties["height"];
  yAxisAlignSelf?: CSSProperties["alignSelf"];
  yAxisFlex?: CSSProperties["flex"];
};

const YAxis: NextPage<YAxisType> = ({
  className = "",
  label = false,
  yAxisPosition,
  yAxisTop,
  yAxisLeft,
  yAxisWidth,
  yAxisHeight,
  yAxisAlignSelf,
  yAxisFlex,
}) => {
  const yAxisStyle: CSSProperties = useMemo(() => {
    return {
      position: yAxisPosition,
      top: yAxisTop,
      left: yAxisLeft,
      width: yAxisWidth,
      height: yAxisHeight,
      alignSelf: yAxisAlignSelf,
      flex: yAxisFlex,
    };
  }, [
    yAxisPosition,
    yAxisTop,
    yAxisLeft,
    yAxisWidth,
    yAxisHeight,
    yAxisAlignSelf,
    yAxisFlex,
  ]);

  return (
    <div
      className={`absolute top-[0px] left-[0.5px] w-[519px] h-[250px] flex flex-col items-start justify-between ${className}`}
      data-label={label}
      style={yAxisStyle}
    >
      <YAxisLine
        label={false}
        showLabelFalse
        textInputContainer="/text-input-container.svg"
      />
      <YAxisLine
        label={false}
        showLabelFalse
        labelFalseHeight="17px"
        labelFalseAlignSelf="stretch"
        labelFalseWidth="unset"
        textInputContainer="/text-input-container-1.svg"
      />
      <YAxisLine
        label={false}
        showLabelFalse
        labelFalseHeight="17px"
        labelFalseAlignSelf="stretch"
        labelFalseWidth="unset"
        textInputContainer="/text-input-container-2.svg"
      />
      <YAxisLine
        label={false}
        showLabelFalse
        labelFalseHeight="17px"
        labelFalseAlignSelf="stretch"
        labelFalseWidth="unset"
        textInputContainer="/text-input-container-3.svg"
      />
      <YAxisLine
        label={false}
        showLabelFalse
        labelFalseHeight="17px"
        labelFalseAlignSelf="stretch"
        labelFalseWidth="unset"
        textInputContainer="/text-input-container-4.svg"
      />
      <YAxisLine
        label={false}
        showLabelFalse
        labelFalseHeight="17px"
        labelFalseAlignSelf="stretch"
        labelFalseWidth="unset"
        textInputContainer="/text-input-container-5.svg"
      />
      <YAxisLine
        label={false}
        showLabelFalse={false}
        labelFalseHeight="17px"
        labelFalseAlignSelf="unset"
        labelFalseWidth="1216px"
        textInputContainer="pending_I1:3483;0:1702;0:1633"
      />
      <YAxisLine
        label={false}
        showLabelFalse={false}
        labelFalseHeight="17px"
        labelFalseAlignSelf="unset"
        labelFalseWidth="1216px"
        textInputContainer="pending_I1:3483;0:1703;0:1633"
      />
      <YAxisLine
        label={false}
        showLabelFalse={false}
        labelFalseHeight="17px"
        labelFalseAlignSelf="unset"
        labelFalseWidth="1216px"
        textInputContainer="pending_I1:3483;0:1704;0:1633"
      />
      <YAxisLine
        label={false}
        showLabelFalse={false}
        labelFalseHeight="17px"
        labelFalseAlignSelf="unset"
        labelFalseWidth="1216px"
        textInputContainer="pending_I1:3483;0:1705;0:1633"
      />
      <YAxisLine
        label={false}
        showLabelFalse={false}
        labelFalseHeight="17px"
        labelFalseAlignSelf="unset"
        labelFalseWidth="1216px"
        textInputContainer="pending_I1:3483;0:1706;0:1633"
      />
      <YAxisLine
        label={false}
        showLabelFalse={false}
        labelFalseHeight="17px"
        labelFalseAlignSelf="unset"
        labelFalseWidth="1216px"
        textInputContainer="pending_I1:3483;0:1707;0:1633"
      />
    </div>
  );
};

export default YAxis;
