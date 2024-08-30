import { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]); // Replace with actual data fetching

  const handleDeleteUser = (userId: string) => {
    // Logic to delete user
  };

  const handlePromoteUser = (userId: string) => {
    // Logic to promote user to admin
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} ({user.role})
            </span>
            <button onClick={() => handlePromoteUser(user.id)}>
              Promote to Admin
            </button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
