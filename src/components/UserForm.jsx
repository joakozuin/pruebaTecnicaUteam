import "./UserForm.css";

function UserForm({
  newName,
  setNewName,
  newEmail,
  setNewEmail,
  newPhone,
  setNewPhone,
  onSubmit,
}) {
  return (
    <form className="userForm" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
       <input
        type="text"
        placeholder="Ingrese teléfono"
        value={newPhone}
        onChange={(e) =>
          setNewPhone(e.target.value)
        }
      />

      <button type="submit">
        Agregar Usuario
      </button>
    </form>
  );
}

export default UserForm;