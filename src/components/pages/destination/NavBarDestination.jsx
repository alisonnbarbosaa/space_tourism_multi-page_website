import { Link } from "react-router";

export default function NavBarDestination() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/destination_moon">Moon</Link>
        </li>
        <li>
          <Link to="/destination_mars">Mars</Link>
        </li>
        <li>
          <Link to="/destination_europa">Europa</Link>
        </li>
        <li>
          <Link to="/destination_titan">Titan</Link>
        </li>
      </ul>
    </nav>
  );
}
