import { useQuery, gql } from "@apollo/client";

//name of the var and its type(! ensures that its necessary)
const GET_USER_BY_PK = gql`
  query GetUsers($id: uuid!) {
    users_by_pk(id: $id) {
      name
    }
  }
`;

export const useUserByPk = (id) => {
  const { loading, data, error } = useQuery(GET_USER_BY_PK, {
    variables: {
      id: id,
    },
  });
  return {
    loading,
    data,
    error,
  };
};
