const Member = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4 ">
        <img
          src={user.image}
          alt={user.name}
          className="size-14 rounded-full "
        />
        <div className="flex flex-col ">
          <span className="font-bold">{user.name}</span>
          <span className="text-sm ">{user.country}</span>
        </div>
      </div>
      <div
        className={`${user.bgColor} h-min rounded-full p-1.5 font-semibold dark:text-gray-300 dark:bg-gray-500 text-center`}
      >
        {user.role}
      </div>
    </div>
  );
};

export default Member;
