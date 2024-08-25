"use client";

import { Metrics } from "@/types";
import Link from "next/link";
import { InfoIcon } from "./Icons/info";

type Props = { metrics: Metrics };
export const UserSatisfaction = ({ metrics }: Props) => {
  function getVariableName(variable: number) {
    let name;
    const allKeys = Object.keys(metrics);

    for (let i = 0; i <= allKeys.length; i++) {
      if (metrics[allKeys[i]] === variable) {
        name = allKeys[i];
      }
    }
    return name;
  }

  const metricsArray = [metrics.ces, metrics.nps, metrics.sus];

  const getRemarksFrommetric = (value: number) => {
    if (value > 60) {
      return {
        text: "Grade B",
        name: getVariableName(value),
        getPos: "lg:justify-start",
        bgColor: "bg-success",
        textColor: "text-[#0E6245]",
      };
    } else if (value < 50 && value > 20) {
      return {
        text: "Good",
        name: getVariableName(value),
        getPos: "lg:justify-center",
        bgColor: "bg-warning",
        textColor: "text-[#9C3F0F]",
      };
    }
    return {
      text: "Average",
      name: getVariableName(value),
      getPos: "lg:justify-end",
      bgColor: "bg-warning",
      textColor: "text-[#9C3F0F]",
    };
  };

  return (
    <div>
      <div className="flex flex-col w-full gap-1.5">
        <div className="flex flex-col gap-4 lg:gap-[7px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h5 className="text-xs lg:text-sm leading-[1.06rem] font-medium">
                User satisfaction score
              </h5>{" "}
              <span>
                <InfoIcon className="inline" />
              </span>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-6 justify-between xl:items-center">
            {metricsArray.reverse().map((metric, index) => (
              <div
                key={index}
                className={`flex items-center  justify-between  w-full  lg:max-w-[100px] flex-wrap gap-1.5  ${
                  getRemarksFrommetric(metric).getPos
                } `}
              >
                <h5 className="lg:text-xl text-sm  leading-[1.60725rem] text-[#1A1F36] font-medium">
                  {metric}
                </h5>{" "}
                <div className="flex flex-row lg:hidden lg:flex-col  gap-1.5">
                  <div
                    className={`   rounded font-medium lg:text-xs text-[9px] whitespace-nowrap  p-[2px_6px] ${
                      getRemarksFrommetric(metric).bgColor
                    } ${getRemarksFrommetric(metric).textColor}`}
                  >
                    {getRemarksFrommetric(metric).text}
                  </div>
                  <div className="flex gap-2 order-1 w-full  items-center">
                    <h5 className="leading-[1.06rem] uppercase text-xs lg:text-sm">
                      {getRemarksFrommetric(metric).name}
                    </h5>{" "}
                    <span>
                      <InfoIcon className="inline" />
                    </span>
                  </div>{" "}
                </div>
                <div
                  className={`   rounded font-medium text-xs hidden  lg:block p-[2px_6px] ${
                    getRemarksFrommetric(metric).bgColor
                  } ${getRemarksFrommetric(metric).textColor}`}
                >
                  {getRemarksFrommetric(metric).text}
                </div>
                <div
                  className={`lg:flex gap-2 order-1 hidden w-full    items-center  ${
                    getRemarksFrommetric(metric).getPos
                  } `}
                >
                  <h5 className="leading-[1.06rem] uppercase text-xs lg:text-sm">
                    {getRemarksFrommetric(metric).name}
                  </h5>{" "}
                  <span>
                    <InfoIcon className="inline" />
                  </span>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
