import gql from "graphql-tag";

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

export const GET_ME = gql`
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
