import { SideBarLayout } from "../components/Layouts/sidebar-layout"

export const ReportsView: React.FC = () => {

  return (
    <>
      <SideBarLayout>
        <div className="h-full w-full text-black text-[50px] ml-[200px]">
          hey!
        </div>
      </SideBarLayout>
    </>
  )
}


export default function Reports() {
  return <ReportsView />
}
