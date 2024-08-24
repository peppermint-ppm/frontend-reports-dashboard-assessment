import { Metrics } from "@/types";
import Link from "next/link";
import { InfoIcon } from "./Icons/info";

type Props =Pick<Metrics, "taskCompletion" | "totalTasks">
export const CompletionRate = ({totalTasks,taskCompletion}: Props) => {
    return ( 
        <div>
               <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <h5 className="text-xs lg:text-sm leading-[1.06rem] font-medium">
                      Task Completion
                    </h5>{" "}
                    <span>
                      <InfoIcon className="inline" />
                    </span>
                  </div>
                  <Link
                    href={"/"}
                    className="text-violet text-[10px] lg:text-sm hover:opacity-80 duration-150"
                  >
                    View
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <h5 className="lg:text-xl text-sm leading-[1.60725rem] text-[#1A1F36] font-medium">
                     {taskCompletion}%
                    </h5>{" "}
                  </div>
                  <p className="text-secondary_text hover:opacity-80 duration-150">
                   {totalTasks}
                  </p>
                </div>
                <div className="flex text-secondary_text justify-between items-center">
                  <div className="flex text-xs leading-[0.90725rem] gap-2 items-center">
                    <h5 className="  font-medium">Overall completion rate</h5>{" "}
                  </div>
                  <p className="text-secondary_text text-[10px] lg:text-sm  hover:opacity-80 duration-150">
                    Total tasks
                  </p>
                </div>
              </div>
        </div>
    );
}