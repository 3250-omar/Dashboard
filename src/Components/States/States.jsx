import { empolyeesData } from "../../constants";
import Balance from "./Balance";
import Card from "./Card";

const States = ({ darkMode }) => {
  return (
    <div className="flex-col gap-5 md:flex-row flex">
      <div className="flex flex-col gap-4 h-full">
        {empolyeesData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      <Balance darkMode={darkMode} />
    </div>
  );
};

export default States;
