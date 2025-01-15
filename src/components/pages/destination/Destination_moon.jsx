import NavBarDestination from "./NavBarDestination";
import img from "../../../assets/destination/image-moon.webp";

export default function Destination_moon() {
  return (
    <section className="flex justify-around h-full w-full">
      <div className="w-1/2 flex flex-col justify-around items-center">
        <h2 className="uppercase text-2xl text-white"><span className="text-[#979797] font-bold pr-4">01</span> Pick your destination</h2>
        <img src={img} alt="moon"/>
      </div>
      <div className="w-1/2 flex flex-col justify-center gap-8">
          <NavBarDestination/>
          <h1 className="text-9xl text-white uppercase">Moon</h1>
          <p className="text-[#979797] text-lg w-3/4">
            See our planet as you’ve never seen it before. A perfect relaxing trip
            away to help regain perspective and come back refreshed. While you’re
            there, take in some history by visiting the Luna 2 and Apollo 11
            landing sites.
          </p>
          <div className="flex justify-between items-center w-1/2 text-[#979797] text-lg uppercase pt-8 border-solid border-t-2 border-[#979797]">
            <p className="flex flex-col gap-2">
              Avg. distance <span className="text-white text-2xl">384,400 km</span>
            </p>
            <p className="flex flex-col gap-2">
              Est. travel time <span className="text-white text-2xl">3 days</span>
            </p>
          </div>
      </div>
    </section>
  );
}
