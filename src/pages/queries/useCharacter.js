import { useQuery, gql } from "@apollo/client";

//name of the var and its type(! ensures that its necessary)
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;
export const useCharacter = (id) => {
  const { loading, data, error } = useQuery(GET_CHARACTER, {
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
