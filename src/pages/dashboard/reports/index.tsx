"use client";
import Button from "@/components/Buttons/Button";
import { DemographicsComponent } from "@/components/demographics";
import { SearchIcon } from "@/components/Icons/search";
import data from "@/data.json";

const ReportsPage = () => {
  return (
    <div className=" w-full text-text">
      <div className="flex flex-col gap-3 lg:gap-8">
        <div className="flex flex-col w-full border-b pb-6 gap-4  lg:gap-8">
          <div className="lg:flex order-1 hidden lg:order-0  justify-between w-full px-5 lg:px-10 items-center  py-2">
            <div className="lg:flex     items-baseline gap-2 text-text hover:text-secondary_text">
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
                className="text-violet font-medium text-[9px] lg:text-sm "
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
                <p className="hidden lg:block">Share report</p>
                <div className="lg:hidden ">

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7601 18.32C11.4101 18.49 11.4101 21.89 13.7601 22.06H19.3201C19.9901 22.06 20.6501 21.81 21.1401 21.36C22.7901 19.92 21.91 17.04 19.74 16.77C18.96 12.08 12.1801 13.86 13.7801 18.33"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
              </Button>
            </div>
          </div>
          <div className="flex gap-1.5 order-0 lg:order-2 font-medium  -tracking-[0.15px] lg:px-10 px-5 word-spacing-2 items-center text-xs lg:text-sm ">
            <p>Reports</p>
            {" > "}
            <p className="text-violet">Wallet Feature</p>
          </div>

          <div className="text-sm order-3 lg:order-2 font-medium px-5 lg:px-10 flex items-center gap-4">
            <div className="bg-[#E3E8EE] hidden lg:block rounded  p-[2px_6px] w-max ">
              <p>Usability study</p>
            </div>
            <div className="lg:text-[15px] text-xs leading-[18.15px]">
              <p>13 March 2024 01:56 AM</p>
            </div>
          </div>
        </div>
        <div className="lg:px-10   w-full">
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
