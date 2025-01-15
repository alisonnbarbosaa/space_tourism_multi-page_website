import { Link } from "react-router";

export default function NavBarTechnology() {
  return (
    <nav>
      <ul className='flex flex-col gap-4'>
        <li>
          <Link to="/technology_vehicle"><button className="w-20 h-20 border-solid border-2 border-[#979797] rounded-full text-white text-2xl">1</button></Link>
        </li>
        <li>
          <Link to="/technology_spaceport"><button className="w-20 h-20 border-solid border-2 border-[#979797] rounded-full text-white text-2xl">2</button></Link>
        </li>
        <li>
          <Link to="/technology_capsule"><button className="w-20 h-20 border-solid border-2 border-[#979797] rounded-full text-white text-2xl">3</button></Link>
        </li>
      </ul>
    </nav>
  );
}
