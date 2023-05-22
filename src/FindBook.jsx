export function FindBook() {
  return (
    <div>
      <h1 className="m-5">Find a Book Form</h1>
      <form className="form-control">
        <label className="form-label">Title</label>
        <input className="form-control" name="title" type="text" />
        <br />
        <label className="form-label">Author</label>
        <input className="form-control" name="author" type="text" />
        <br />
        <label className="form-label">Publication Year</label>
        <input className="form-control" name="publicationYear" type="text" />

        <button className="btn btn-outline-info btn-lg m-3 d-grid gap-2 col-6 mx-auto" type="submit">
          {" "}
          Search{" "}
        </button>
      </form>
    </div>
  );
}
