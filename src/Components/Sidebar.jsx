import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv} from 'react-icons/hi2'
import{ HiPlus, } from 'react-icons/hi'

import { useState } from "react"
import { FaChevronLeft } from "react-icons/fa"
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    
    const Menus = [
        {
            id: 1,
            name: 'HOME',
            icon:HiHome
        },
        {
            id: 2,
            name: 'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            id: 3,
            name: 'WATCH LIST',
            icon:HiPlus
        },
        {
            id: 4,
            name: 'MOVIES',
            icon:HiPlayCircle
        },
        {
            id: 5,
            name: 'SERIES',
            icon:HiTv
        }
    ]
    return (
        <> 
        <div className={`${open ? 'w-72' : 'w-28'} p-5 pr-0 pt-8 duration-300 text-white bg-sub-bg relative`}>
            <button onClick={() => setOpen(!open)} className={`absolute cursor-pointer right-[-0.75rem] top-12 rounded-full bg-sub-bg border-2 border-sea-green ${!open && 'rotate-180'}`}>
                <div className="p-[3px]"><FaChevronLeft color="#3dd2cc"/></div>
            </button>
            <div className="flex gap-x-4 items-center my-1 p-4">
                <img src="./src/Assets/img/logo.png" width={50} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>
                <h1  className={`text-white origin-left font-medium text-m duration-200 ${!open && "scale-0"}`} > Film Nest </h1>
            </div>
            <ul className='mt-5'>
                {Menus.map((menu, index) => (
                    <li key={index} className={`cursor-pointer text-sm gap-x-4 flex items-center p-4 text-white rounded-l-lg dark:text-white hover:bg-[#191919] dark:hover:bg-gray-700 group`}>
                    <SidebarItem Icon={menu.icon}/>
                    <span className={`${!open && "hidden"} block origin-left duration-200`}> {menu.name}</span>
                </li>
                ))}
            </ul>

        </div>
        </>
    )
}

export default Sidebar