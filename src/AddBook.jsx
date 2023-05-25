import { CREATE_BOOK } from "./Queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";

export function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publicationYear: null,
    image: "",
  });

  const [createBook, { loading, error }] = useMutation(CREATE_BOOK);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title || !formData.author || !formData.publicationYear || !formData.image) {
      console.error("Please fill in all required fields");
      return;
    }
    console.log(formData);

    createBook({ variables: { ...formData, publicationYear: parseInt(formData.publicationYear) } })
      .then((res) => {
        console.log(res);
        console.log("Book created successfully");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error creating book:", error.message);
      });
  };

  return (
    <div>
      <h1 className="m-5">Add a Book</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <label className="form-label">Title</label>
        <input className="form-control" name="title" type="text" onChange={handleInputChange} />
        <br />
        <label className="form-label">Author</label>
        <input className="form-control" name="author" type="text" onChange={handleInputChange} />
        <br />
        <label className="form-label">Publication Year</label>
        <input className="form-control" name="publicationYear" type="number" onChange={handleInputChange} />
        <br />
        <label className="form-label">Image URL</label>
        <input className="form-control" name="image" type="text" onChange={handleInputChange} />
        <br />

        <button className="btn btn-outline-info btn-lg m-3 d-grid gap-2 col-6 mx-auto" type="submit">
          Add Book
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
