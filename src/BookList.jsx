import { ALL_BOOKS, DELETE_BOOK } from "./Queries";
import { useQuery, useMutation } from "@apollo/client";

export function BookList() {
  const { loading, error, data } = useQuery(ALL_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK, { refetchQueries: [{ query: ALL_BOOKS }] });

  const handleDeleteBook = (id) => {
    deleteBook({ variables: { id: parseInt(id) } });
  };

  if (loading)
    return (
      <img
        src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=1500&name=CSS%20infinite%20loading%20animation%20example.gif"
        alt="Loading..."
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {console.log(data)}
      <h1 className="m-5">Book Collection</h1>
      <div className="" id="book-index">
        {data.books.map((book) => (
          <div className="" key={book.id}>
            <h3 className="m-3">{book.title}</h3>
            Book ID: {book.id}
            <img className="mt-3" id="book-img" src={book.image} alt="" />
            <p className="mt-3">{book.author}</p>
            <p>{book.publicationYear}</p>
            <p>Created At: {book.createdAt}</p>
            <p>Updated At: {book.updatedAt}</p>
            <button
              onClick={() => handleDeleteBook(book.id)}
              type="button"
              value={book.id}
              className="btn btn-outline-info btn-lg m-3 d-grid gap-2 col-6 mx-auto mb-5"
            >
              {" "}
              Delete {book.title}{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
