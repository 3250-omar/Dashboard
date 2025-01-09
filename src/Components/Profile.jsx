import DonutChart from "./ProfileComponents/DonutChart";
import ShortCut from "./ProfileComponents/ShortCut";
import User from "./ProfileComponents/user";

const Profile = () => {
  return (
    <div className="px-2 py-4 rounded-lg bg-gray-200 w-full lg:w-60 xl:w-80 dark:bg-gray-700 dark:text-white flex flex-col gap-4 justify-between">
      <User />
      <ShortCut/>
      <DonutChart/>
    </div>
  );
};

export default Profile;
