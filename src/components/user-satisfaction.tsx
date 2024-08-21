import { Metrics } from "@/types";
import Link from "next/link";
import { InfoIcon } from "./Icons/info";

type Props = Pick<Metrics, "ces" | "sus" | "nps">;
export const UserSatisfaction = ({ sus, ces, nps }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-[7px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h5 className="text-sm leading-[1.06rem] font-medium">
                User satisfaction score
              </h5>{" "}
              <span>
                <InfoIcon className="inline" />
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <h5 className="text-xl leading-[1.60725rem] text-[#1A1F36] font-medium">{sus}</h5>{" "}
              <div className="bg-success rounded p-[2px_6px]">Grade B</div>
            </div>
            <div className="flex items-center gap-1.5">
              <h5 className="text-xl leading-[1.60725rem] text-[#1A1F36] font-medium">{nps}</h5>{" "}
              <div className="bg-warning rounded p-[2px_6px]">Grade B</div>
            </div>
            <div className="flex items-center gap-1.5">
              <h5 className="text-xl leading-[1.60725rem] text-[#1A1F36] font-medium">{ces}</h5>{" "}
              <div className="bg-warning rounded p-[2px_6px]">Grade B</div>
            </div>
          </div>
        </div>
        <div className="flex text-secondary_text upppercase justify-between text-right">
        <div className="flex gap-2 items-center">
              <h5 className="leading-[1.06rem] text-sm">
                Sus
              </h5>{" "}
              <span>
                <InfoIcon className="inline" />
              </span>
            </div> <div className="flex gap-2 items-center">
              <h5 className="leading-[1.06rem] text-sm">
                NPS
              </h5>{" "}
              <span>
                <InfoIcon className="inline" />
              </span>
            </div> <div className="flex gap-2 items-center">
              <h5 className="leading-[1.06rem] text-sm">
               XES
              </h5>{" "}
              <span>
                <InfoIcon className="inline" />
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};
