import Link from "next/link";

export const Navbar = ({ active }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="./">
        BitzPrice
      </a>
      <ul className="navbar-nav ml-auto">
        <li className={`nav-item ${active === "home" && "active"}`}>
          <Link href="./">
            <a className="nav-link" href="#">
              Home
            </a>
          </Link>
        </li>
        <li className={`nav-item ${active === "active" && "active"}`}>
          <Link href="./about">
            <a className="nav-link" href="#">
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: rows;
          max-width: 960px;
          margin: auto;
        }
      `}
    </style>
  </nav>
);
