import type { NextPage } from "next";
import Image from "next/image";
import Top1 from "./top1";

export type SideNavStoreType = {
  className?: string;

  /** Variant props */
  location1?: string;
};

const SideNavStore: NextPage<SideNavStoreType> = ({
  className = "",
  location1 = "Settings",
}) => {
  return (
    <div
      className={`bg-success-shades-800 border-divider border-r-[1px] border-solid box-border h-[1080px] flex flex-col items-start justify-between ${className}`}
      data-location={location1}
    >
      <Top1 />
      <div className="w-[60px] overflow-hidden flex flex-col items-center justify-center py-6 px-4 box-border">
        <div className="rounded-lg flex flex-col items-center justify-center">
          <div className="rounded-lg flex flex-col items-center justify-center p-2">
            <Image
              className="w-5 h-5 relative"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/gear.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavStore;
