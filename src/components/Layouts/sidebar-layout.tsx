import React, { ReactNode } from "react"
import { LeftSideMenu } from "../Menus/left-side"

type Props = {
  children: ReactNode
}

export const SideBarLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`flex items-start`}>
      <LeftSideMenu />
      {children}
    </div>
  )
}
