import NavBarDestination from "./NavBarDestination";

export default function ContainerDestination({
  img,
  h1,
  description,
  p1,
  p2,
  spanP1,
  spanP2,
}) {
  return (
    <section className="flex justify-around h-full w-full max-sm:flex-col max-sm:items-center max-sm:gap-8 max-sm:pb-4 max-sm:pt-8 max-sm:h-min">
      <div className="w-1/2 max-sm:w-full flex flex-col justify-around items-center max-sm:gap-8">
        <h2 className="uppercase text-xl text-white">
          <span className="text-[#979797] font-bold pr-2">01</span>
          Pick your destination
        </h2>
        <img src={img} alt="" className="rotatePlanet max-sm:w-60"/>
      </div>
      <div className="w-1/2 max-sm:w-full flex flex-col justify-center gap-8 max-sm:items-center">
        <NavBarDestination />
        <h1 className="text-9xl text-white uppercase max-sm:text-6xl">{h1}</h1>
        <p className="text-[#979797] text-lg w-3/4 max-sm:text-center">{description}</p>
        <div className="flex justify-between items-center w-1/2 text-[#979797] text-lg uppercase pt-8 border-solid border-t-2 border-[#979797] max-sm:flex-col max-sm:gap-8 max-sm:text-base">
          <p className="flex flex-col gap-2 max-sm:text-center">
            {p1}
            <span className="text-white text-3xl">{spanP1}</span>
          </p>
          <p className="flex flex-col gap-2 max-sm:text-center">
            {p2}
            <span className="text-white text-3xl">{spanP2}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
