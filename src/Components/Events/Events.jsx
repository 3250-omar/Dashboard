import { events } from "../../constants";
import Item from "./Item";
import Title from "../ProfileComponents/Title";

const Events = () => {
  return (
    <div className="p-5 bg-white rounded-2xl flex flex-col gap-5 flex-1 dark:bg-gray-600 dark:text-gray-300">
      <Title>
        Events
      </Title>
      {events.map((event, index) => (
        <Item key={index} event={event} />
      ))}
    </div>
  );
};

export default Events;
