import UserCardUI from "./UserCard.ui";
import { UserCardProps } from "./UserCard.type";

const UserCardContainer = ({ type }: UserCardProps) => {
  return <UserCardUI type={type} />;
};

export default UserCardContainer;
