import { BookIndex } from "./BookIndex";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

export function Content() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="/bookindex" element={<BookIndex />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
