import React from 'react'
import { NavLink } from "react-router-dom";

//icons
import { IoMenu,IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

export default function Sidebar(props) {
  const items = [
    { 
      name: 'overview', 
      path: '/', startIcon: 
      <RxDashboard className="w-5 h-5" /> 
    },
    { 
      name: 'patients', 
      path: '/settings', 
      startIcon: <IoSettingsOutline className="w-5 h-5" /> 
    },
    { 
      name: 'settings', 
      path: '/settings', 
      startIcon: <IoSettingsOutline className="w-5 h-5" /> 
    },
    { 
      name: 'appointment schedule', 
      path: '/settings', 
      startIcon: <IoSettingsOutline className="w-5 h-5" /> 
    },
    { 
      name: 'surgeries', 
      path: '/settings', 
      startIcon: <IoSettingsOutline className="w-5 h-5" /> 
    },
  ];
  return (
    <div className='p-4 h-full w-full'>
      <div className="mb-4" >
        <div className="flex-b">
          <p className="text-xl font-semibold">Logo</p>
        </div>
      </div>
      <div className="p-2">
        <div className="mb-4 text-gray-500">
          <p className="uppercase text-xs font-semibold">Menu</p>
        </div>

        {
          items.map(item => (
            <div className="flex-b mb-2 hover:bg-[#F0F0F0] dark:hover:bg-[#282828] rounded-lg">
              <NavLink to={`${item.path}`} className='w-full capitalize flex-a text-[14px] p-2' >
                <span className="">
                  {item.startIcon}
                </span>
                <span className="ml-3">
                  { item.name }
                </span> 
              </NavLink>
            </div>
          ))
        }

        {/* <div className="my-4 border-b bordered"/> */}

        {/* <div className="mb-4 text-gray-500">
          <p className="uppercase text-xs font-semibold">Settings</p>
        </div> */}
      </div>
    </div>
  )
}
