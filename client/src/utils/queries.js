import { gql } from "@apollo/client";

export const QUERY_BOOKS = gql`
  query {
    books {
      _id
      title
      image
      link
      authors
    }
  }
`;

export const QUERY_GET_ME = gql`
  {
    me {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
    }
  }
`;
