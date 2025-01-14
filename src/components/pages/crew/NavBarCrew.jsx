import { Link } from "react-router";

export default function NavBarCrew() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/crew_commander">a</Link>
        </li>
        <li>
          <Link to="/crew_engineer">b</Link>
        </li>
        <li>
          <Link to="/crew_pilot">c</Link>
        </li>
        <li>
          <Link to="/crew_specialist">d</Link>
        </li>
      </ul>
    </nav>
  );
}
