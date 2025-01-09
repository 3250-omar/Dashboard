const Item = ({ event }) => {
  return (
    <div className="bg-white dark:bg-gray-600 dark:text-gray-300 flex gap-4 items-center">
      <span className="bg-gray-300 text-gray-700 h-17 w-17 rounded-lg p-2 text-center">{event.date}</span>
      <div className="flex flex-col ">
        <h1 className="text-xl font-bold">{event.title}</h1>
        <span className="text-gray-400">{event.description}</span>
      </div>
    </div>
  );
};

export default Item;
