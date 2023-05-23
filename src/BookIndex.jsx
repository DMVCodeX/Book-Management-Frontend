import { ALL_BOOKS } from "./Queries";
import { useQuery } from "@apollo/client";

export function BookIndex() {
  const { loading, error, data } = useQuery(ALL_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="">
        <h1 className="m-5">Book Collection</h1>
        {data.books.map((book) => (
          <div className="card" key={book.id}>
            <h2 className="mt-5">{book.title}</h2>
            <img id="book-img" src={book.image} alt="" />
            <h4 className="mt-1">{book.author}</h4>
            <p>{book.publicationYear}</p>
          </div>
        ))}
      </div>
    </>
  );
}
