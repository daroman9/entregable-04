import React from "react";

const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id} className="user-column">
          <div className="user">
            <div className="user-info">
              <h3>
                <strong>
                  {user.first_name} {user.last_name}
                </strong>
              </h3>
              <p>{user.email}</p>
              <p>{user.birthday}</p>
            </div>
            <div className="user-button-container">
              <button
                className="user-buttons red"
                onClick={() => deleteUser(user.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <button
                className="user-buttons blue"
                onClick={() => selectUser(user)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
