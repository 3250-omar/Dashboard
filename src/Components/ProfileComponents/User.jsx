import Avatar from "../../assets/user01.png";
const User = () => {
  return (
    <div className=" flex gap-3 items-center rounded-full bg-white p-4 dark:bg-gray-600 dark:text-gray-300">
      <img src={Avatar} alt="user image" className="w-14 h-14 rounded-full " />
      <div>
        <h3 className="font-semibold text-2xl ">Gouda</h3>
        <p className="text-sm"> Developer</p>
      </div>
    </div>
  );
};

export default User;
