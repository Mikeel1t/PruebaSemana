import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  return (
    <div>
      <h1>Usuarios</h1>

      {users.map((u) => (
        <div key={u.id}>
          <img src={u.image} width={80} />
          <p>{u.firstName} {u.lastName}</p>
        </div>
      ))}
    </div>
  );
}