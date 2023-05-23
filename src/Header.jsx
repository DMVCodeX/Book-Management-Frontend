export function Header() {
  return (
    <div>
      <header>
        <nav className="m-3">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active a " aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a " href="/booklist">
                Browse Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a " href="/findbook">
                Find a Book
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a">Pending Assignment</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
