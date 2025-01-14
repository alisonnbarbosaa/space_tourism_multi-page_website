import { Link } from "react-router";

export default function Header() {
  return (
    <header className="h-1/6">
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">00 Home</Link>
          </li>
          <li>
            <Link to="/destination_moon">01 Destination</Link>
          </li>
          <li>
            <Link to="/crew">02 Crew</Link>
          </li>
          <li>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
