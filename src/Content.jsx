import { BookList } from "./BookList";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AddBook } from "./AddBook";
import { BookSearch } from "./BookSearch";

export function Content() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/booklist" element={<BookList />} />
          <Route path="/booksearch" element={<BookSearch />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
