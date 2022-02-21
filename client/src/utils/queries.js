import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;
