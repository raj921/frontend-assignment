import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import SideNavStore from "../components/side-nav-store";
import TopContent from "../components/top-content";
import PageHeading from "../components/page-heading";
import Icon from "../components/icon";
import YAxis from "../components/y-axis";
import XAxis from "../components/x-axis";
import Legend from "../components/legend";
import InputForm from "../components/input-form";
import TableHead from "../components/table-head";
import CustomTableCustomCell from "../components/custom-table-custom-cell";
import AIChatBox from "../components/AIChatBox";

const WingmanStoreSampleDashboa: NextPage = () => {
  const [showChat, setShowChat] = useState(false);

  // Sample data with more realistic entries
  const initialData = [
    {
      id: 1,
      product: "Product N",
      date: "24 Apr '2024",
      time: "10:24 AM",
      timeSpent: "2h 5m",
      orderValue: 120.21,
      commission: 55,
    },
    {
      id: 2,
      product: "Product X",
      date: "24 Apr '2024",
      time: "11:30 AM",
      timeSpent: "1h 45m",
      orderValue: 95.50,
      commission: 45,
    },
    {
      id: 3,
      product: "Product Y",
      date: "24 Apr '2024",
      time: "2:15 PM",
      timeSpent: "3h 20m",
      orderValue: 150.00,
      commission: 65,
    },
    {
      id: 4,
      product: "Product Z",
      date: "24 Apr '2024",
      time: "4:45 PM",
      timeSpent: "1h 30m",
      orderValue: 80.75,
      commission: 35,
    }
  ];

  return (
    <div className="w-full relative bg-background-default overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border leading-[normal] tracking-[normal]">
      <SideNavStore location1="Home" />
      <main className="flex-1 flex flex-col items-start justify-start gap-9 max-w-[calc(100%_-_60px)] mq750:gap-[18px]">
        <TopContent />
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-xs text-text-secondary font-typography-caption1">
          <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
            <PageHeading
              smallScreen={false}
              action
              breadcrumbs={false}
              description={false}
              pageHeader="At a glance"
              showPageHeader
              showDescription
            />
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-8 px-6 box-border gap-x-8 gap-y-6 max-w-full mq750:gap-4">
              <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-row items-center justify-start p-6 box-border min-w-[376px] max-w-full mq450:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-center gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 max-w-full">
                    <Image
                      className="h-3 w-3 relative"
                      width={12}
                      height={12}
                      alt=""
                      src="/chatteardrop-1.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block max-w-[calc(100%_-_20px)]">
                      Consultations
                    </div>
                  </div>
                  <div className="relative text-13xl tracking-[-0.02em] leading-[120%] font-medium text-text-primary inline-block min-w-[41px] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                    24
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-success-main mq450:flex-wrap">
                    <Icon
                      size="Medium*"
                      showIcon
                      iconMargin="unset"
                      iconPosition="unset"
                      iconTop="unset"
                      iconRight="unset"
                      muiStarFilled="/trendup.svg"
                      muiStarFilledIconOverflow="unset"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[157%] inline-block min-w-[66px]">
                      <span>15%</span>
                      <span className="text-text-secondary"> increase</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-row items-center justify-start p-6 box-border min-w-[376px] max-w-full mq450:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-center gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 max-w-full">
                    <Image
                      className="h-3 w-3 relative"
                      width={12}
                      height={12}
                      alt=""
                      src="/tag-1.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block max-w-[calc(100%_-_20px)]">
                      ORDERS PLACED
                    </div>
                  </div>
                  <div className="self-stretch relative text-13xl tracking-[-0.02em] leading-[120%] font-medium text-text-primary mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                    12
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-tomato mq450:flex-wrap">
                    <Image className="flex flex-row items-start justify-start" />
                    <div className="w-[317px] relative tracking-[-0.01em] leading-[157%] inline-block min-w-[71px]">
                      <span>15%</span>
                      <span className="text-text-secondary"> decrease</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-row items-center justify-start p-6 box-border min-w-[376px] max-w-full mq450:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-center gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 max-w-full">
                    <Image
                      className="h-3 w-3 relative"
                      width={12}
                      height={12}
                      alt=""
                      src="/checkfat.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block max-w-[calc(100%_-_20px)]">{`CONVERSION `}</div>
                  </div>
                  <div className="self-stretch relative text-13xl tracking-[-0.02em] leading-[120%] font-medium text-text-primary mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                    50%
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-tomato mq450:flex-wrap">
                    <Image className="flex flex-row items-start justify-start" />
                    <div className="w-[317px] relative tracking-[-0.01em] leading-[157%] inline-block min-w-[71px]">
                      <span>15%</span>
                      <span className="text-text-secondary"> decrease</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-row items-center justify-start p-6 box-border min-w-[376px] max-w-full mq450:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-center gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 max-w-full">
                    <Image
                      className="h-3 w-3 relative"
                      width={12}
                      height={12}
                      alt=""
                      src="/coins.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block max-w-[calc(100%_-_20px)]">
                      TOTAL SALES VALUE
                    </div>
                  </div>
                  <div className="self-stretch relative text-13xl tracking-[-0.02em] leading-[120%] font-medium text-text-primary mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                    $2,400
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-success-main mq450:flex-wrap">
                    <Icon
                      size="Medium*"
                      showIcon
                      iconMargin="unset"
                      iconPosition="unset"
                      iconTop="unset"
                      iconRight="unset"
                      muiStarFilled="/trenddown-2.svg"
                      muiStarFilledIconOverflow="unset"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[157%] inline-block min-w-[66px]">
                      <span>15%</span>
                      <span className="text-text-secondary"> increase</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-row items-center justify-start p-6 box-border min-w-[376px] max-w-full mq450:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-center gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 max-w-full">
                    <Image
                      className="h-3 w-3 relative"
                      width={12}
                      height={12}
                      alt=""
                      src="/coin.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block max-w-[calc(100%_-_20px)]">
                      AVG ORDER VALUE
                    </div>
                  </div>
                  <div className="self-stretch relative text-13xl tracking-[-0.02em] leading-[120%] font-medium text-text-primary mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                    $240
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-success-main mq450:flex-wrap">
                    <Image className="flex flex-row items-start justify-start" />
                    <div className="w-[317px] relative tracking-[-0.01em] leading-[157%] inline-block min-w-[66px]">
                      <span>15%</span>
                      <span className="text-text-secondary"> increase</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-row items-center justify-start p-6 box-border min-w-[376px] max-w-full mq450:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-center gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 max-w-full">
                    <Image
                      className="h-3 w-3 relative"
                      width={12}
                      height={12}
                      alt=""
                      src="/piggybank.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block max-w-[calc(100%_-_20px)]">
                      COMMISSION PAID
                    </div>
                  </div>
                  <div className="self-stretch relative text-13xl tracking-[-0.02em] leading-[120%] font-medium text-text-primary mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                    $240
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-success-main mq450:flex-wrap">
                    <Image className="flex flex-row items-start justify-start" />
                    <div className="w-[317px] relative tracking-[-0.01em] leading-[157%] inline-block min-w-[66px]">
                      <span>15%</span>
                      <span className="text-text-secondary"> increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
              <PageHeading
                smallScreen={false}
                action={false}
                breadcrumbs={false}
                description
                pageHeadingAlignSelf="unset"
                pageHeadingHeight="unset"
                pageHeadingFlex="1"
                horizontalContainerAlignItems="flex-start"
                pageHeader="Insights"
                showPageHeader={false}
                showDescription={false}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-8 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-6 max-w-full">
                <div className="flex-1 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-6 min-w-[445px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <Image
                        className="w-3 h-3 relative"
                        width={12}
                        height={12}
                        alt=""
                        src="/chatteardrop-1.svg"
                      />
                    </div>
                    <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block min-w-[85px] max-w-full">
                      CONsultations
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-5xs text-silver">
                    <div className="self-stretch flex flex-row items-start justify-start gap-0.5 max-w-full mq750:flex-wrap">
                      <div className="h-[162px] w-5 flex flex-col items-start justify-start pt-[88px] px-0 pb-0 box-border">
                        <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold [transform:_rotate(-90deg)]">
                          CONSULTATions
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[399px] max-w-full text-center text-xs text-text-secondary mq750:min-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start gap-0.5 max-w-full mq750:flex-wrap">
                          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-4">
                            <div className="flex flex-col items-start justify-start gap-[26px]">
                              <div className="w-[19px] relative leading-[166%] inline-block">
                                60
                              </div>
                              <div className="w-[19px] relative leading-[166%] inline-block">
                                50
                              </div>
                              <div className="w-[19px] relative leading-[166%] inline-block">
                                40
                              </div>
                              <div className="w-[19px] relative leading-[166%] inline-block">
                                30
                              </div>
                              <div className="w-[19px] relative leading-[166%] inline-block">
                                20
                              </div>
                              <div className="w-[19px] relative leading-[166%] inline-block">
                                10
                              </div>
                            </div>
                          </div>
                          <div className="h-[250px] flex-1 relative min-w-[348px] max-w-full mq750:h-auto mq750:min-h-[250] mq750:min-w-full">
                            <YAxis label={false} />
                            <div className="absolute top-[0px] left-[0px] w-[519px] h-[230px] max-w-full z-[1] mq750:h-auto mq750:min-h-[230]">
                              <div className="absolute top-[2px] left-[27.5px] w-[465px] overflow-hidden flex flex-row items-end justify-between pt-[35px] px-0 pb-0 box-border gap-5 max-w-full mq750:flex-wrap mq750:justify-center">
                                <Image
                                  className="h-[84px] w-8 relative"
                                  loading="lazy"
                                  width={32}
                                  height={84}
                                  alt=""
                                  src="/-chartbar.svg"
                                />
                                <Image
                                  className="h-[84px] w-8 relative"
                                  loading="lazy"
                                  width={32}
                                  height={84}
                                  alt=""
                                  src="/-chartbar-1.svg"
                                />
                                <Image
                                  className="h-[104px] w-8 relative"
                                  loading="lazy"
                                  width={32}
                                  height={104}
                                  alt=""
                                  src="/-chartbar-2.svg"
                                />
                                <Image
                                  className="h-[205px] w-8 relative"
                                  loading="lazy"
                                  width={32}
                                  height={205}
                                  alt=""
                                  src="/-chartbar-3.svg"
                                />
                                <Image
                                  className="h-[100px] w-8 relative"
                                  loading="lazy"
                                  width={32}
                                  height={100}
                                  alt=""
                                  src="/-chartbar-4.svg"
                                />
                                <Image
                                  className="h-[122px] w-8 relative"
                                  loading="lazy"
                                  width={32}
                                  height={122}
                                  alt=""
                                  src="/-chartbar-5.svg"
                                />
                                <Image
                                  className="h-[122px] w-8 relative"
                                  loading="lazy"
                                  width={32}
                                  height={122}
                                  alt=""
                                  src="/-chartbar-6.svg"
                                />
                              </div>
                              <div className="absolute top-[29.9px] left-[0px] w-[519px] h-[200.1px]">
                                <Image
                                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                                  width={519}
                                  height={200}
                                  alt=""
                                  src="/slider.svg"
                                />
                                <Image
                                  className="absolute top-[53.1px] left-[0px] w-[519px] h-[85.9px] z-[2]"
                                  width={519}
                                  height={86}
                                  alt=""
                                  src="/slider-1.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[26px]">
                            <div className="w-[19px] relative leading-[166%] inline-block">
                              20
                            </div>
                            <div className="w-[19px] relative leading-[166%] inline-block">
                              10
                            </div>
                            <div className="w-[19px] relative leading-[166%] inline-block">
                              10
                            </div>
                            <div className="w-[19px] relative leading-[166%] inline-block">
                              10
                            </div>
                            <div className="w-[19px] relative leading-[166%] inline-block">
                              10
                            </div>
                            <div className="w-[19px] relative leading-[166%] inline-block">
                              10
                            </div>
                          </div>
                          <div className="h-[162.5px] w-5 flex flex-col items-start justify-start pt-[87.5px] px-0 pb-0 box-border text-left text-5xs text-silver">
                            <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold [transform:_rotate(-90deg)]">
                              EXPERTS ONLINE
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
                          <XAxis breakpoint="Desktop" data="12 months" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative border-divider border-[1px] border-solid box-border" />
                    <div className="flex flex-row items-start justify-start gap-4 max-w-full mq750:flex-wrap">
                      <Legend label="Incoming" />
                      <Legend
                        legendWidth="130px"
                        legendHeight="unset"
                        dotBackgroundColor="#15b79f"
                        label="Answered"
                      />
                      <Legend
                        legendWidth="130px"
                        legendHeight="unset"
                        dotBackgroundColor="#ffe587"
                        label="Experts online"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[260px] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl bg-background-default overflow-hidden shrink-0 flex flex-col items-end justify-start py-6 px-[17px] box-border gap-4 mq450:pt-5 mq450:pb-5 mq450:box-border">
                  <div className="w-[218.9px] flex flex-col items-start justify-start gap-[26px]">
                    <div className="w-[212px] flex flex-row items-start justify-start gap-2">
                      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                        <Image
                          className="w-3 h-3 relative"
                          width={12}
                          height={12}
                          alt=""
                          src="/chartbar.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold">
                        VS PAST PERIOD
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-center mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <div className="flex flex-col items-start justify-start gap-[27.6px]">
                          <div className="w-[19px] relative leading-[166%] inline-block">
                            20
                          </div>
                          <div className="w-[19px] relative leading-[166%] inline-block">
                            10
                          </div>
                          <div className="w-[19px] relative leading-[166%] inline-block">
                            10
                          </div>
                          <div className="w-[19px] relative leading-[166%] inline-block">
                            10
                          </div>
                          <div className="w-[19px] relative leading-[166%] inline-block">
                            10
                          </div>
                          <div className="w-[19px] relative leading-[166%] inline-block">
                            10
                          </div>
                        </div>
                      </div>
                      <div className="h-[282px] flex-1 relative min-w-[131px]">
                        <div className="absolute top-[2px] left-[6px] w-[188px] h-[280px] flex flex-row items-start justify-start">
                          <div className="self-stretch flex-1 flex flex-col items-center justify-start py-0 px-0">
                            <YAxis
                              label={false}
                              yAxisPosition="unset"
                              yAxisTop="unset"
                              yAxisLeft="unset"
                              yAxisWidth="unset"
                              yAxisHeight="unset"
                              yAxisAlignSelf="stretch"
                              yAxisFlex="1"
                            />
                            <div className="w-[223px] flex flex-row items-center justify-between py-0 px-6 box-border gap-5">
                              <div className="w-[73px] relative leading-[166%] inline-block shrink-0">
                                This week
                              </div>
                              <div className="w-[73px] relative leading-[166%] inline-block shrink-0">
                                Last week
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start z-[1]">
                          <div className="overflow-hidden flex flex-row items-end justify-start py-0 px-5 gap-[17px] shrink-0">
                            <div className="flex flex-row items-end justify-start gap-2">
                              <Image
                                className="h-[254px] w-8 relative"
                                loading="lazy"
                                width={32}
                                height={254}
                                alt=""
                                src="/-chartbar-7.svg"
                              />
                              <Image
                                className="h-[220px] w-8 relative"
                                loading="lazy"
                                width={32}
                                height={220}
                                alt=""
                                src="/-chartbar-8.svg"
                              />
                            </div>
                            <div className="flex flex-row items-end justify-start gap-2">
                              <Image
                                className="h-[212px] w-8 relative"
                                loading="lazy"
                                width={32}
                                height={212}
                                alt=""
                                src="/-chartbar-9.svg"
                              />
                              <Image
                                className="h-[194px] w-8 relative"
                                loading="lazy"
                                width={32}
                                height={194}
                                alt=""
                                src="/-chartbar-10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[7px] pr-1.5">
                    <div className="h-px flex-1 relative border-divider border-[1px] border-solid box-border" />
                  </div>
                  <div className="flex flex-row items-start justify-end py-0 pl-0.5 pr-px">
                    <div className="flex flex-row items-start justify-start gap-4 mq450:flex-wrap">
                      <Legend
                        legendWidth="102px"
                        legendHeight="36px"
                        dotBackgroundColor="#ccfbef"
                        label="Consultations"
                      />
                      <Legend
                        legendWidth="unset"
                        legendHeight="36px"
                        dotBackgroundColor="#134e48"
                        label="Orders closed"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[260px] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_5px_22px_rgba(0,_0,_0,_0.04)] rounded-xl [background:linear-gradient(180deg,_#15b79f,_#0e9382)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-6 px-6 pb-[63px] box-border relative gap-6 text-success-shades-100 mq450:pt-5 mq450:pb-[41px] mq450:box-border">
                  <div className="self-stretch flex flex-col items-start justify-center">
                    <div className="self-stretch flex flex-row items-center justify-start gap-2 mq450:flex-wrap">
                      <Image
                        className="h-3 w-3 relative"
                        width={12}
                        height={12}
                        alt=""
                        src="/chatteardrop-3.svg"
                      />
                      <div className="flex-1 relative tracking-[0.5px] leading-[250%] uppercase font-semibold inline-block min-w-[60px]">
                        FORECASTs
                      </div>
                    </div>
                  </div>
                  <Image
                    className="w-[793.9px] h-[793.9px] absolute !m-[0] top-[-359px] left-[-360px] object-contain z-[1]"
                    width={794}
                    height={794}
                    alt=""
                    src="/pulsesvg@2x.png"
                  />
                  <InputForm
                    prop="+15%"
                    forecastedIncreaseInYourSales="forecasted increase in your sales closed by the end of the current month"
                  />
                  <InputForm
                    prop="+20%"
                    forecastedIncreaseInYourSales="forecasted increase in consultations by the end of the current month"
                  />
                </div>
              </div>
            </div>
            <footer className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full text-left text-sm text-text-primary font-typography-body-2 mq750:gap-4">
              <PageHeading
                smallScreen={false}
                action={false}
                breadcrumbs={false}
                description
                pageHeadingAlignSelf="stretch"
                pageHeadingHeight="86px"
                pageHeadingFlex="unset"
                horizontalContainerAlignItems="flex-start"
                pageHeader="Orders"
                showPageHeader={false}
                showDescription={false}
              />
              <div className="w-[1276px] flex flex-row items-start justify-start py-0 pl-6 pr-0 box-border max-w-full">
                <div className="flex-1 rounded-lg bg-background-default border-divider border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start relative max-w-full">
                  <div className="self-stretch bg-background-level1 border-divider border-b-[1px] border-solid box-border flex flex-row items-center justify-center relative [row-gap:20px] max-w-full lg:flex-wrap">
                    <input
                      className="w-full [border:none] [outline:none] bg-helpers-clickable-empty-areas flex-1 flex flex-row items-center justify-start p-4 box-border font-typography-caption1 text-sm text-text-secondary z-[0]"
                      placeholder="Product"
                      type="text"
                    />
                    <div className="w-[417.3px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
                      <input
                        className="w-full [border:none] [outline:none] bg-helpers-clickable-empty-areas flex-1 flex flex-row items-center justify-start p-4 box-border font-typography-caption1 text-sm text-text-secondary z-[1]"
                        placeholder="Date"
                        type="text"
                      />
                      <input
                        className="w-full [border:none] [outline:none] bg-helpers-clickable-empty-areas flex-1 flex flex-row items-center justify-start p-4 box-border font-typography-caption1 text-sm text-text-secondary z-[2] ml-[-0.1px] mq450:ml-0"
                        placeholder="Time spent"
                        type="text"
                      />
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] bg-helpers-clickable-empty-areas flex-1 flex flex-row items-center justify-start p-4 box-border font-typography-caption1 text-sm text-text-secondary z-[2]"
                      placeholder="Order Value"
                      type="text"
                    />
                    <input
                      className="w-full [border:none] [outline:none] bg-helpers-clickable-empty-areas flex-1 flex flex-row items-center justify-start p-4 box-border font-typography-caption1 text-sm text-text-secondary z-[3]"
                      placeholder="Commission"
                      type="text"
                    />
                    <TableHead
                      checkbox={false}
                      small={false}
                      leftSort={false}
                      rightSort={false}
                      showTableHead
                      head="Product"
                      showHead
                      tableHeadJustifyContent="flex-start"
                      tableHeadWidth="200px"
                      muiArrowDownwardFilled="/muiarrowdownwardfilled.svg"
                      muiArrowDownwardFilled1="/muiarrowdownwardfilled1.svg"
                    />
                    <TableHead
                      checkbox={false}
                      small={false}
                      leftSort={false}
                      rightSort={false}
                      showTableHead
                      head="Date"
                      showHead
                      tableHeadJustifyContent="flex-start"
                      tableHeadWidth="150px"
                      muiArrowDownwardFilled="/muiarrowdownwardfilled.svg"
                      muiArrowDownwardFilled1="/muiarrowdownwardfilled1.svg"
                    />
                    <TableHead
                      checkbox={false}
                      small={false}
                      leftSort={false}
                      rightSort={false}
                      showTableHead
                      head="Time spent"
                      showHead
                      tableHeadJustifyContent="flex-start"
                      tableHeadWidth="120px"
                      muiArrowDownwardFilled="/muiarrowdownwardfilled.svg"
                      muiArrowDownwardFilled1="/muiarrowdownwardfilled1.svg"
                    />
                    <TableHead
                      checkbox={false}
                      small={false}
                      leftSort={false}
                      rightSort={false}
                      showTableHead
                      head="Order Value"
                      showHead
                      tableHeadJustifyContent="flex-start"
                      tableHeadWidth="120px"
                      muiArrowDownwardFilled="/muiarrowdownwardfilled.svg"
                      muiArrowDownwardFilled1="/muiarrowdownwardfilled1.svg"
                    />
                    <TableHead
                      checkbox={false}
                      small={false}
                      leftSort={false}
                      rightSort={false}
                      showTableHead
                      head="Commission"
                      showHead
                      tableHeadJustifyContent="flex-start"
                      tableHeadWidth="120px"
                      muiArrowDownwardFilled="/muiarrowdownwardfilled.svg"
                      muiArrowDownwardFilled1="/muiarrowdownwardfilled1.svg"
                    />
                    <div className="h-px w-[1156px] absolute !m-[0] bottom-[-1px] left-[0px] border-divider border-[1px] border-solid box-border" />
                  </div>
                  <div className="self-stretch overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>
                            <TableHead
                              checkbox={false}
                              small={false}
                              leftSort={true}
                              rightSort={true}
                              showTableHead
                              head="Product"
                              showHead
                            />
                          </th>
                          <th>
                            <TableHead
                              checkbox={false}
                              small={false}
                              leftSort={true}
                              rightSort={true}
                              showTableHead
                              head="Date"
                              showHead
                            />
                          </th>
                          <th>
                            <TableHead
                              checkbox={false}
                              small={false}
                              leftSort={true}
                              rightSort={true}
                              showTableHead
                              head="Time spent"
                              showHead
                            />
                          </th>
                          <th>
                            <TableHead
                              checkbox={false}
                              small={false}
                              leftSort={true}
                              rightSort={true}
                              showTableHead
                              head="Order Value"
                              showHead
                            />
                          </th>
                          <th>
                            <TableHead
                              checkbox={false}
                              small={false}
                              leftSort={true}
                              rightSort={true}
                              showTableHead
                              head="Commission"
                              showHead
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {initialData.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td>
                              <CustomTableCustomCell
                                type="Avatar + Text"
                                text={item.product}
                                image="/default-icon.svg"
                              />
                            </td>
                            <td className="p-4">
                              <div className="flex flex-col">
                                <span>{item.date}</span>
                                <span className="text-sm text-gray-500">{item.time}</span>
                              </div>
                            </td>
                            <td className="p-4">{item.timeSpent}</td>
                            <td className="p-4">${item.orderValue.toFixed(2)}</td>
                            <td className="p-4">${item.commission}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="w-[1156px] h-px absolute !m-[0] right-[-1140px] bottom-[36px] border-divider border-[1px] border-solid box-border" />
                  <div className="self-stretch hidden flex-row items-center justify-center relative [row-gap:20px] max-w-full z-[22] text-base font-typography-caption lg:flex-wrap">
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 box-border max-w-full z-[0] text-sm font-typography-body-2">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <CustomTableCustomCell
                          type="Avatar + Text"
                          customTableCustomCellAlignSelf="stretch"
                        />
                        <div className="hidden flex-col items-start justify-start">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 z-[1] text-sm font-typography-body-2">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <CustomTableCustomCell
                          type="Avatar + Text"
                          customTableCustomCellAlignSelf="stretch"
                        />
                        <div className="hidden flex-col items-start justify-start">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 z-[2]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[-0.01em] leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          24 Apr ‘2024
                        </div>
                        <div className="relative text-xs leading-[166%] overflow-hidden text-ellipsis whitespace-nowrap">
                          10:24 AM
                        </div>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 z-[3]">
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="relative tracking-[-0.01em] leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          $120,21
                        </div>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 z-[4]">
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <b className="relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          $55
                        </b>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 box-border min-w-[84px] z-[5] text-xs text-text-disabled lg:min-h-[auto]">
                      <div className="flex flex-row items-start justify-center gap-3">
                        <div className="relative leading-[166%]">View Chat</div>
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-px w-[calc(100%_-_48px)] absolute !m-[0] right-[48px] bottom-[-1px] left-[0px] border-divider border-[1px] border-solid box-border z-[6]" />
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-center relative [row-gap:20px] max-w-full z-[23] text-base font-typography-caption lg:flex-wrap">
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 box-border max-w-full z-[0] text-sm font-typography-body-2">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <CustomTableCustomCell
                          type="Avatar + Text"
                          customTableCustomCellAlignSelf="stretch"
                        />
                        <div className="hidden flex-col items-start justify-start">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 z-[1] text-sm font-typography-body-2">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <CustomTableCustomCell
                          type="Avatar + Text"
                          customTableCustomCellAlignSelf="stretch"
                        />
                        <div className="hidden flex-col items-start justify-start">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 z-[2]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[-0.01em] leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          24 Apr ‘2024
                        </div>
                        <div className="relative text-xs leading-[166%] overflow-hidden text-ellipsis whitespace-nowrap">
                          10:24 AM
                        </div>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 z-[3]">
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="relative tracking-[-0.01em] leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          $120,21
                        </div>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 z-[4]">
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <b className="relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          $55
                        </b>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 box-border min-w-[84px] z-[5] text-xs text-text-disabled lg:min-h-[auto]">
                      <div className="flex flex-row items-start justify-center gap-3">
                        <div className="relative leading-[166%]">View Chat</div>
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-px w-[calc(100%_-_48px)] absolute !m-[0] right-[48px] bottom-[-1px] left-[0px] border-divider border-[1px] border-solid box-border z-[6]" />
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-center relative [row-gap:20px] max-w-full z-[24] text-base font-typography-caption lg:flex-wrap">
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 box-border max-w-full z-[0] text-sm font-typography-body-2">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <CustomTableCustomCell
                          type="Avatar + Text"
                          customTableCustomCellAlignSelf="stretch"
                        />
                        <div className="hidden flex-col items-start justify-start">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 z-[1] text-sm font-typography-body-2">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <CustomTableCustomCell
                          type="Avatar + Text"
                          customTableCustomCellAlignSelf="stretch"
                        />
                        <div className="hidden flex-col items-start justify-start">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-start py-[15px] px-4 z-[2]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[-0.01em] leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          24 Apr ‘2024
                        </div>
                        <div className="relative text-xs leading-[166%] overflow-hidden text-ellipsis whitespace-nowrap">
                          10:24 AM
                        </div>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 z-[3]">
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="relative tracking-[-0.01em] leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          $120,21
                        </div>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 z-[4]">
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <b className="relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                          $55
                        </b>
                        <div className="hidden flex-col items-start justify-start text-sm font-typography-body-2">
                          <div className="w-[77px] h-[22px] relative leading-[157%] inline-block">
                            Typography
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-helpers-clickable-empty-areas flex flex-row items-start justify-end py-[15px] px-4 box-border min-w-[84px] z-[5] text-xs text-text-disabled lg:min-h-[auto]">
                      <div className="flex flex-row items-start justify-center gap-3">
                        <div className="relative leading-[166%]">View Chat</div>
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-px w-[calc(100%_-_48px)] absolute !m-[0] right-[48px] bottom-[-1px] left-[0px] border-divider border-[1px] border-solid box-border z-[6]" />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
      {showChat && <AIChatBox />}
    </div>
  );
};

export default WingmanStoreSampleDashboa;
