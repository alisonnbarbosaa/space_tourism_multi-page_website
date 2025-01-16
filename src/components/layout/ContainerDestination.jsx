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
    <section className="flex justify-around h-full w-full">
      <div className="w-1/2 flex flex-col justify-around items-center">
        <h2 className="uppercase text-2xl text-white">
          <span className="text-[#979797] font-bold pr-2">01</span>
          Pick your destination
        </h2>
        <img src={img} alt="" className="rotatePlanet"/>
      </div>
      <div className="w-1/2 flex flex-col justify-center gap-8">
        <NavBarDestination />
        <h1 className="text-9xl text-white uppercase">{h1}</h1>
        <p className="text-[#979797] text-lg w-3/4">{description}</p>
        <div className="flex justify-between items-center w-1/2 text-[#979797] text-lg uppercase pt-8 border-solid border-t-2 border-[#979797]">
          <p className="flex flex-col gap-2">
            {p1}
            <span className="text-white text-2xl">{spanP1}</span>
          </p>
          <p className="flex flex-col gap-2">
            {p2}
            <span className="text-white text-2xl">{spanP2}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
