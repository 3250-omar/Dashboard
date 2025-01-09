import { FiSend } from "react-icons/fi";
import Title from "../ProfileComponents/Title";
import BarChart from "./BarChart";

const Balance = ({ darkMode }) => {
  return (
    <div
      className="p-5 bg-white rounded-2xl dark:bg-gray-600
     dark:text-gray-300 flex-1 gap-5"
    >
      <div className="flex items-center justify-between gap-4">
        <Title>Balance</Title>
        <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 size-8" />
      </div>
      <div
        className="flex justify-start gap-2 flex-col
      "
      >
        <h1 className="text-2xl font-bold ">
          $600,000 <span className="text-md">(USD)</span>
        </h1>
        <span>On June 2025</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Balance;
