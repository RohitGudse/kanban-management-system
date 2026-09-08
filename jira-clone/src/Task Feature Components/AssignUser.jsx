import { useState } from "react";

export default function AssignUser() {
  const [selectedUser, setSelectedUser] = useState("");

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "David" },
    { id: 4, name: "Rohit" },
  ];

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="assign-user"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Assign User
      </label>

      <select
        id="assign-user"
        value={selectedUser}
        onChange={handleUserChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="">Select a user</option>

        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <p className="mt-2 text-sm text-gray-600">
          Selected User ID: {selectedUser}
        </p>
      )}
    </div>
  );
}