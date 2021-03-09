import React from "react";
import { Jumbotron, Container, CardColumns, Card } from "react-bootstrap";

// import { getMe, deleteBook } from "../utils/API";
import Auth from "../utils/auth";
// import { removeBookId } from "../utils/localStorage";

import { useQuery } from "@apollo/client";
import { QUERY_BOOKS, QUERY_GET_ME } from "../utils/queries";

const SavedBooks = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const { data: userData } = useQuery(QUERY_GET_ME);
  const book = data?.book || [];

  const loggedIn = Auth.loggedIn();
  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  // const handleDeleteBook = async (bookId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const response = await deleteBook(bookId, token);

  //     if (!response.ok) {
  //       throw new Error("something went wrong!");
  //     }

  //     const updatedUser = await response.json();
  //     setUserData(updatedUser);
  //     // upon success, remove book's id from localStorage
  //     removeBookId(bookId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        {loggedIn && (
          <Container>
            <h1>Viewing saved books!</h1>
          </Container>
        )}
      </Jumbotron>
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <h2>
            {userData.savedBooks.length
              ? `Viewing ${userData.savedBooks.length} saved ${
                  userData.savedBooks.length === 1 ? "book" : "books"
                }:`
              : "You have no saved books!"}
          </h2>
        )}
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
