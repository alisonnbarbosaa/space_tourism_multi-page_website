import NavBarTechnology from "./NavBarTechnology";

export default function ContainerTechnology({ img, h1, h3, description }) {
  return (
    <section className="flex h-full w-full">
      <div className="w-3/5 flex flex-col items-end">
        <div className="w-4/5 h-3/4 flex flex-col justify-around">
          <h2 className="uppercase text-2xl text-white">
            <span className="text-[#979797] font-bold pr-2">03</span> Space launch 101
          </h2>
          <div className="flex items-center gap-16">
            <NavBarTechnology />
            <div>
              <h3 className="text-[#979797] text-xl uppercase">{h3}</h3>
              <h1 className="text-5xl text-white uppercase py-4">{h1}</h1>
              <p className="text-[#979797] text-lg w-3/4">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex justify-end items-center">
        <img src={img} alt="" />
      </div>
    </section>
  );
}
