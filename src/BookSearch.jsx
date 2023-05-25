import { GET_BOOK } from "./Queries";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function BookSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [getBook, { loading, error, data }] = useLazyQuery(GET_BOOK);

  const handleSearch = () => {
    getBook({ variables: { id: parseInt(searchTerm) } });
  };

  if (loading)
    return (
      <img
        src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=1500&name=CSS%20infinite%20loading%20animation%20example.gif"
        alt="..."
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  const book = data?.book;

  return (
    <div>
      <h1 className="m-5">Search for a Book</h1>

      <div>
        <input
          className="form-control m-3"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Book ID"
        />
      </div>
      <button onClick={handleSearch} type="button" className="btn btn-outline-info btn-lg m-3">
        Search
      </button>
      {book ? (
        <>
          <h3>Title: {book.title}</h3>
          <img src={book.image} alt="" />
          <h4>Author: {book.author}</h4>
          <p>Publication Year: {book.publicationYear}</p>
          <p>Created At: {book.createdAt}</p>
          <p>Updated At: {book.updatedAt}</p>
        </>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
}

export default BookSearch;
