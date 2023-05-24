import { useQuery } from "@apollo/client";
import { GET_BOOK } from "./Queries";

// eslint-disable-next-line react/prop-types
export function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  if (loading)
    return (
      <img
        src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=1500&name=CSS%20infinite%20loading%20animation%20example.gif"
        alt="..."
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  const book = data.book;

  return (
    <div>
      <h1>Book Details</h1>
      <img src={book.image} alt="" />
      <h3>Title: {book.title}</h3>
      <h4>Author: {book.author}</h4>
      <p>Publication Year: {book.publicationYear}</p>
      <p>Created At: {book.createdAt}</p>
      <p>Updated At: {book.updatedAt}</p>
    </div>
  );
}

export default BookDetails;
