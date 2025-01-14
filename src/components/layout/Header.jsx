import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
