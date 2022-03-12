import { useCharacters } from "./queries/useCharacters";

export default function CharactersList() {
  const { loading, data, error } = useCharacters();

  console.log(data);
  return (
    <div>
      {loading && <h1>Just loading...</h1>}
      {error && <h1>Error ocurred</h1>}
      <ul>
        {data &&
          data.characters.results.map((x, i) => <li key={i}>{x.name}</li>)}
      </ul>
    </div>
  );
}
