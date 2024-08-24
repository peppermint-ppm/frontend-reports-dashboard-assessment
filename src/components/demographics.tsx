"use client";

import { InfoIcon } from "./Icons/info";
import { TestReport } from "@/types";
import { CompletionRate } from "./completion-rate";
import { UserSatisfaction } from "./user-satisfaction";
import { DeviceUsage } from "./device-usage";

import Map from "./Map/map";

import geoData from "@/geoJson.json";
import L, {
  divIcon,
  GeoJSON,
  GeoJSONOptions,
  TileLayer,
  Marker,
  Popup,
} from "leaflet";
import {
  TileLayerProps,
  GeoJSONProps,
  MarkerProps,
  PopupProps,
} from "react-leaflet";
import { GeoJsonObject, GeoJsonTypes } from "geojson";


type TileLayerType = import("react").ForwardRefExoticComponent<
  TileLayerProps & import("react").RefAttributes<TileLayer>
>;
type GeoJsonType = import("react").ForwardRefExoticComponent<
  GeoJSONProps &
    import("react").RefAttributes<GeoJSON<any, import("geojson").Geometry>>
>;
type MarkerType = import("react").ForwardRefExoticComponent<
  MarkerProps & import("react").RefAttributes<Marker<any>>
>;
type PopupType = import("react").ForwardRefExoticComponent<
  PopupProps & import("react").RefAttributes<Popup>
>;
type Props = Omit<TestReport, "testInfo">;
export const DemographicsComponent = ({
  metrics,
  deviceBreakdown,
  locationBreakdown,
}: Props) => {
  function addCountToData() {
    const countMap: { [key: string]: number } = {};

    locationBreakdown.forEach((item) => {
      countMap[item.country] = item.count;
    });

    return geoData.features.map((item) => ({
      ...item,
      count: countMap[item.properties.name] || 0,
    }));
  }
  geoData.features = addCountToData();

  function getColor(d: number) {
    return d > 10 ? "#635BFF" : d >= 5 ? "#635BFF4D" : "#635BFF1A";
  }
  function style(feature: (typeof geoData)["features"] & { count: number }) {
    return {
      fillColor: getColor(feature.count),
      weight: 0.1,
      fillOpacity: 1,
      opacity: 1,
      color: "#635BFF",
      fill: true,
    };
  }

  function convertDate() {
    const date = new Date();
    const dateString = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);

    return dateString;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-4 lg:gap-8">
        <div className="w-full">
          <h3 className="text-[#1A1F36] px-5 lg:px-0 align-top text-base lg:font-bold font-semibold leading-[2.13rem] lg:text-[1.75rem]">
            Demographics
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex w-full border-y  flex-wrap lg:flex-nowrap  gap-6 lg:gap-10 border-stroke ">
            <div className="flex flex-col w-full lg:w-max gap-5 lg:basis-1/2 px-5 lg:px-10">
              <div className="p-[20px_0_32px] border-b">
                <CompletionRate
                  taskCompletion={metrics.taskCompletion}
                  totalTasks={metrics.totalTasks}
                />
              </div>
              <div className="p-[20px_0_32px] border-b">
                <UserSatisfaction metrics={metrics} />
              </div>
              <div className="p-[20px_0_32px]">
                <DeviceUsage devices={deviceBreakdown} />
              </div>
            </div>
            <div className="border-l lg:p-[20px_0_32px] w-full  px-5  lg:w-max lg:basis-[46%]">
              <div className="lg:px-5">
                <div className="flex text-xs lg:text-sm leading-[16.49px] mb-[7px]  justify-between">
                  <p>Location</p>
                  <p className="text-[#5469D4]">View</p>
                </div>
                <div className="  rounded-lg  lg:rounded-none overflow-clip">
                  
                    <Map
                      width={800}
                      height={500}
                      style={{ backgroundColor: "white" }}
                      center={[
                        locationBreakdown[0].lat,
                        locationBreakdown[0].long,
                      ]}
                      zoom={0.5}
                    >
                      {({
                        TileLayer,
                        Marker,
                        Popup,
                        GeoJSON,
                      }: {
                        TileLayer: TileLayerType;
                        Marker: MarkerType;
                        Popup: PopupType;
                        GeoJSON: GeoJsonType;
                      }) => (
                        <>
                          <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/LIGHT/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          />
                          <GeoJSON
                            attribution="&copy; credits due..."
                            data={geoData as unknown as GeoJsonObject}
                            style={style as unknown as GeoJSONOptions}
                          />
                          {locationBreakdown.map((data) => {
                            return (
                              <Marker
                              // icon={L.divIcon({
                              //   iconSize: [12, 12],
                              //   iconAnchor: [12 / 2, 12 + 9],
                              //   className: "mymarker",
                              //   html: "😁",
                              // })}
                                position={[Number(data.lat), Number(data.long)]}
                              >
                                <Popup
                                  position={[
                                    Number(data.lat),
                                    Number(data.long),
                                  ]}
                                >
                                  {data.country}
                                  <span className="bg-success ml-2 p-1 rounded">
                                    {data.count}
                                  </span>
                                </Popup>
                                //{" "}
                              </Marker>
                            );
                          })}
                        </>
                      )}
                    </Map>
                
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full px-5 lg:px-0 text-[9px] lg:text-sm leading-[16.94] font-medium justify-between">
            <div className="">
              <p>
                Last Updated: <span>{convertDate()}</span>
              </p>
            </div>
            <div className="">
              <p>Data source: Peppermint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
