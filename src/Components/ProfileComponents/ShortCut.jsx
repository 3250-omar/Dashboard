import { shortcutLink } from "../../constants";
import Title from "./Title";
import { IoIosArrowForward } from "react-icons/io";

const ShortCut = () => {
  return (
    <div className="rounded-lg bg-white p-4 dark:bg-gray-600 dark:text-gray-300">
      <Title>ShortCuts</Title>
      {shortcutLink.map((list, index) => (
        <div
          key={index}
          className="flex justify-between items-center   rounded-lg p-1 
         "
        >
          <div className="flex items-center justify-normal gap-2 ">
            <div>{<list.icon />}</div>
            <span className="font-medium dark:text-gray-300">{list.title}</span>
          </div>
          <span className=" bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500 cursor-pointer">
            <IoIosArrowForward />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShortCut;
