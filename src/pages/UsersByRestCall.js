import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const GET_USERS = gql`
  query GetUsers($limit: Int) {
    users(limit: $limit) {
      name
      twitter
      rocket
    }
  }
`;

export default function UsersByRestCall() {
  const [data, setData] = useState([]);
  const client = new GraphQLClient("https://api.spacex.land/graphql/");

  //Custom set header and endpoint
  /* client.setHeader()
   client.setEndpoint()*/

  useEffect(async () => {
    //ONE WAY

    /*request("https://api.spacex.land/graphql/", GET_USERS).then((data) =>
    //   setData([...data?.users])
    // );
    // const data = await request(restLink, GET_USERS);
    // const data = await request("https://api.spacex.land/graphql/", GET_USERS);*/

    try {
      const data = await client.request(GET_USERS, {
        limit: 21,
      });
    } catch (error) {
      console.error("client err ", error);
    }
  }, []);

  return (
    <div>
      <span>---</span>
      <ul>{data && data.map((x, i) => <li key={i}>{x.name}</li>)}</ul>
    </div>
  );
}
