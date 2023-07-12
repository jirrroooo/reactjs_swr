import useSWR from 'swr';

export default function Users() {
  const {
    data: users,
    error,
    mutate,
  } = useSWR('http://playground-laravel-swr.test/api/users');

  if (error) return <div>failed to load</div>;
  if (!users) return <div>loading...</div>;

  // render data
  return (
    <>
      <button onClick={() => mutate()}>Re-fetch data</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
