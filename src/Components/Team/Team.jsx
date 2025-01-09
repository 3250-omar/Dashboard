import { users } from "../../constants";
import Title from "../ProfileComponents/Title";
import Member from "./Member";

const Team = () => {
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex flex-col gap-5 flex-1  ">
      <Title>Team</Title>
      {users.map((user, index) => (
        <Member key={index} user={user} />
      ))}
    </div>
  );
};

export default Team;
