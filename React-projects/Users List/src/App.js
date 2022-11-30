import React from 'react';
import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const userAddHandler = (username, age) => {
    const user = { username, age: +age };

    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <>
      <AddUser onAddUser={userAddHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
