import "./Header.css";

export default function Header() {
  return (
    <div>
              <div className="nav-background">
        <div className="nav-container">
          <header className="nav-header">
            <h1>
              <a href="#" className="nav-logo">
                ReactApp
              </a>
            </h1>
          </header>
          <nav>
            <ul className="nav-ul">
              <li>
                <a href="#" className="nav-link nav-active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  News
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
