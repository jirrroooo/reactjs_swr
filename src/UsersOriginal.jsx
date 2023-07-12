import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usersError, setUsersError] = useState(null);

  useEffect(() => {
    console.log('Users component mounting');
    setIsLoading(true);
    fetch('http://playground-laravel-swr.test/api/users')
      .then(response => response.json())
      .then(result => {
        setUsers(result);
        console.log(result);
      })
      .catch(error => {
        console.log('There was an error');
        // console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
