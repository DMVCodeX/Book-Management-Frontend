import { BookIndex } from "./BookIndex";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="/bookindex" element={<BookIndex />} />
        </Routes>
      </div>
    </>
  );
}
