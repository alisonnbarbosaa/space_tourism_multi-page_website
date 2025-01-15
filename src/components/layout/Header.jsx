import { NavLink, Link } from "react-router";
import logo from "../../assets/shared/logo.svg";

export default function Header() {
  return (
    <header className="h-1/6 flex justify-between items-center pl-16">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="backdrop-blur bg-[#ffffff1d] w-2/3 h-1/2 flex items-center">
        <ul className="w-full flex items-center justify-evenly uppercase">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#979797]"
              }
            >
              <span className="text-white font-semibold mr-2">00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination_moon"
              className={({ isActive }) =>
                isActive || window.location.pathname.startsWith("/destination")
                  ? "active"
                  : "text-[#979797]"
              }
            >
              <span className="text-white font-semibold mr-2">01</span>
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew_commander"
              className={({ isActive }) =>
                isActive || window.location.pathname.startsWith("/crew")
                  ? "active"
                  : "text-[#979797]"
              }
            >
              <span className="text-white font-semibold mr-2">02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology_vehicle"
              className={({ isActive }) =>
                isActive || window.location.pathname.startsWith("/technology")
                  ? "active"
                  : "text-[#979797]"
              }
            >
              <span className="text-white font-semibold mr-2">03</span>{" "}
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
