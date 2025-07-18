import { AiOutlineFolder, AiOutlineHome } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { GiCalendar } from "react-icons/gi";
import { MdOutlineContactEmergency} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function SideBar() {
  return (
    <div className="bg-[#1D2434] w-64 fixed h-full p-4 sm:z-50">
      <aside>
        <div className="flex flex-row items-center pb-4 mb-4 mr-8 border-b border-gray-700">
          <div className="flex flex-col items-center justify-center ml-8">
            <h1 className="text-center text-2xl font-bold text-gray-200 ">
              NanTask
            </h1>
            <p className="text-sm text-gray-500">design@nan.com</p>
          </div>
        </div>

        <ul className="space-y-2 text-lg ml-6">
          <li className="text-gray-300 hover:text-white cursor-pointer py-1">
            <a href="/" className="flex flex-row space-x-2 items-center">
              <AiOutlineHome size={25} />
              <span>Home</span>
            </a>
          </li>

          <li className="text-gray-300 hover:text-white cursor-pointer py-1">
            <a href="/task" className="flex flex-row space-x-3 items-center">
              <FiMail size={25} />
              <span>My Tasks</span>
              <span className="bg-indigo-600 rounded-lg text-lg px-1"></span>
            </a>
          </li>

          <li className="text-gray-300 hover:text-white cursor-pointer py-1">
            <a href="#" className="flex flex-row space-x-3 items-center">
              <AiOutlineFolder size={25} />
              <span>Projects</span>
            </a>
          </li>

          <li className="text-gray-300 hover:text-white cursor-pointer py-1">
            <a href="#" className="flex flex-row space-x-3 items-center">
              <GiCalendar size={25} />
              <span>Calender</span>
            </a>
          </li>

          <h2 className="text-gray-400 mt-4 text-sm">Other</h2>

          <li className="text-gray-300 hover:text-white cursor-pointer py-1">
            <a href="#" className="flex flex-row space-x-3 items-center">
              <MdOutlineContactEmergency size={25} />
              <span>Help center</span>
            </a>
          </li>

          <li className="text-gray-300 hover:text-white cursor-pointer py-1">
            <a href="#" className="flex flex-row space-x-3 items-center">
              <IoSettingsOutline size={25} />
              <span>Settings</span>
            </a>
          </li>
        </ul>
        
      </aside>
    </div>
  );
}

export default SideBar;
