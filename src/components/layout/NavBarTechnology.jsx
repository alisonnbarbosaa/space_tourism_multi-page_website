import { NavLink } from "react-router";

export default function NavBarTechnology() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink
            to="/technology_vehicle"
            className={({ isActive }) =>
              isActive ? "active_technology" : "inactive_technology"
            }
          >
            <button>1</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology_spaceport"
            className={({ isActive }) =>
              isActive ? "active_technology" : "inactive_technology"
            }
          >
            <button>2</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology_capsule"
            className={({ isActive }) =>
              isActive ? "active_technology" : "inactive_technology"
            }
          >
            <button>3</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
