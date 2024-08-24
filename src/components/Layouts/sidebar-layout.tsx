import React, { ReactNode } from "react";
import { LeftSideMenu } from "../Menus/left-side";
import { SearchIcon } from "../Icons/search";
import { HomeIcon } from "../Icons/home-icon";

type Props = {
  children: ReactNode;
};

export const SideBarLayout: React.FC<Props> = ({ children }) => {
  const [openNav, setOpenNav]= React.useState(false)
  return (
    <div className={`lg:flex  items-start relative w-full  `}>
      <div className="hidden sticky top-0 lg:block">

      <LeftSideMenu />
      </div>
      
        <div className={`fixed top-0 right-0 duration-300 z-[10001] max-w-0 overflow-hidden ${openNav===true && "max-w-[200px]"}`}>
          <LeftSideMenu setOpen={setOpenNav}/>
        </div>
      <nav className="lg:hidden sticky border-b-2 bg-white top-0 py-4 px-3 ">
        <div className="flex w-full justify-between">
          <button onClick={()=>[
            setOpenNav(!openNav)
          ]}>

        <img
          src={'/images/logo-grey.png'}
          alt="company logo"
          className="h-[28px] w-[28px]"
        />
          </button>
          <div className="relative z-10 pl-2  overflow-hidden  text-text hover:text-secondary_text">
            <SearchIcon className="absolute top-1/2 left-1/2 z-1 -translate-x-1/3 -translate-y-1/2" />
            <input
              type="search"
              className="outline-none duration-300 bg-transparent relative z-10 w-[30px] h-[30px] hover:w-[200px]  hover:pl-6 hover:placeholder:text-text focus:w-[200px] placeholder:text-transparent focus:placeholder:text-text  placeholder:font-medium leading-[1.065rem]  text-sm placeholder:text-sm   border-transparent focus:outline-none  focus:border-b   focus:border-stroke "
              placeholder="Search..."
              name=""
              id=""
            />
          </div>
        </div>
      </nav>
      <div className="lg:pl-[36px] min-h-screen w-full p-[12px_0] lg:p-[20px_0] bg-white">
        {children}
      </div>
    </div>
  );
};
