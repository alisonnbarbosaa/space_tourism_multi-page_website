import { Link } from "react-router";
import logo from "../../assets/shared/logo.svg";

export default function Header() {
  return (
    <header className="h-1/6 flex justify-between items-center pl-16">
      <Link>
        <img src={logo} alt="logo" />
      </Link>
      <nav className="backdrop-blur bg-[#ffffff1d] w-2/3 h-1/2 flex items-center">
        <ul className="w-full flex items-center justify-evenly uppercase">
          <li>
            <Link to="/" className="text-[#979797]"><span className="text-white font-semibold mr-2">00</span> Home</Link>
          </li>
          <li>
            <Link to="/destination_moon" className="text-[#979797]"><span className="text-white font-semibold mr-2">01</span> Destination</Link>
          </li>
          <li>
            <Link to="/crew_commander" className="text-[#979797]"><span className="text-white font-semibold mr-2">02</span> Crew</Link>
          </li>
          <li>
            <Link to="/technology_vehicle" className="text-[#979797]"><span className="text-white font-semibold mr-2">03</span> Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
