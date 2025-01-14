import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Destination</Link>
          </li>
          <li>
            <Link>Crew</Link>
          </li>
          <li>
            <Link>Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
