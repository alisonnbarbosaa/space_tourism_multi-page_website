import { Link } from "react-router";

export default function Home() {
  return (
    <section className="flex justify-around h-full w-full max-sm:flex-col max-sm:items-center max-sm:h-screen">
      <div className="w-1/3 max-sm:h-1/2 flex flex-col justify-center items-start gap-8 max-sm:w-3/4 max-sm:items-center">
        <h2 className="text-[#979797] uppercase text-xl">
          So, you want to travel to
        </h2>
        <h1 className="text-white uppercase text-9xl max-sm:text-6xl">Space</h1>{" "}
        <p className="text-[#979797] text-lg max-sm:text-center">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-1/3 max-sm:h-1/2 flex flex-col justify-center items-center max-sm:w-full">
        <Link to="destination_moon">
          <button className="uppercase text-2xl w-56 h-56 rounded-full bg-white hover:w-60 hover:h-60 duration-200 max-sm:w-40 max-sm:h-40 max-sm:hover:w-44 max-sm:hover:h-44">
            Explore
          </button>
        </Link>
      </div>
    </section>
  );
}
