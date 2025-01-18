import NavBarCrew from "./NavBarCrew";

export default function ContainerCrew({ img, h1, h2, description }) {
  return (
    <section className="flex h-full w-full max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center">
      <div className="w-1/2 flex justify-center items-center max-sm:w-full">
        <div className="w-3/4 h-full flex flex-col justify-evenly max-sm:flex-col-reverse max-sm:w-full max-sm:items-center max-sm:gap-4 max-sm:pt-4">
          <h3 className="uppercase text-2xl text-white max-sm:hidden">
            <span className="text-[#979797] font-bold pr-2">02</span> Meet your
            crew
          </h3>
          <div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center">
            <h2 className="text-[#979797] text-2xl uppercase">{h2}</h2>
            <h1 className="text-6xl text-white uppercase max-sm:text-4xl">
              {h1}
            </h1>
            <p className="text-[#979797] text-lg w-3/4">{description}</p>
          </div>
          <NavBarCrew />
        </div>
      </div>
      <div className="w-1/2 flex justify-center max-sm:border-b-2 border-[#979797]">
        <img src={img} alt="" className="h-full" />
      </div>
      <h3 className="uppercase text-2xl text-white pb-4 sm:hidden">
        <span className="text-[#979797] font-bold pr-2">02</span> Meet your crew
      </h3>
    </section>
  );
}
