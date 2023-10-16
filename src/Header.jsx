import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/new">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/new">
                Create
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
