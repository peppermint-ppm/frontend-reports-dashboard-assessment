import { DeviceBreakdown, Metrics, TestReport } from "@/types";
import Link from "next/link";
import { InfoIcon } from "./Icons/info";

type Props ={devices: TestReport["deviceBreakdown"]};
export const DeviceUsage = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h5 className="lg:text-sm text-xs leading-[1.06rem] font-medium">
              Device usage
            </h5>{" "}
            <span>
              <InfoIcon className="inline" />
            </span>
          </div>
          <Link
            href={"/"}
            className="text-violet text-xs lg:text-sm hover:opacity-80 duration-150"
          >
            Browser
          </Link>
        </div>
        {props.devices.map((data) => {
          return (
            <div className="flex justify-between text-secondary_text items-center">
              <div className="flex gap-2 items-center">
                <h5 className="lg:text-base text-xs leading-[1.60725rem] text-[#1A1F36] ">
                  {data.name}
                </h5>{" "}
              </div>
              <p className="text-secondary_text lg:text-base text-xs hover:opacity-80 duration-150">
                {data.count}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
