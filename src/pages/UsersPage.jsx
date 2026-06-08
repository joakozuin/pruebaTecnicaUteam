import "./UsersPage.css";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../services/userService";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">
        Prueba Técnica Uteam
      </h1>

      <p className="pageSubtitle">
        Gestión de usuarios mediante API REST
      </p>

      <UserList users={users} />
    </div>
  );
}

export default UsersPage;