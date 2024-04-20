
import Sidebar from "../components/Sidebar";

//icons
import { MdDarkMode, MdLightMode,MdAccountCircle  } from "react-icons/md";
import { IoMenu, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { useTheme } from "../contexts/ThemeContext";

import { useState } from "react";
import TopNav from "../components/TopNav";

export default function Home() {
  let [sidebarStyle,setSidebarStyle] = useState('hidden w-[20%] lg:block sidebar');
  let [mainbarStyle,setMainbarStyle] = useState('w-full lg:w-[80%] overflow-y-scroll');
  let [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () =>{
    setShowSidebar(!showSidebar);
    if(showSidebar){
      setSidebarStyle('hidden');
      setMainbarStyle('w-full');
    }
    else{
      setSidebarStyle('hidden w-[20%] lg:block sidebar');
      setMainbarStyle('w-full lg:w-[80%]');
    }
  }

  return (
    <div className="wrapper flex">
      <div className={sidebarStyle}>
        <Sidebar/>
      </div>

      <div className={mainbarStyle}>
        <TopNav  
          toggleSidebar = {toggleSidebar}
        />
        <div className="p-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
            <div className="border bordered shadow-sm p-4">
              <p className="text-sm text-gray-500">Total Income</p>
              <p className="text-xl font-semibold my-2" >Tsh 23,500,000</p>
              <button className="py-1 px-2 text-xs bg-green-500/50 rounded-lg">
                + 0.003%
              </button>
              <span className="ml-2 text-gray-500 text-xs">compared to last month</span>
            </div>
            <div className="border bordered shadow-sm p-4">
              <p className="text-sm text-gray-500">Profit</p>
              <p className="text-xl font-semibold my-2" >Tsh 10,000,000</p>
              <button className="py-1 px-2 text-xs bg-green-500/50 rounded-lg">
                + 0.003%
              </button>
              <span className="ml-2 text-gray-500 text-xs">compared to last month</span>
            </div>
            <div className="border bordered shadow-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500">Total Views</p>
              <p className="text-xl font-semibold my-2" >500,000</p>
              <button className="py-1 px-2 text-xs bg-red-500/50 rounded-lg">
                - 3%
              </button>
              <span className="ml-2 text-gray-500 text-xs">compared to last month</span>
            </div>
            <div className="border bordered shadow-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <p className="text-xl font-semibold my-2" >4.83%</p>
              <button className="py-1 px-2 text-xs bg-green-500/50 rounded-lg">
                + 0.003%
              </button>
              <span className="ml-2 text-gray-500 text-xs">compared to last month</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
