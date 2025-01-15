import { Link } from "react-router";

export default function Home() {
  return (
    <section className="flex justify-around h-full w-full">
      <div className="w-1/3 flex flex-col justify-center items-start gap-8">
        <h2 className="text-[#979797] uppercase text-xl">
          So, you want to travel to
        </h2>
        <h1 className="text-white uppercase text-9xl">Space</h1>{" "}
        <p className="text-[#979797] text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center">
        <Link to="destination_moon">
          <button className="uppercase text-2xl w-56 h-56 rounded-full bg-white hover:w-60 hover:h-60 duration-200">
            Explore
          </button>
        </Link>
      </div>
    </section>
  );
}
