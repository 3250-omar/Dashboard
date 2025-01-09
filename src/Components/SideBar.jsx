import { links } from "../constants";
import LinkItem from "./LinkItem";

const SideBar = ({ isSideBarOpened }) => {
  return (
    <aside
      className={`h-screen w-64 p-y-10 bg-white fixed top-0 left-0 border-r border-gray-200 dark:bg-gray-800 z-40 pt-20 transition-transform 
        ${isSideBarOpened ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div>
        <ul className="h-full px-3 ">
          {links.map((link, index) => {
            return <LinkItem key={index} {...link} />;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
