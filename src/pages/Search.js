import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  //first name of the first instance can be anything
  const [getLocations, { loading, data, error, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>

      {loading && <h1>Just single loading...</h1>}
      {error && <h1>Error ocurred</h1>}
      {data && (
        <p>
          {data.characters.results.map((x, i) => (
            <li key={i}>{x.location.name}</li>
          ))}{" "}
        </p>
      )}
    </div>
  );
}
