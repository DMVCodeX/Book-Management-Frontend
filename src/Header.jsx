export function Header() {
  return (
    <div>
      <header>
        <nav className="m-3">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active a " aria-current="page" href="/home">
                <button className="btn btn-outline-info  m-1">Home</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a " href="/booklist">
                <button className="btn btn-outline-info  m-1">Browse Books</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a " href="/addbook">
                <button className="btn btn-outline-info  m-1">Add a Book</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
