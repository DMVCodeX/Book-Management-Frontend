import { BookList } from "./BookList";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { FindBook } from "./FindBook";

export function Content() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="/booklist" element={<BookList />} />
          <Route path="/findbook" element={<FindBook />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
