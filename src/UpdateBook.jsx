import { useMutation } from "@apollo/client";
import { ALL_BOOKS, UPDATE_BOOK } from "./Queries";
import { useState } from "react";
import { useQuery } from "@apollo/client";

export function UpdateBook() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({
    title: "",
    author: "",
    publicationYear: null,
    image: "",
  });

  const [updateBook] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }],
  });
  const { loading, error, data } = useQuery(ALL_BOOKS);

  if (loading)
    return (
      <img
        src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=1500&name=CSS%20infinite%20loading%20animation%20example.gif"
        alt="..."
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  const handleUpdateBook = (book) => {
    setSelectedBook(book);
    setUpdateFormData({
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
      image: book.image,
    });
  };

  const handleUpdateFormChange = (e) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateBookSubmit = (e) => {
    e.preventDefault();
    updateBook({
      variables: {
        id: selectedBook.id,
        title: updateFormData.title,
        author: updateFormData.author,
        publicationYear: parseInt(updateFormData.publicationYear),
        image: updateFormData.image,
      },
    })
      .then(() => {
        setSelectedBook(null);
        setUpdateFormData({
          title: "",
          author: "",
          publicationYear: null,
          image: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* ... */}
      {data.books.map((book) => (
        <div className="" key={book.id}>
          {/* ... */}
          <img className="mt-5" id="book-img" src={book.image} alt="" />
          <button
            onClick={() => handleUpdateBook(book)}
            type="button"
            value={book.id}
            className="btn btn-outline-info btn-lg m-3 d-grid gap-2 col-6 mx-auto"
          >
            Update {book.title}
          </button>
          {/* ... */}
        </div>
      ))}
      {/* ... */}
      {selectedBook && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Book</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedBook(null)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateBookSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={updateFormData.title}
                      onChange={handleUpdateFormChange}
                    />
                    <label htmlFor="author" className="form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="author"
                      name="author"
                      value={updateFormData.author}
                      onChange={handleUpdateFormChange}
                    />
                  </div>
                  <label htmlFor="publicationYear" className="form-label">
                    Publication Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="publicationYear"
                    name="publicationYear"
                    value={updateFormData.publicationYear}
                    onChange={handleUpdateFormChange}
                  />
                  <label htmlFor="image" className="form-label">
                    Image Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={updateFormData.image}
                    onChange={handleUpdateFormChange}
                  />
                  {/* ... Add other form fields */}
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateBook;
