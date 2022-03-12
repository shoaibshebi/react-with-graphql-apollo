import React from "react";
import { useCharacter } from "./queries/useCharacter";

export default function Character() {
  const { loading, data, error } = useCharacter(2);

  return (
    <div>
      {loading && <h1>Just single loading...</h1>}
      {error && <h1>Error ocurred</h1>}
      {data && <p>{data.character.name} </p>}
    </div>
  );
}
