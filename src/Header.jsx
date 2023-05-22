export function Header() {
  return (
    <div>
      <header>
        <nav className="m-3">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bookindex">
                Browse Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/findbook">
                Find a Book
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
