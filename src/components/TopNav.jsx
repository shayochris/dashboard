import { useTheme } from '../contexts/ThemeContext';

//images
import avatar from '../assets/avatar.jpg';

//icons
import { IoMenu, IoSearch } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import Sidebar from './Sidebar';
import { useState } from 'react';

export default function TopNav(props) {
  const {theme, ToggleTheme} = useTheme();
  const [drawer, setDrawer] = useState(false);
  return (
    <div className="border-b bordered p-3 flex-b sticky top-0 bg-white dark:bg-[#121212]">

      <div className="flex-a">
        <div className="hidden lg:block">
         <IoMenu onClick={props.toggleSidebar} className="w-6 h-6 mr-2" />
        </div>

        <div className="lg:hidden">
         <IoMenu onClick={() => setDrawer(true)} className="w-6 h-6 mr-2" />
        </div>

        <p>Dashboard</p>
      </div>

      <div className="flex-a">
        <IoSearch className="w-5 h-5" />
        { theme === 'light' ?
          <MdDarkMode onClick={ToggleTheme} className="w-6 h-6 ml-3" /> :
          <MdLightMode onClick={ToggleTheme} className="w-6 h-6 ml-3" />
        }
        <div className="border-l-[1.5px] bordered ml-3">
          <div className="w-6 h-6 rounded-full overflow-hidden ml-3">
            <img src={avatar} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* mobile navigation */}

      { 
        drawer && 
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/50 flex">
          <div className='w-[70%] sm:w-[40%] md:w-[30%] bg-white dark:bg-[#181818] h-full p-2 overflow-y-scroll' >
            <Sidebar/>
          </div>
          <div onClick={() => setDrawer(false) } className='w-[30%] sm:[w-60%] md:w-[70%] h-full'/>
        </div>
      }
    </div>
  )
}
