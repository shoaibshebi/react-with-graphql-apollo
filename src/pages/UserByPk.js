import React from "react";
import { useUserByPk } from "./queries/useUserByPk";

export default function UserByPk() {
  const {
    loading: singleFetching,
    data: singleCharResult,
    error: singleError,
  } = useUserByPk("4e14b0e4-3811-4bdd-8394-6b6750aa517f");

  return (
    <div>
      {singleFetching && <h1>Just single loading...</h1>}
      {singleError && <h1>Error ocurred</h1>}
      {singleCharResult && <p>{singleCharResult.users_by_pk.name} </p>}
    </div>
  );
}
