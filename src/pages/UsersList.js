import { useUsers } from "./queries/useUsers";

export default function CharactersList() {
  const { loading, data, error } = useUsers();

  return (
    <div>
      {loading && <h1>Just loading...</h1>}
      {error && <h1>Error ocurred</h1>}
      <ul>{data && data.users.map((x, i) => <li key={i}>{x.name}</li>)}</ul>
    </div>
  );
}
