import { NavLink } from "react-router";

export default function NavBarDestination() {
  return (
    <nav>
      <ul className="text-[#979797] flex items-center gap-12 uppercase">
        <li>
          <NavLink
            to="/destination_moon"
            className={({ isActive }) =>
              isActive ? "active_destination" : "text-[#979797]"
            }
          >
            Moon
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination_mars"
            className={({ isActive }) =>
              isActive ? "active_destination" : "text-[#979797]"
            }
          >
            Mars
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination_europa"
            className={({ isActive }) =>
              isActive ? "active_destination" : "text-[#979797]"
            }
          >
            Europa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination_titan"
            className={({ isActive }) =>
              isActive ? "active_destination" : "text-[#979797]"
            }
          >
            Titan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
