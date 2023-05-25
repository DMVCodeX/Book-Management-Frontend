import { ALL_BOOKS } from "./Queries";
import { useQuery } from "@apollo/client";

export function BookList() {
  const { loading, error, data } = useQuery(ALL_BOOKS);

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
            <h3 className="m-5">{book.title}</h3>
            <img id="book-img" src={book.image} alt="" />
            <p className="mt-3">{book.author}</p>
            <p>{book.publicationYear}</p>

            <button
              type="button"
              value={book.id}
              className="btn btn-outline-info btn-lg m-3 d-grid gap-2 col-6 mx-auto"
            >
              {" "}
              Update {book.title}{" "}
            </button>
            <button
              type="button"
              value={book.id}
              className="btn btn-outline-info btn-lg m-3 d-grid gap-2 col-6 mx-auto"
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
