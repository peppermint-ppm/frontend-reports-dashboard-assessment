"use client"
import Button from "@/components/Buttons/Button";
import { DemographicsComponent } from "@/components/demographics";
import { SearchIcon } from "@/components/Icons/search";
import data from "@/data.json";

const ReportsPage = () => {
  return (
    <div className=" w-full text-text">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col w-full border-b pb-6  gap-8">
          <div className="flex justify-between w-full px-10 items-center  py-2">
            <div className="flex items-baseline gap-2 text-text hover:text-secondary_text">
              <SearchIcon className="" />
              <input
                type="search"
                className="outline-none duration-150  placeholder:font-medium leading-[1.065rem]  text-sm placeholder:text-sm  focus:outline-none focus:border-b-2 "
                placeholder="Search..."
                name=""
                id=""
              />
            </div>
            <div className="flex gap-4 -tracking-[0.15px]  font-medium ">
              <Button
                className="text-violet font-medium text-sm "
                variant="text"
                size="main"
                themeColor=""
              >
                Switch to Test Plan
              </Button>
              <Button
                variant="contained"
                size="main"
                themeColor="dark"
                className="font-semibold text-sm "
              >
                Share report
              </Button>
            </div>
          </div>
          <div className="flex gap-1.5   font-medium  -tracking-[0.15px] px-10 word-spacing-2 items-center text-sm ">
            <p>Reports</p>
            {" > "}
            <p className="text-violet">Wallet Feature</p>
          </div>

          <div className="text-sm font-medium px-10 flex items-center gap-4">
            <div className="bg-[#E3E8EE] rounded  p-[2px_6px] w-max ">
              <p>Usability study</p>
            </div>
            <div className="text-[15px] leading-[18.15px]">
              <p>13 March 2024 01:56 AM</p>
            </div>
          </div>
        </div>
        <div className="px-10 w-full">
          <DemographicsComponent
            metrics={data.metrics}
            locationBreakdown={data.locationBreakdown}
            deviceBreakdown={data.deviceBreakdown}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
