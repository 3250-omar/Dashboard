const Main = ({ children }) => {
  return (
    <div className="px-3 pt-14 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-white flex justify-between flex-col lg:flex-row gap-2 pb-4 ">
      {children}
    </div>
  );
};

export default Main;
