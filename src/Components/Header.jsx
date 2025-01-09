import { HiMenuAlt1 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header = ({ darkMode, toggleTheme, toggleSideBar }) => {
  return (
    <nav className=" fixed top-0 left-0 border-b-2 border-gray-200 bg-white dark:bg-gray-800 w-full dark:border-gray-500 flex items-center justify-between px-3 py-2 dark:text-white z-50">
      <div className="flex items-center justify-between gap-3">
        <HiMenuAlt1
          className="text-xl cursor-pointer hover:bg-gray-100 hover:rounded dark:hover:bg-gray-500"
          onClick={toggleSideBar}
        />
        <a href="#">
          <div className="flex items-center justify-between gap-2">
            <MdSpaceDashboard className="text-violet-500 text-xl" />
            <span className="text-xl font-semibold ">DaxBod</span>
          </div>
        </a>
      </div>
      <button
        className="rounded-full  p-2 dark:bg-white text-black"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleTheme}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Header;
