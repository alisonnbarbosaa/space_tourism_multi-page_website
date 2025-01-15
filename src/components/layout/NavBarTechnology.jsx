import { Link } from "react-router";

export default function NavBarTechnology() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/technology_vehicle">1</Link>
        </li>
        <li>
          <Link to="/technology_spaceport">2</Link>
        </li>
        <li>
          <Link to="/technology_capsule">3</Link>
        </li>
      </ul>
    </nav>
  );
}
