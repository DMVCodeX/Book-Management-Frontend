import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query AllBooks {
    books {
      id
      title
      author
      publicationYear
      image
      createdAt
      updatedAt
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($id: Int!) {
    book(id: $id) {
      id
      title
      author
      publicationYear
      image
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $publicationYear: Int!, $author: String!, $image: String) {
    createBook(title: $title, publicationYear: $publicationYear, author: $author, image: $image) {
      id
      title
      author
      publicationYear
      image
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: Int!, $title: String, $author: String, $publicationYear: Int, $image: String) {
    updateBook(id: $id, title: $title, author: $author, publicationYear: $publicationYear, image: $image) {
      id
      title
      author
      publicationYear
      image
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: Int!) {
    deleteBook(id: $id) {
      id
      title
      author
      publicationYear
      image
      createdAt
      updatedAt
    }
  }
`;
