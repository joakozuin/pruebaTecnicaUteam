import "./UserCard.css";

function UserCard({ user }) {
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
        <button className="btn btnEdit">
          Editar
        </button>

        <button className="btn btnDelete">
          Eliminar
        </button>
      </div>

    </div>
  );
}

export default UserCard;