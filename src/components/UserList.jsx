import "./UserList.css";
import UserCard from "./UserCard";

function UserList({
  users,
  onDelete,
  onEdit,
}) {
  return (
    <div className="usersGrid">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default UserList;