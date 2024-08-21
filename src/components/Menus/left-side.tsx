import React, { useContext } from "react"
import { useRouter } from "next/router"
import { HomeIcon } from "../Icons/home-icon"
import { ReportsIcon } from "../Icons/reports-icon"

type Props = {}

export const LeftSideMenu: React.FC<Props> = ({ }) => {
  const router = useRouter();

  return (
    <nav className={`sticky top-0 left-0 w-[200px] h-[100vh] px-[2rem] py-[0.75rem] bg-[#F7F8F9] flex flex-col items-start`}>
      <div className="w-[120px] h-[30px] mb-[30px]">
        <img
          src="/images/peppermint-wordmark.png"
          alt="peppermint logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center space-x-3">
        <img
          src={'/images/logo-grey.png'}
          alt="company logo"
          className="h-[28px] w-[28px]"
        />
        <h4 className="text-[13px]">ABC Company</h4>
      </div>
      <div className="w-full">
        <ul className="mt-[2rem] space-y-2">
          <li
            onClick={() => {
              router.prefetch("/dashboard")
              setTimeout(() => router.push("/dashboard"), 350)
            }}
            className={`flex gap-[1.6rem] items-center cursor-pointer rounded-[0.4rem]`}>
            <HomeIcon
              className="h-[16px] w-[16px]"
              fill={"#4F566B"} />
            <p className="text-[13px] text-[#1A1F36] font-normal">
              Dashboard
            </p>
          </li>

          <li
            onClick={() => {
              router.prefetch("/dashboard/reports")
              setTimeout(() => router.push("/dashboard/reports"), 350)
            }}
            className={`flex gap-[1.6rem] items-center cursor-pointer rounded-[0.4rem]`}>
            <ReportsIcon
              className="h-[16px] w-[16px]"
              fill={"#4F566B"}
            />
            <p className="text-[13px] text-[#1A1F36] font-normal">
              Reports
            </p>
          </li>
        </ul>
      </div>
    </nav>
  )
}
