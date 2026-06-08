import "./UserCard.css";

function UserCard({ user, onDelete, onEdit }) {
  return (
    <div className="userCard">
      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <h3 className="userName">
        {user.name}
      </h3>

      <p className="userInfo">
        📧 {user.email}
      </p>

      <p className="userInfo">
        📱 {user.phone}
      </p>

      <div className="buttonGroup">
        <button
          className="btn btnEdit"
          onClick={() => onEdit(user.id)}
        >
          Editar
        </button>

        <button
          className="btn btnDelete"
          onClick={() => onDelete(user.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default UserCard;