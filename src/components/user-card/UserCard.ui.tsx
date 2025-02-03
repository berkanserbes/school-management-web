import Image from "next/image";
import { UserCardProps } from "./UserCard.type";

const UserCardUI = ({ type }: UserCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl odd:bg-green-300 even:bg-yellow-300 flex-1 min-w-[130px] p-4">
      <div className="flex flex-row justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">5010</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCardUI;
