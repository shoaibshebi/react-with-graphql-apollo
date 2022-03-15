import gql from "graphql-tag";
import React from "react";
import { useSubscription } from "@apollo/react-hooks";

const SUBSCRIBE_USER_ADDED = gql`
  subscription onUserAdded($title: String!) {
    userAdded(title: $title) {
      id
      title
      url
    }
  }
`;

const UserSubscription = () => {
  const { data, error, loading } = useSubscription(SUBSCRIBE_USER_ADDED, {
    variables: {
      title: "My New User",
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="notification">
      <h2>New User!</h2>
      <p>
        ID: <strong> {!loading && data.userAdded.id} </strong>
      </p>
      <p>
        TITLE: <strong> {!loading && data.userAdded.title} </strong>
      </p>
      <p>
        URL: <strong> {!loading && data.userAdded.url} </strong>
      </p>
    </div>
  );
};

export default UserSubscription;
