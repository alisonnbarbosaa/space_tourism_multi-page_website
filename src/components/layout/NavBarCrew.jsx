import { NavLink } from "react-router";

export default function NavBarCrew() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <NavLink
            to="/crew_commander"
            className={({ isActive }) =>
              isActive ? "active_crew" : "inactive_crew"
            }
          >
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew_specialist"
            className={({ isActive }) =>
              isActive ? "active_crew" : "inactive_crew"
            }
          >
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew_pilot"
            className={({ isActive }) =>
              isActive ? "active_crew" : "inactive_crew"
            }
          >
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew_engineer"
            className={({ isActive }) =>
              isActive ? "active_crew" : "inactive_crew"
            }
          >
            <div></div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
