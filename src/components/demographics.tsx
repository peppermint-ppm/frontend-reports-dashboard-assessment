"use client";
import Link from "next/link";
import { InfoIcon } from "./Icons/info";
import { TestReport } from "@/types";
import { CompletionRate } from "./completion-rate";
import { UserSatisfaction } from "./user-satisfaction";
import { DeviceUsage } from "./device-usage";
import Map from "./Map/map";

type Props = Omit<TestReport, "testInfo">;
export const DemographicsComponent = ({
  metrics,
  deviceBreakdown,
  locationBreakdown,
}: Props) => {
  const DEFAULT_CENTER = [38.907132, -77.036546];

  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-8">
        <div className="w-full">
          <h3 className="text-[#1A1F36] align-top font-bold leading-[2.13rem] text-[1.75rem]">
            Demographics
          </h3>
        </div>
        <div className="flex w-full border-t flex-wrap gap-10 border-stroke ">
          <div className="flex flex-col gap-5 lg:basis-1/2  px-10">
            <div className="p-[20px_0_32px] border-b">
              <CompletionRate
                taskCompletion={metrics.taskCompletion}
                totalTasks={metrics.totalTasks}
              />
            </div>
            <div className="p-[20px_0_32px] border-b">
              <UserSatisfaction
                sus={metrics.sus}
                ces={metrics.ces}
                nps={metrics.nps}
              />
            </div>
            <div className="p-[20px_0_32px] border-b">
              <DeviceUsage devices={deviceBreakdown} />
            </div>
          </div>
          <div className="border-l">
            <Map
              width="800"
              height="400"
              center={[locationBreakdown[0].lat, locationBreakdown[0].long]}
              zoom={3}
            >
              {({ TileLayer, Marker, Popup }) => (
                <>
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {locationBreakdown.map((data) => {
                    return(
                    <Marker
                      position={[
                        data.lat,
                        data.long,
                      ]}
                    >
                      <Popup>
                        {data.country}
                        <span className="bg-success p-1 rounded">
                          {data.count}
                        </span>
                      </Popup>
                    </Marker>);
                  })}
                </>
              )}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};
