import { gql } from "graphql-request";

export const GET_USERS = gql`
  query GetUsers($limit: Int) {
    users(limit: $limit, order_by: { timestamp: desc }) {
      id
      name
      twitter
    }
  }
`;
export const ADD_USER = gql`
  mutation AddUser($name: String) {
    insert_users(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;
export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users(where: { id: { _eq: $id } }) {
      returning {
        id
        name
      }
    }
  }
`;
