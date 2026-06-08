import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import { getUsers } from "../services/userService";
import "./UsersPage.css";

function UsersPage() {
  const [users, setUsers] = useState([]);

  const [newName, setNewName] =
    useState("");

  const [newEmail, setNewEmail] =
    useState("");

  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const addUser = (e) => {
    e.preventDefault();

    if (!newName || !newEmail || !newPhone) return;

    const user = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      phone: newPhone,
    };

    setUsers((prev) => [
      user,
      ...prev,
    ]);

    setNewName("");
    setNewEmail("");
    setNewPhone("");
  };

  const deleteUser = (id) => {
    setUsers((prev) =>
      prev.filter(
        (user) => user.id !== id
      )
    );
  };

  const editUser = (id) => {
    const user = users.find(
      (user) => user.id === id
    );

    const newUserName = prompt(
      "Nuevo nombre",
      user.name
    );

    if (!newUserName) return;

    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              name: newUserName,
            }
          : user
      )
    );
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">
        Prueba Técnica 
      </h1>

      <p className="pageSubtitle">
        CRUD de Usuarios consumiendo API
        REST
      </p>

      <UserForm
        newName={newName}
        setNewName={setNewName}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        onSubmit={addUser}
      />

      <UserList
        users={users}
        onDelete={deleteUser}
        onEdit={editUser}
      />
    </div>
  );
}

export default UsersPage;