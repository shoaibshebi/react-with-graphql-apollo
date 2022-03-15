import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users(limit: 20) {
      name
    }
  }
`;
export const useUsers = () => {
  const { loading, data, error } = useQuery(GET_USERS);
  return {
    loading,
    data,
    error,
  };
};
