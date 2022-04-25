import { useEffect, useState } from "react";
import { request } from "graphql-request";

import User from "./User";
import { GET_USERS, ADD_USER, DELETE_USER } from "./queries";
import { useQuery, gql } from "@apollo/client";

export const GET_USERSS = gql`
  query GetUsers($limit: Int) {
    users(limit: $limit, order_by: { timestamp: desc }) {
      id
      name
      twitter
    }
  }
`;

const BASE_URL = "https://api.spacex.land/graphql/";

export default function Users() {
  const { data } = useQuery(GET_USERSS);
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const data = await request(BASE_URL, GET_USERS, {
      limit: 10,
    });
    setItems([...data?.users]);
  }, []);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setUser(newValue);
  };

  const addUser = async () => {
    try {
      const data = await request(BASE_URL, ADD_USER, {
        name: user,
      });
      let { name, id } = data.insert_users.returning[0];

      setItems((prevValues) => {
        return [...prevValues, { id: id, name: name }];
      });
      setUser("");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (userId) => {
    try {
      const data = await request(BASE_URL, DELETE_USER, {
        id: userId,
      });
      let { id, name } = data.delete_users.returning[0];
      setItems((prevValues) => {
        return prevValues.filter((item) => {
          return item.id !== id;
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>ADD User List</h1>
      </div>
      <div className="form">
        <input
          name="userInput"
          type="text"
          onChange={handleChange}
          value={user}
        />
        <button onClick={addUser}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <User
              key={index}
              id={item.id}
              text={item.name ? item.name : "Dummy"}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
