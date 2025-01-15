import ContainerCrew from "../../layout/ContainerCrew";
import img from "../../../assets/crew/image-victor-glover.webp";

export default function Crew_pilot() {
  return (
    <ContainerCrew
      img={img}
      h1="Victor Glover"
      h2="Pilot"
      description="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    />
  );
}
