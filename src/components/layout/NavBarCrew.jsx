import { Link } from "react-router";

export default function NavBarCrew() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link to="/crew_commander">
            <div className="bg-white w-4 h-4 rounded-full"></div>
          </Link>
        </li>
        <li>
          <Link to="/crew_specialist">
            <div className="bg-white w-4 h-4 rounded-full"></div>
          </Link>
        </li>
        <li>
          <Link to="/crew_pilot">
            <div className="bg-white w-4 h-4 rounded-full"></div>
          </Link>
        </li>
        <li>
          <Link to="/crew_engineer">
            <div className="bg-white w-4 h-4 rounded-full"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
