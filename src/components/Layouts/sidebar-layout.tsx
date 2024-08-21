import React, { ReactNode } from "react"
import { LeftSideMenu } from "../Menus/left-side"

type Props = {
  children: ReactNode
}

export const SideBarLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`flex items-start relative w-full `}>
      <LeftSideMenu />
      <div className="pl-[36px] min-h-screen w-full p-[20px_0] bg-white">

      {children}
      </div>
    </div>
  )
}
