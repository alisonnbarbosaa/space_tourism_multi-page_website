import NavBarTechnology from "./NavBarTechnology";

export default function ContainerTechnology({
  img,
  imgMobile,
  h1,
  h3,
  description,
}) {
  return (
    <section className="flex h-full w-full max-lg:flex-col-reverse max-lg:items-center sm:max-lg:justify-end">
      <div className="w-3/5 flex flex-col items-end max-lg:w-full">
        <div className="w-4/5 h-3/4 flex flex-col justify-around max-lg:w-full">
          <h2 className="uppercase text-2xl text-white max-lg:hidden">
            <span className="text-[#979797] font-bold pr-2">03</span> Space
            launch 101
          </h2>
          <div className="flex items-center gap-16 max-lg:flex-col sm:max-lg:gap-4">
            <NavBarTechnology />
            <div className="max-lg:flex flex-col justify-center items-center max-lg:text-center">
              <h3 className="text-[#979797] text-xl uppercase">{h3}</h3>
              <h1 className="text-5xl text-white uppercase py-4 max-lg:text-3xl">
                {h1}
              </h1>
              <p className="text-[#979797] text-lg w-3/4">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 max-lg:w-full flex justify-end sm:max-lg:justify-center items-center max-lg:py-4">
        <picture>
          <source media="(max-width: 1024px)" srcset={imgMobile} />
          <img src={img} alt="" />
        </picture>
      </div>
      <h2 className="uppercase text-xl text-white hidden max-lg:block sm:max-lg:w-4/5">
        <span className="text-[#979797] font-bold pr-2">03</span> Space launch
        101
      </h2>
    </section>
  );
}
