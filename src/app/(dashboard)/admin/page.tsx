import UserCard from "@/components/user-card";

const AdminPage = () => {
  return (
    <div className="p-4">
      <div className="flex flex-row gap-4 justify-between flex-wrap">
        <UserCard type="admin" />
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
      </div>
    </div>
  );
};

export default AdminPage;
