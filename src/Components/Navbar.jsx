import { MdOutlineSearch } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex flex-wrap justify-around items-center fixed top-0 left-0 w-full sm:z-50 bg-white shadow-md px-4 md:px-10 py-3 lg:ml-64 md:ml-64">
      <div className="flex flex-col mb-2 md:mb-0">
        <h1 className="text-base md:text-xl font-semibold text-gray-800">
          Good Morning, User!
        </h1>
        <span className="text-xs md:text-sm text-gray-500">
          Let's make today productive
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="text-lg md:text-xl bg-gray-100 hover:bg-gray-200 transition p-2 rounded-full">
          <MdOutlineSearch />
        </button>
        <button className="text-lg md:text-xl bg-gray-100 hover:bg-gray-200 transition p-2 rounded-full">
          <IoNotificationsOutline />
        </button>
        <div className="h-10 w-10 md:h-12 md:w-12">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="h-full w-full rounded-full border-2 border-gray-300 object-cover cursor-pointer hover:scale-105 transition duration-200"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
