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
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;
